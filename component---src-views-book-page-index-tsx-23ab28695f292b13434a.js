(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{C9hw:function(n,e,t){"use strict";t.r(e);t("dRSK");var r=t("q1tI"),a=t.n(r),i=t("vOnD"),u=t("rcno"),c=t("NsgW"),o=t("6t0R"),l=t("cRSu"),m=t("zQrH"),s=t("hQ1k"),d=t("VdcY"),f=t("lmt0"),g=t("7tht"),b=t("0M2Q");function v(){var n=h(["\n  margin: 0.5em 0 1em;\n"]);return v=function(){return n},n}function E(){var n=h(["\n  margin: 0;\n"]);return E=function(){return n},n}function h(n,e){return e||(e=n.slice(0)),n.raw=e,n}var p=Object(i.c)(b.a)(E()),O=Object(i.c)(b.a)(v()),w=function(n){var e=n.title,t=n.author,r=n.rating7;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,{as:"h2",size:"XXL",decorative:!0},e),a.a.createElement(O,{as:"h2",size:"M"},"by ",t),r&&a.a.createElement(g.a,{of7:r}))},S=(t("91GP"),t("9eSz")),y=t.n(S),k=t("6p55");function F(){var n=D(["\n    transform-origin: 0% 50%;\n  "]);return F=function(){return n},n}function j(){var n=D(["\n  box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.2), 0 0 0.6em rgba(0, 0, 0, 0.1);\n  vertical-align: bottom;\n  transform: scale(var(--book-scale));\n\n  ","\n"]);return j=function(){return n},n}function x(){var n=D(["\n    padding-left: ",";\n  "]);return x=function(){return n},n}function L(){var n=D(["\n    padding-left: ",";\n  "]);return L=function(){return n},n}function I(){var n=D(["\n    text-align: center;\n  "]);return I=function(){return n},n}function M(){var n=D(["\n  position: relative;\n  margin: 0;\n  box-sizing: border-box;\n  padding: 1em 0;\n  width: 100%;\n  border-radius: ",";\n\n  ","\n\n  ","\n  ","\n"]);return M=function(){return n},n}function D(n,e){return e||(e=n.slice(0)),n.raw=e,n}var z=i.c.figure(M(),k.a.S,s.b.m(I()),s.a.l(L(),Object(d.h)(d.e.L*(d.b.L+d.c.L))),s.a.xl(x(),Object(d.h)(d.e.XL*(d.b.XL+d.c.XL)))),B=Object(i.c)(y.a)(j(),s.c.l(F())),R=function(n){var e=n.image,t=n.bookHeight;return a.a.createElement(z,{style:{background:e.colors.muted}},a.a.createElement(B,{fixed:[Object.assign({},e.childImageSharp.h200,{media:"(max-width: "+(k.b.M-1)+"px)"}),Object.assign({},e.childImageSharp.h300,{media:"(min-width: "+k.b.M+"px) and (max-width: "+(k.b.L-1)+"px)"}),Object.assign({},e.childImageSharp.h400,{media:"(min-width: "+k.b.L+"px)"})],style:{"--book-scale":((t||198)/220).toFixed(2)},backgroundColor:e.colors.darkMuted}))};function X(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  margin-top: 1em;\n"]);return X=function(){return n},n}var A=i.c.div(X()),G=function(n){var e=n.summary,t=n.html;return a.a.createElement(A,null,e&&a.a.createElement("details",{style:{fontSize:"0.75em"}},a.a.createElement("summary",null,"Book sumary"),e),t&&a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))},P=(t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("KKXr"),{type:"Type",genre:"Genre",sub:"Subject"});function Z(){var n=K(["\n  line-height: 1.25;\n  margin: 0.5em 0;\n"]);return Z=function(){return n},n}function C(){var n=K(["\n  margin: 0;\n  font-size: ",";\n\n  span + span:before {\n    content: ', ';\n  }\n"]);return C=function(){return n},n}function K(n,e){return e||(e=n.slice(0)),n.raw=e,n}var q=i.c.ol(C(),k.d.SIZE.S),H=i.c.li(Z()),Q=function(n){var e=n.tags;if(!e||0===e.length)return null;var t=function(n){var e={};return n.forEach((function(n){var t=n.split("-");if(1!==t.length){var r=t[0],a=t.slice(1).join("-");if(!e[r])return e[r]=[a];e[r].push(a)}})),Object.keys(P).filter((function(n){return e[n]})).map((function(n){return{prefix:P[n],values:e[n]}}))}(e);return a.a.createElement(q,null,t.map((function(n){var e=n.prefix,t=n.values;return a.a.createElement(H,{key:e},a.a.createElement("strong",null,e)," – ",t.map((function(n){return a.a.createElement("span",{key:n},n)})))})))};function T(){var n=_(["\n  font-size: ",";\n  margin: 0 0 1em;\n"]);return T=function(){return n},n}function Y(){var n=_(["\n  font-size: ",";\n  font-weight: ",";\n"]);return Y=function(){return n},n}function _(n,e){return e||(e=n.slice(0)),n.raw=e,n}var N=i.c.dt(Y(),k.d.SIZE.S,k.d.WEIGHT.BOLD),U=i.c.dd(T(),k.d.SIZE.S),V=function(n){var e=n.pageCount,t=n.dateBookPublished,r=n.publisher,i=n.tags,u=n.readDates,c=n.dateRated,o=n.dateReviewed;return a.a.createElement("div",null,a.a.createElement("dl",null,e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,"Page count"),a.a.createElement(U,null,e)),t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,"Year published"),a.a.createElement(U,null,Object(f.c)(t))),r&&a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,"Publisher"),a.a.createElement(U,null,r)),a.a.createElement(Q,{tags:i})),a.a.createElement("dl",null,u.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,"Date read"),a.a.createElement(U,null,Object(f.d)(u[u.length-1][1]))),c&&a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,"Date rated"),a.a.createElement(U,null,Object(f.d)(c))),o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,"Date reviewed"),a.a.createElement(U,null,Object(f.d)(o)))))},W=t("Fqn4"),J=t("1EL1");function $(){var n=tn(["\n    > *:nth-last-child(1) {\n      display: none;\n    }\n  "]);return $=function(){return n},n}function nn(){var n=tn(["\n  font-size: ",";\n\n  ","\n"]);return nn=function(){return n},n}function en(){var n=tn(["\n  margin: 1.5em 0;\n"]);return en=function(){return n},n}function tn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var rn=i.c.div(en()),an=Object(i.c)(o.a)(nn(),k.d.SIZE.S,s.a.l($())),un=function(n){var e=n.books;return a.a.createElement(rn,null,a.a.createElement(an,{full:!0},e.map((function(n){var e=n.rating7>=6;return a.a.createElement(l.a,{key:n.id,span:1,spanFromM:3,spanFromL:2},a.a.createElement(J.a,{book:n,featured:e}))}))))};function cn(){var n=sn(["\n  align-self: end;\n"]);return cn=function(){return n},n}function on(){var n=sn(["\n    grid-gap: ",";\n  "]);return on=function(){return n},n}function ln(){var n=sn(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: ",";\n  "]);return ln=function(){return n},n}function mn(){var n=sn(["\n  ","\n\n  ","\n"]);return mn=function(){return n},n}function sn(n,e){return e||(e=n.slice(0)),n.raw=e,n}t.d(e,"query",(function(){return gn}));var dn=i.c.aside(mn(),s.c.l(ln(),Object(d.h)(d.c.L)),s.a.xl(on(),Object(d.h)(d.c.XL))),fn=i.c.div(cn()),gn="4228746367";e.default=function(n){var e=n.data,t=e.bookData,r=e.timestampMentionData,i=e.featuredVideoData,s=n.location,d=Object(u.b)(t),g=Object(u.a)(r),b=Object(u.a)(i),v=d.relatedBooks.map(u.b);return a.a.createElement(c.a,{location:s},a.a.createElement(o.a,{full:!0},a.a.createElement(l.a,{as:fn,rows:"2/3",rowsFromM:"1/2",columnsFromM:"7 / 12",columnsFromL:"8 / 14",columnsFromXL:"9 / 15"},a.a.createElement(w,{title:d.title,author:d.author,rating7:d.rating7})),a.a.createElement(l.a,{columnsFromM:"1/7",columnsFromL:"1/8",columnsFromXL:"1/9"},a.a.createElement(R,{image:d.image,bookHeight:d.bookHeight})),a.a.createElement(l.a,{as:dn,spanFromM:4,columnsFromL:"2/8",columnsFromXL:"3/9",spanRowsFromM:2+Math.ceil((g.length+b.length)/2)},a.a.createElement(V,{pageCount:d.pageCount,dateBookPublished:d.dateBookPublished,publisher:d.publisher,tags:d.tags,readDates:d.readDates,dateRated:d.dateRated,dateReviewed:d.dateReviewed}),a.a.createElement(W.a,{links:d.links})),a.a.createElement(l.a,{columnsFromM:"5/13",columnsFromL:"8/15",columnsFromXL:"9/15"},a.a.createElement(G,{summary:d.summary,html:d.html})),b.map((function(n){return a.a.createElement(l.a,{key:n.id,span:1,spanFromM:4,spanFromL:3,spanFromXL:4},a.a.createElement(m.a,{video:n,big:!0}))})),g.map((function(n){var e=Object(f.b)(n.timestamps.find((function(n){return n.book&&n.book.id===d.id})).t);return a.a.createElement(l.a,{key:n.id,span:1,spanFromM:4,spanFromL:3,spanFromXL:4},a.a.createElement(m.a,{video:n,timestamp:e,big:!0}))}))),a.a.createElement(un,{books:v}))}},Fqn4:function(n,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("/8Fb");var r,a=t("q1tI"),i=t.n(a),u=t("vOnD"),c=(t("hhXQ"),t("a1Th"),t("xfY5"),t("SRfc"),{GOODREADS:"gr",AMAZON:"amzn",BOOK_DEPOSITORY:"bd"}),o=t("6p55");function l(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  list-style: disc;\n  font-size: ",";\n"]);return l=function(){return n},n}var m=((r={})[c.GOODREADS]="See on Goodreads",r[c.AMAZON]="Buy on Amazon",r[c.BOOK_DEPOSITORY]="Buy on Book Depository",r),s=u.c.li(l(),o.d.SIZE.S);e.a=function(n){var e=n.links;return i.a.createElement("ol",null,Object.entries(m).map((function(n){var t=n[0],r=n[1];return i.a.createElement(s,{key:t},i.a.createElement("a",{href:e.long[t]},r))})))}},dRSK:function(n,e,t){"use strict";var r=t("XKFU"),a=t("CkkT")(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(n){return a(this,n,arguments.length>1?arguments[1]:void 0)}}),t("nGyu")("find")},hhXQ:function(n,e,t){var r=t("XKFU"),a=t("UExd")(!1);r(r.S,"Object",{values:function(n){return a(n)}})},zQrH:function(n,e,t){"use strict";t("91GP"),t("nIY7");var r=t("q1tI"),a=t.n(r),i=t("vOnD"),u=t("Wbzz"),c=t("9eSz"),o=t.n(c),l=t("lmt0"),m=t("BCon"),s=t("0M2Q"),d=t("6p55"),f=t("7tht");function g(){var n=S(["\n  font-size: ",";\n  margin: ","em 0;\n  opacity: 0.75;\n"]);return g=function(){return n},n}function b(){var n=S(["\n  margin: 0;\n"]);return b=function(){return n},n}function v(){var n=S(["\n  margin-right: 0.5em;\n"]);return v=function(){return n},n}function E(){var n=S(["\n  display: flex;\n  justify-content: space-between;\n  flex-flow: wrap-reverse;\n  font-size: ",";\n  margin: 0;\n  opacity: 0.5;\n"]);return E=function(){return n},n}function h(){var n=S(["\n  font-size: ",";\n  margin: 0;\n"]);return h=function(){return n},n}function p(){var n=S(["\n  padding: 0.5em 0.5em 0.3em;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 4.8em;\n"]);return p=function(){return n},n}function O(){var n=S(["\n  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.1);\n"]);return O=function(){return n},n}function w(){var n=S(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  overflow: hidden;\n  background: ",";\n  border-radius: ",";\n"]);return w=function(){return n},n}function S(n,e){return e||(e=n.slice(0)),n.raw=e,n}var y=Object(i.c)(u.a)(w(),d.c.BACKGROUND_DARK,d.a.S),k=Object(i.c)(o.a)(O()),F=i.c.div(p()),j=i.c.p(h(),d.d.SIZE.S),x=i.c.p(E(),d.d.SIZE.XS),L=i.c.time(v()),I=Object(i.c)(s.a)(b()),M=i.c.div(g(),(function(n){return n.isStars?d.d.SIZE.S:d.d.SIZE.XS}),(function(n){return n.isStars?.4:.2}));e.a=function(n){var e=n.video,t=n.featured,r=n.timestamp,i=n.big,u=(e.timestamps||[]).filter((function(n){return n.book&&n.book.id})).length;return a.a.createElement(y,{to:r?e.slug+"?at="+r:e.slug,style:{background:t&&e.image.colors.lightVibrant,color:t&&e.image.colors.darkMuted,"--primary-color":e.image.colors.vibrant}},a.a.createElement(k,{fluid:i?[Object.assign({},e.image.childImageSharp.w200,{media:"(max-width: "+(d.b.M-1)+"px)"}),Object.assign({},e.image.childImageSharp.w350,{media:"(min-width: "+d.b.M+"px)"})]:e.image.childImageSharp.w200,backgroundColor:e.image.colors.muted}),a.a.createElement(F,null,a.a.createElement("div",null,r&&a.a.createElement(j,null,"Featured at ",r," in"),a.a.createElement(I,{as:"h2",size:"S"},e.title),a.a.createElement(M,{isStars:!!e.ownedBy},e.ownedBy?e.ownedBy.frontmatter.rating7&&a.a.createElement(f.a,{of7:e.ownedBy.frontmatter.rating7}):!r&&u>0&&a.a.createElement(a.a.Fragment,null,"Featuring ",u," book",u>1&&"s"))),a.a.createElement(x,null,a.a.createElement(L,null,Object(l.d)(e.datePublished)),a.a.createElement("div",null,Object(m.b)(e.viewCount)))))}}}]);
//# sourceMappingURL=component---src-views-book-page-index-tsx-23ab28695f292b13434a.js.map