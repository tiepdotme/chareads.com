(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/Zey":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("vOnD"),r=o.c.div.withConfig({displayName:"Reveal__StyledContent",componentId:"zfowet-0"})(["margin:0;will-change:opacity,max-height;transition:opacity ","ms ease-in-out,max-height ","ms ease-in-out;overflow:hidden;"," "," ",""],200,200,(function(e){var t=e.isOpen,n=e.isTransitioning;return!t&&!n&&"\n      position: absolute;\n      opacity: 0;\n      pointer-events: none;\n  "}),(function(e){return e.isTransitioning&&"\n      opacity: 0;\n      max-height: 0;\n  "}),(function(e){return e.isOpen&&"\n      opacity: 1;\n  "}));t.a=function(e){var t=e.children,n=e.open,o=e.ariaId,c=e.className,l=e.as,m=Object(a.useState)(n),s=m[0],u=m[1],d=Object(a.useState)(!1),p=d[0],f=d[1],g=Object(a.useState)(null),h=g[0],y=g[1],b=Object(a.createRef)();return Object(a.useEffect)((function(){if(n){var e=b.current;y(e.clientHeight),f(!0)}else u(!1),setTimeout((function(){return f(!1)}),200)}),[n]),Object(a.useEffect)((function(){p&&!s&&setTimeout((function(){return u(!0)}),50)}),[p]),i.a.createElement(r,{className:c,ref:b,isOpen:s,isTransitioning:p,id:o,"aria-hidden":!s,as:l,style:{maxHeight:s&&h}},t)}},"60ph":function(e,t,n){"use strict";var a=n("AcpX"),i=n("q1tI"),o=n.n(i),r=n("vOnD"),c=n("6t0R"),l=n("cRSu"),m=n("0M2Q"),s=n("6p55"),u=n("hQ1k"),d=n("1EL1");function p(){var e=Object(a.a)(["\n    > *:nth-last-child(1) {\n      display: none;\n    }\n  "]);return p=function(){return e},e}function f(){var e=Object(a.a)(["\n    display: none;\n  "]);return f=function(){return e},e}var g=r.c.div.withConfig({displayName:"RelatedBooks__StyledWrapper",componentId:"sc-1ej6r71-0"})(["margin:2em 0 1em;"]),h=Object(r.c)(l.a).withConfig({displayName:"RelatedBooks__StyledTitleGridItem",componentId:"sc-1ej6r71-1"})(["",""],u.c.m(f())),y=Object(r.c)(c.a).withConfig({displayName:"RelatedBooks__StyledGrid",componentId:"sc-1ej6r71-2"})(["font-size:",";",""],s.e.SIZE.S,u.a.l(p()));t.a=function(e){var t=e.books,n=e.featuredSlugs,a=e.ownedSlug;return t&&0!==t.length?o.a.createElement(g,null,o.a.createElement(y,{full:!0},o.a.createElement(h,null,o.a.createElement(m.a,{size:"L",as:"h2"},"Related books")),t.map((function(e){var t=a?a===e.slug:n&&n.includes(e.slug);return o.a.createElement(l.a,{key:e.id,span:1,spanFromM:3,spanFromL:2},o.a.createElement(d.a,{book:e,featured:t,hideDetails:a===e.slug}))})))):null}},NT6L:function(e,t,n){"use strict";var a=n("vOnD"),i=n("6p55"),o=n("d1i6"),r=a.c.div.withConfig({displayName:"MarkdownWrapper",componentId:"kio069-0"})([""," hr{height:0.1em;background:",";border:0;margin:1em 0;}blockquote{margin-left:0;border-left:0.2em solid ",";padding-left:1em;}h2{margin-top:1em;font-size:",";}h3,h4{margin-top:1em;font-size:",";}img{max-width:100%;}ul{list-style:disc;}ol{list-style:decimal;}p,ul,ol{margin:0.5em 0;}ul,ol{padding-left:1em;","}li{margin:0.25em 0;}a{text-decoration:underline;text-decoration-color:var(--secondary-color);}"],o.a,i.c.BACKGROUND_DARK,i.c.BACKGROUND_DARK,i.e.SIZE.M,i.e.SIZE.S,o.a);t.a=r},aXhJ:function(e,t,n){"use strict";var a=n("q1tI");t.a=function(){if("undefined"==typeof window)return{width:null,height:null};var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(a.useState)(e),n=t[0],i=t[1];return Object(a.useEffect)((function(){var t=function(){return i(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}},jZWi:function(e,t,n){"use strict";var a=n("AcpX"),i=n("q1tI"),o=n.n(i),r=n("vOnD"),c=n("6p55"),l=n("hQ1k"),m=n("F9MX");function s(){var e=Object(a.a)(["\n    width: 100%;\n    text-align: left;\n  "]);return s=function(){return e},e}var u=r.c.button.withConfig({displayName:"RevealTrigger__StyledSummaryTrigger",componentId:"sc-1kl3bfo-0"})(["font-size:",";font-weight:",";",""],c.e.SIZE.S,c.e.WEIGHT.BOLD,l.b.s(s())),d=r.c.i.withConfig({displayName:"RevealTrigger__StyledIcon",componentId:"sc-1kl3bfo-1"})(["display:inline-block;position:relative;width:1.25em;height:1.25em;vertical-align:-0.3em;&:before,&:after{content:'';display:block;position:absolute;top:50%;left:0.35em;width:0.7em;height:0.125em;background:currentColor;transform-origin:50% 50%;transform:translate(-50%,-50%);transition:transform 0.2s linear;}",""],(function(e){return!e.open&&"\n    &:before {\n      transform: translate(-50%, -50%) rotate(-90deg);\n    }\n  "}));t.a=function(e){var t=e.children,n=e.open,a=e.ariaId,i=e.onClick,r=e.className;return o.a.createElement(m.a,{onClick:i,"aria-expanded":n,"aria-controls":a,as:u,className:r},o.a.createElement(d,{open:n}),t)}},vrtD:function(e,t,n){"use strict";n.r(t);var a=n("AcpX"),i=n("q1tI"),o=n.n(i),r=n("vOnD"),c=n("Wtfd"),l=n("NsgW"),m=n("SbvX"),s=n("0M2Q"),u=n("6t0R"),d=n("cRSu"),p=n("60ph"),f=n("NT6L"),g=n("hQ1k"),h=n("6p55"),y=n("VdcY"),b=n("/6c9"),v=n.n(b),w=n("lmt0"),E=n("Qyje"),O=n.n(E),S=function(){return window.location.search?O.a.parse(window.location.search,{ignoreQueryPrefix:!0}):{}},k=n("YBnV"),I={youtube:{playerVars:{rel:0,controls:1}}},_=function(e){var t=e.youtubeId,n=e.isPlaying,a=e.setIsPlaying,r=e.setPlayedSeconds,c=e.videoComponent,l=e.backgroundColor,m=Object(i.useState)(0),s=m[0],u=m[1];return Object(i.useEffect)((function(){var e=S();if(e.at){var t=Object(w.e)(e.at);u(t),r(t)}}),[]),o.a.createElement(k.a,{style:{backgroundColor:l}},o.a.createElement(v.a,{url:"https://www.youtube.com/watch?v="+t+(s>0&&"&t="+s),ref:c,onPlay:function(){return a(!0)},onPause:function(){return a(!1)},onProgress:function(e){var t=e.playedSeconds;return r(t)},progressInterval:500,playing:n,config:I,controls:!0,width:"100%",height:"100%"}))},j=n("d1i6"),C=n("F9MX"),N=n("7tht"),T=n("zjVz"),D=n("/Zey"),L=n("wC2E"),R=r.c.li.withConfig({displayName:"VideoTimestamp__StyledVideoTimestamp",componentId:"sc-1uf0ryi-0"})(["padding:0.375em 0.75em;display:flex;cursor:pointer;font-size:",";",""],h.e.SIZE.S,(function(e){return e.active&&"background: "+h.c.BACKGROUND_DARK+";"})),B=r.c.time.withConfig({displayName:"VideoTimestamp__StyledTime",componentId:"sc-1uf0ryi-1"})(["min-width:4ch;margin-right:1ch;line-height:1.25;"]),V=r.c.div.withConfig({displayName:"VideoTimestamp__StyledDetails",componentId:"sc-1uf0ryi-2"})(["flex:1;> *{margin:0;}"]),A=r.c.p.withConfig({displayName:"VideoTimestamp__StyledText",componentId:"sc-1uf0ryi-3"})(["font-weight:",";line-height:1.25;"],h.e.WEIGHT.BOLD),x=Object(r.c)(C.a).withConfig({displayName:"VideoTimestamp__StyledBookLink",componentId:"sc-1uf0ryi-4"})(["display:block;width:max-content;font-size:",";"],h.e.SIZE.S),z=Object(r.c)(N.a).withConfig({displayName:"VideoTimestamp__StyledStarRating",componentId:"sc-1uf0ryi-5"})(["display:inline-block;vertical-align:text-top;"]),F=Object(r.c)(D.a).withConfig({displayName:"VideoTimestamp__StyledReveal",componentId:"sc-1uf0ryi-6"})(["transition:max-height 200ms linear;",""],j.a),P=function(e){var t=e.t,n=e.text,a=e.link,i=e.book,r=e.active,c=e.jumpToTimestamp;return o.a.createElement(R,{key:t,onClick:function(e){"a"!==e.target.tagName&&c(t,!0)},active:r},o.a.createElement(B,null,Object(w.b)(t)),o.a.createElement(V,null,o.a.createElement(A,null,a?o.a.createElement(C.a,{href:a,as:"a"},n,o.a.createElement(T.a,null)):n),i&&o.a.createElement(o.a.Fragment,null,i.slug&&o.a.createElement(x,{to:i.slug},o.a.createElement(z,{of7:i.rating7}),o.a.createElement(T.a,null)),o.a.createElement(F,{open:r},o.a.createElement(L.a,{links:i.links})))))};function M(){var e=Object(a.a)(["\n    max-height: calc(1em + ",");\n  "]);return M=function(){return e},e}function G(){var e=Object(a.a)(["\n    max-height: calc(1em + ",");\n  "]);return G=function(){return e},e}var Z=r.c.div.withConfig({displayName:"VideoTimestampList__StyledWrapper",componentId:"sc-4lye3t-0"})(["position:relative;&:before,&:after{content:'';display:block;position:absolute;left:-0.5em;right:0.25em;height:0.5em;z-index:1;pointer-events:none;}&:before{top:0;background:linear-gradient(to bottom,",",transparent);}&:after{bottom:0;background:linear-gradient(to top,",",transparent);}"],h.c.BACKGROUND,h.c.BACKGROUND),X=r.c.ol.withConfig({displayName:"VideoTimestampList__StyledVideoTimestampList",componentId:"sc-4lye3t-1"})(["margin:0 0 0 -0.5em;width:calc(0.5em + 100%);overflow:auto;max-height:300px;padding:0.5em 0;"," ","::-webkit-scrollbar{width:0.25em;border-left:2px solid ",";border-radius:0 "," "," 0;}::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.2);border-width:0.5em 0;border-style:solid;border-color:",";}"],g.a.l(G(),Object(y.h)(9*y.f.l(7)/16)),g.a.xl(M(),Object(y.h)(9*y.f.xl(8)/16)),h.c.BACKGROUND_DARK,h.a.S,h.a.S,h.c.BACKGROUND),K=function(e){var t,n=e.timestamps,a=e.playedSeconds,i=e.setPlayedSeconds,r=e.setIsPlaying,c=e.videoComponent,l=function(e,t){c.current&&(c.current.seekTo(e),i(e),t&&r(!0))};return n.forEach((function(e,n){var i=e.t;a>=i&&(t=n)})),o.a.createElement(Z,null,o.a.createElement(X,null,n.map((function(e,n){var a=e.t,i=e.text,r=e.link,c=e.book;return o.a.createElement(P,{key:a,t:a,text:i,link:r,book:c,jumpToTimestamp:l,active:t===n})}))))},W=n("BCon"),q=n("aXhJ"),H=n("jZWi");function Q(){var e=Object(a.a)(["\n    margin: 1em 0 0;\n  "]);return Q=function(){return e},e}function U(){var e=Object(a.a)(["\n    padding: 0.5em 0 0 1em;\n  "]);return U=function(){return e},e}function Y(){var e=Object(a.a)(["\n    display: none;\n  "]);return Y=function(){return e},e}var J=r.c.aside.withConfig({displayName:"VideoMeta__StyledAside",componentId:"sc-14lkv44-0"})(["margin-bottom:1em;"]),$=Object(r.c)(H.a).withConfig({displayName:"VideoMeta__StyledRevealTrigger",componentId:"sc-14lkv44-1"})(["",""],g.c.m(Y())),ee=r.c.dl.withConfig({displayName:"VideoMeta__StyledReveal",componentId:"sc-14lkv44-2"})([""," ",""],j.a,g.a.s(U())),te=r.c.dt.withConfig({displayName:"VideoMeta__StyledDt",componentId:"sc-14lkv44-3"})(["font-size:",";font-weight:",";margin:0.5em 0 0;",""],h.e.SIZE.S,h.e.WEIGHT.BOLD,g.c.m(Q())),ne=r.c.dd.withConfig({displayName:"VideoMeta__StyledDd",componentId:"sc-14lkv44-4"})(["font-size:",";margin:0;"],h.e.SIZE.S),ae=function(e){var t=e.datePublished,n=e.viewCount,a=e.commentCount,r=e.youtubeId,c=Object(q.a)().width,l=Object(i.useState)(!1),m=l[0],s=l[1];return o.a.createElement(J,null,o.a.createElement($,{onClick:function(){return s(!m)},open:m,ariaId:"book-meta"},"Video information"),o.a.createElement(D.a,{as:ee,open:c&&c>h.b.S||m,ariaId:"book-meta"},o.a.createElement(te,null,"Date posted"),o.a.createElement(ne,null,o.a.createElement("time",null,Object(w.a)(t))),n>parseInt("50")&&o.a.createElement(o.a.Fragment,null,o.a.createElement(te,null,"Statistics"),o.a.createElement(ne,null,Object(W.a)(n)," views"),o.a.createElement(ne,null,o.a.createElement(C.a,{as:"a",href:"https://youtu.be/"+r},Object(W.a)(a)," comments")))))},ie=r.c.aside.withConfig({displayName:"VideoOwnedBook__StyledAside",componentId:"sc-132yjrc-0"})(["",""],j.a),oe=Object(r.c)(C.a).withConfig({displayName:"VideoOwnedBook__StyledLink",componentId:"sc-132yjrc-1"})(["font-size:",";font-weight:",";"],h.e.SIZE.S,h.e.WEIGHT.BOLD),re=Object(r.c)(N.a).withConfig({displayName:"VideoOwnedBook__StyledStarRating",componentId:"sc-132yjrc-2"})(["font-size:",";"],h.e.SIZE.S),ce=function(e){var t=e.rating7,n=e.slug,a=e.links;return o.a.createElement(ie,null,o.a.createElement(re,{of7:t}),o.a.createElement(oe,{to:n},"Book page",o.a.createElement(T.a,null)),o.a.createElement(L.a,{links:a}))};function le(){var e=Object(a.a)(["\n    display: none;\n  "]);return le=function(){return e},e}function me(){var e=Object(a.a)(["\n    align-self: end;\n  "]);return me=function(){return e},e}function se(){var e=Object(a.a)(["\n    grid-gap: ",";\n  "]);return se=function(){return e},e}function ue(){var e=Object(a.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: ",";\n  "]);return ue=function(){return e},e}function de(){var e=Object(a.a)(["\n    margin-top: 1em;\n  "]);return de=function(){return e},e}function pe(){var e=Object(a.a)(["\n    margin-bottom: -0.5em;\n  "]);return pe=function(){return e},e}var fe=Object(r.c)(d.a).withConfig({displayName:"VideoPage__StyledTimestampGridItem",componentId:"sc-1uvbpte-0"})(["margin-top:0.5em;",""],g.c.l(pe())),ge=r.c.aside.withConfig({displayName:"VideoPage__StyledMeta",componentId:"sc-1uvbpte-1"})([""," "," ",""],g.c.m(de()),g.c.l(ue(),Object(y.h)(y.c.L)),g.a.xl(se(),Object(y.h)(y.c.XL))),he=r.c.div.withConfig({displayName:"VideoPage__StyledTitleWrapper",componentId:"sc-1uvbpte-2"})(["",""],g.c.l(me())),ye=Object(r.c)(s.a).withConfig({displayName:"VideoPage__StyledTitle",componentId:"sc-1uvbpte-3"})(["margin:0.5em 0 -0.2em;"]),be=r.c.blockquote.withConfig({displayName:"VideoPage__StyledBlockquote",componentId:"sc-1uvbpte-4"})(["position:relative;margin:1.5em 0 1.5em 1.5em;"," &:before{content:'“';position:absolute;left:-0.5em;top:0.25em;line-height:0;font-size:4em;font-family:",";}"],g.b.m(le()),h.e.FAMILY.DECORATIVE);t.default=function(e){var t=e.data.video,n=e.location,a=Object(i.useState)(!1),r=a[0],s=a[1],g=Object(i.useState)(0),h=g[0],y=g[1],b=Object(i.useRef)(),v=t.ownedBy,w=t.relatedBooks,E=(t.timestamps||[]).filter((function(e){return e.book})).map((function(e){return e.book.slug})),O=v||!t.timestamps;return o.a.createElement(l.a,{location:n,navTitle:"Back to all videos",navTitleLink:c.a.VIDEOS,title:t.title,description:Object(m.b)(t.html),shareImage:t.image.childImageSharp.share.src},o.a.createElement(u.a,{full:!0},o.a.createElement(d.a,{columnsFromL:"1/8",columnsFromXL:"1/9"},o.a.createElement(_,{videoComponent:b,youtubeId:t.youtubeId,isPlaying:r,setIsPlaying:s,setPlayedSeconds:y,backgroundColor:t.image.colors.muted})),o.a.createElement(d.a,{as:he,columnsFromM:"5 / 13",columnsFromL:"8 / 14",columnsFromXL:"9 / 15",rows:O?"2/3":"3/4",rowsFromL:O?"1/2":"2/3"},t.quote&&o.a.createElement(be,null,t.quote),o.a.createElement(ye,{as:"h1",size:"L"},t.title)),t.html&&o.a.createElement(d.a,{columnsFromM:"5 / 13",columnsFromL:"8/14",columnsFromXL:"9/15"},o.a.createElement(f.a,{dangerouslySetInnerHTML:{__html:t.html}})),o.a.createElement(d.a,{as:ge,spanRows:3,spanRowsFromL:t.html&&t.timestamps?2:1,spanFromM:4,columnsFromL:"2/8",columnsFromXL:"3/9"},o.a.createElement(ae,{datePublished:t.datePublished,viewCount:t.viewCount,commentCount:t.commentCount,youtubeId:t.youtubeId}),v&&o.a.createElement(ce,{rating7:v.rating7,slug:v.slug,links:v.links})),t.timestamps&&o.a.createElement(d.a,{as:fe,columnsFromM:"5 / 13",columnsFromL:"8/15",columnsFromXL:"9/17",rows:O?"3/4":"2/3",rowsFromL:O?"2/3":"1/2",style:{marginTop:O?"-0.25em":"-0.75em",marginBottom:"-0.5em",alignSelf:O?"start":"end"}},o.a.createElement(K,{timestamps:t.timestamps,playedSeconds:h,setPlayedSeconds:y,setIsPlaying:s,videoComponent:b}))),o.a.createElement(p.a,{books:w,featuredSlugs:E,ownedSlug:v&&v.slug}))}},wC2E:function(e,t,n){"use strict";var a,i=n("AcpX"),o=n("q1tI"),r=n.n(o),c=n("vOnD"),l={GOODREADS:"gr",AMAZON:"amzn",BOOK_DEPOSITORY:"bd"},m=n("6p55"),s=n("hQ1k"),u=n("zjVz");function d(){var e=Object(i.a)(["\n    margin-left: -1.5em;\n  "]);return d=function(){return e},e}var p=((a={})[l.GOODREADS]="See on Goodreads",a[l.AMAZON]="Buy on Amazon",a[l.BOOK_DEPOSITORY]="Buy on Book Depository",a),f=c.c.li.withConfig({displayName:"BookAffiliates__StyledLi",componentId:"sc-1dplmdt-0"})(["font-size:",";",""],m.e.SIZE.S,s.c.l(d())),g=Object(c.c)(u.a).withConfig({displayName:"BookAffiliates__StyledArrowIcon",componentId:"sc-1dplmdt-1"})(["margin:0 0.75em 0 0;"]);t.a=function(e){var t=e.links;return r.a.createElement("ol",null,Object.entries(p).map((function(e){var n=e[0],a=e[1];return r.a.createElement(f,{key:n},r.a.createElement("a",{href:t.long[n]},r.a.createElement(g,null),a))})))}}}]);
//# sourceMappingURL=component---src-views-video-page-index-tsx-8e61c5030ef824bb4850.js.map