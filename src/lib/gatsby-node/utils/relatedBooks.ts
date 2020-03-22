import { RawBook } from 'types/book'
import { RawVideo } from 'types/video'
import { relateBook } from './schema'

const tagStarts = {
  genre: 2,
  sub: 2,
  pub: 1,
  type: 1,
}

export const compareBooks = (a: RawBook, b: RawBook): number => {
  let points = 0

  if (
    a.frontmatter &&
    a.frontmatter.author &&
    b.frontmatter &&
    b.frontmatter.author &&
    a.frontmatter.author.toLowerCase() === b.frontmatter.author.toLowerCase()
  )
    points += 3

  points += (b.frontmatter.tags || [])
    .filter((tag) => (a.frontmatter.tags || []).includes(tag))
    .map((tag) => {
      const matches = tag.match(/^([^-]+)/)

      return matches ? tagStarts[matches[1]] || 0 : 0
    })
    .reduce((acc, cur) => acc + cur, 0)

  return points
}

const sortBooksByRelation = (
  allBooks: RawBook[],
  sources: RawBook[],
  count: number
): RawBook[] => {
  if (!sources) return []

  const bookList = []
  allBooks.forEach((book) => {
    if (sources.map((s) => s.id).includes(book.id)) return

    bookList.push({
      points: sources
        .map((source) => compareBooks(source, book))
        .reduce((acc, cur) => acc + cur, 0),
      data: book,
    })
  })

  return bookList
    .sort((a, b) => b.points - a.points)
    .slice(0, count)
    .map((a) => a.data)
}

export const addRelatedBooksToBook = (
  source: RawBook,
  args: {},
  context: { nodeModel: { getAllNodes: ({ type: string }) => RawBook[] } }
): {} => {
  const allBooks = context.nodeModel
    .getAllNodes({
      type: 'MarkdownRemark',
    })
    .reverse() as RawBook[]

  return sortBooksByRelation(allBooks, [source], 8)
}

export const addRelatedBooksToVideo = (
  source: RawVideo,
  args: {},
  context: { nodeModel: { getAllNodes: ({ type: string }) => RawBook[] } }
): {} => {
  const allBooks = context.nodeModel
    .getAllNodes({
      type: 'MarkdownRemark',
    })
    .reverse() as RawBook[]

  const involvedBookStrings = [
    (source.ownedBy as unknown) as string,
    ...(source.timestamps || []).map(
      (t): string => (t.book as unknown) as string
    ),
  ].filter((b) => b)

  // return empty array for videos with no book involvement
  if (!involvedBookStrings.length) return []

  const booksFromInvolved = involvedBookStrings
    .map((b) => relateBook(b, allBooks))
    .filter((b) => b) as RawBook[]

  if (booksFromInvolved.length >= 8) return booksFromInvolved.slice(0, 8)

  const booksNeeded = 8 - booksFromInvolved.length

  // return books related to owned book
  if (source.ownedBy && booksFromInvolved.length > 0) {
    return [
      ...booksFromInvolved,
      ...sortBooksByRelation(allBooks, [booksFromInvolved[0]], booksNeeded),
    ]
  }

  // return mashup related to involved books
  return [
    ...booksFromInvolved,
    ...sortBooksByRelation(allBooks, booksFromInvolved, booksNeeded),
  ]
}
