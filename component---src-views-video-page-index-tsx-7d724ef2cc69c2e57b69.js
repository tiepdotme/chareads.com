(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/Zey":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=i.c.div.withConfig({displayName:"Reveal__StyledContent",componentId:"zfowet-0"})(["margin:0;will-change:opacity,max-height;transition:opacity ","ms ease-in-out,max-height ","ms ease-in-out;overflow:hidden;"," "," ",""],200,200,(function(e){var t=e.isOpen,n=e.isTransitioning;return!t&&!n&&"\n      position: absolute;\n      opacity: 0;\n      pointer-events: none;\n  "}),(function(e){return e.isTransitioning&&"\n      opacity: 0;\n      max-height: 0;\n  "}),(function(e){return e.isOpen&&"\n      opacity: 1;\n  "}));t.a=function(e){var t=e.children,n=e.open,i=e.ariaId,c=e.className,l=e.as,s=Object(r.useState)(n),u=s[0],d=s[1],m=Object(r.useState)(!1),f=m[0],p=m[1],y=Object(r.useState)(null),h=y[0],g=y[1],b=Object(r.createRef)();return Object(r.useEffect)((function(){if(n){var e=b.current;g(e.clientHeight),p(!0)}else d(!1),setTimeout((function(){return p(!1)}),200)}),[n]),Object(r.useEffect)((function(){f&&!u&&setTimeout((function(){return d(!0)}),50)}),[f]),o.a.createElement(a,{className:c,ref:b,isOpen:u,isTransitioning:f,id:i,"aria-hidden":!u,as:l,style:{maxHeight:u&&h}},t)}},"0jNN":function(e,t,n){"use strict";n("V+eJ"),n("rE2o"),n("ioFf"),n("pIFo"),n("rGqo"),n("yt8O"),n("RW0V"),n("DNiP"),n("8+KV"),n("hHhE"),n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F");var r=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,n){return e[n]=t[n],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var i=t[r],a=i.obj[i.prop],c=Object.keys(a),l=0;l<c.length;++l){var s=c[l],u=a[s];"object"==typeof u&&null!==u&&-1===n.indexOf(u)&&(t.push({obj:a,prop:s}),n.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(o(n)){for(var r=[],i=0;i<n.length;++i)void 0!==n[i]&&r.push(n[i]);t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(o){return r}},encode:function(e,t,n){if(0===e.length)return e;var r=e;if("symbol"==typeof e?r=Symbol.prototype.toString.call(e):"string"!=typeof e&&(r=String(e)),"iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<r.length;++a){var c=r.charCodeAt(a);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?o+=r.charAt(a):c<128?o+=i[c]:c<2048?o+=i[192|c>>6]+i[128|63&c]:c<55296||c>=57344?o+=i[224|c>>12]+i[128|c>>6&63]+i[128|63&c]:(a+=1,c=65536+((1023&c)<<10|1023&r.charCodeAt(a)),o+=i[240|c>>18]+i[128|c>>12&63]+i[128|c>>6&63]+i[128|63&c])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,n,i){if(!n)return t;if("object"!=typeof n){if(o(t))t.push(n);else{if(!t||"object"!=typeof t)return[t,n];(i&&(i.plainObjects||i.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(n);var c=t;return o(t)&&!o(n)&&(c=a(t,i)),o(t)&&o(n)?(n.forEach((function(n,o){if(r.call(t,o)){var a=t[o];a&&"object"==typeof a&&n&&"object"==typeof n?t[o]=e(a,n,i):t.push(n)}else t[o]=n})),t):Object.keys(n).reduce((function(t,o){var a=n[o];return r.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t}),c)}}},"60ph":function(e,t,n){"use strict";n("Z2Ku"),n("L9s1");var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("6t0R"),c=n("cRSu"),l=n("0M2Q"),s=n("6p55"),u=n("hQ1k"),d=n("1EL1");function m(){var e=p(["\n    > *:nth-last-child(1) {\n      display: none;\n    }\n  "]);return m=function(){return e},e}function f(){var e=p(["\n    display: none;\n  "]);return f=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),e.raw=t,e}var y=i.c.div.withConfig({displayName:"RelatedBooks__StyledWrapper",componentId:"sc-1ej6r71-0"})(["margin:2em 0 1em;"]),h=Object(i.c)(c.a).withConfig({displayName:"RelatedBooks__StyledTitleGridItem",componentId:"sc-1ej6r71-1"})(["",""],u.c.m(f())),g=Object(i.c)(a.a).withConfig({displayName:"RelatedBooks__StyledGrid",componentId:"sc-1ej6r71-2"})(["font-size:",";",""],s.e.SIZE.S,u.a.l(m()));t.a=function(e){var t=e.books,n=e.featuredSlugs,r=e.ownedSlug;return t&&0!==t.length?o.a.createElement(y,null,o.a.createElement(g,{full:!0},o.a.createElement(h,null,o.a.createElement(l.a,{size:"L",as:"h2"},"Related books")),t.map((function(e){var t=r?r===e.slug:n&&n.includes(e.slug);return o.a.createElement(c.a,{key:e.id,span:1,spanFromM:3,spanFromL:2},o.a.createElement(d.a,{book:e,featured:t,hideDetails:r===e.slug}))})))):null}},NT6L:function(e,t,n){"use strict";var r=n("vOnD"),o=n("6p55"),i=n("d1i6"),a=r.c.div.withConfig({displayName:"MarkdownWrapper",componentId:"kio069-0"})([""," hr{height:0.1em;background:",";border:0;margin:1em 0;}blockquote{margin-left:0;border-left:0.2em solid ",";padding-left:1em;}h2{margin-top:1em;font-size:",";}h3,h4{margin-top:1em;font-size:",";}img{max-width:100%;}ul{list-style:disc;}ol{list-style:decimal;}p,ul,ol{margin:0.5em 0;}ul,ol{padding-left:1em;","}li{margin:0.25em 0;}a{text-decoration:underline;text-decoration-color:var(--secondary-color);}"],i.a,o.c.BACKGROUND_DARK,o.c.BACKGROUND_DARK,o.e.SIZE.M,o.e.SIZE.S,i.a);t.a=a},QSc6:function(e,t,n){"use strict";n("0l/t"),n("Vd3H"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("jqX0"),n("LK8F");var r=n("0jNN"),o=n("sxOR"),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,s=function(e,t){l.apply(e,c(t)?t:[t])},u=Date.prototype.toISOString,d=o.default,m={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,format:d,formatter:o.formatters[d],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,n,o,i,a,l,u,d,f,p,y,h,g){var b,v=t;if("function"==typeof u?v=u(n,v):v instanceof Date?v=p(v):"comma"===o&&c(v)&&(v=v.join(",")),null===v){if(i)return l&&!h?l(n,m.encoder,g,"key"):n;v=""}if("string"==typeof(b=v)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||r.isBuffer(v))return l?[y(h?n:l(n,m.encoder,g,"key"))+"="+y(l(v,m.encoder,g,"value"))]:[y(n)+"="+y(String(v))];var w,O=[];if(void 0===v)return O;if(c(u))w=u;else{var S=Object.keys(v);w=d?S.sort(d):S}for(var E=0;E<w.length;++E){var j=w[E];a&&null===v[j]||(c(v)?s(O,e(v[j],"function"==typeof o?o(n,j):n,o,i,a,l,u,d,f,p,y,h,g)):s(O,e(v[j],n+(f?"."+j:"["+j+"]"),o,i,a,l,u,d,f,p,y,h,g)))}return O};e.exports=function(e,t){var n,r=e,l=function(e){if(!e)return m;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||m.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=o.formatters[n],a=m.filter;return("function"==typeof e.filter||c(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:m.addQueryPrefix,allowDots:void 0===e.allowDots?m.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:m.charsetSentinel,delimiter:void 0===e.delimiter?m.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:m.encode,encoder:"function"==typeof e.encoder?e.encoder:m.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:m.encodeValuesOnly,filter:a,formatter:r,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:m.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:m.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:m.strictNullHandling}}(t);"function"==typeof l.filter?r=(0,l.filter)("",r):c(l.filter)&&(n=l.filter);var u,d=[];if("object"!=typeof r||null===r)return"";u=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var p=a[u];n||(n=Object.keys(r)),l.sort&&n.sort(l.sort);for(var y=0;y<n.length;++y){var h=n[y];l.skipNulls&&null===r[h]||s(d,f(r[h],h,p,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var g=d.join(l.delimiter),b=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),g.length>0?b+g:""}},Qyje:function(e,t,n){"use strict";var r=n("QSc6"),o=n("nmq7"),i=n("sxOR");e.exports={formats:i,parse:o,stringify:r}},SbvX:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));n("Vd3H"),n("pIFo"),n("SRfc");var r=function(e){return e.replace(/<\/[^>]+><[^>/]+>/gm," ").replace(/<\/?[^>]+>/g,"").replace(/ +/gm," ").trim()},o=function(e){return e.sort((function(e,t){return e<t?-1:e>t?1:0}))}},aXhJ:function(e,t,n){"use strict";var r=n("q1tI");t.a=function(){if("undefined"==typeof window)return{width:null,height:null};var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(r.useState)(e),n=t[0],o=t[1];return Object(r.useEffect)((function(){var t=function(){return o(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n}},hhXQ:function(e,t,n){var r=n("XKFU"),o=n("UExd")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},jZWi:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("6p55"),c=n("hQ1k"),l=n("F9MX");function s(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    width: 100%;\n    text-align: left;\n  "]);return s=function(){return e},e}var u=i.c.button.withConfig({displayName:"RevealTrigger__StyledSummaryTrigger",componentId:"sc-1kl3bfo-0"})(["font-size:",";font-weight:",";",""],a.e.SIZE.S,a.e.WEIGHT.BOLD,c.b.s(s())),d=i.c.i.withConfig({displayName:"RevealTrigger__StyledIcon",componentId:"sc-1kl3bfo-1"})(["display:inline-block;position:relative;width:1.25em;height:1.25em;vertical-align:-0.3em;&:before,&:after{content:'';display:block;position:absolute;top:50%;left:0.35em;width:0.7em;height:0.125em;background:currentColor;transform-origin:50% 50%;transform:translate(-50%,-50%);transition:transform 0.2s linear;}",""],(function(e){return!e.open&&"\n    &:before {\n      transform: translate(-50%, -50%) rotate(-90deg);\n    }\n  "}));t.a=function(e){var t=e.children,n=e.open,r=e.ariaId,i=e.onClick,a=e.className;return o.a.createElement(l.a,{onClick:i,"aria-expanded":n,"aria-controls":r,as:u,className:a},o.a.createElement(d,{open:n}),t)}},nmq7:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hHhE"),n("V+eJ"),n("KKXr"),n("pIFo"),n("LK8F");var r=n("0jNN"),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=n.depth>0&&/(\[[^[\]]*])/.exec(r),c=a?r.slice(0,a.index):r,l=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;l.push(c)}for(var s=0;n.depth>0&&null!==(a=i.exec(r))&&s<n.depth;){if(s+=1,!n.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!n.allowPrototypes)return;l.push(a[1])}return a&&l.push("["+r.slice(a.index)+"]"),function(e,t,n){for(var r=t,o=e.length-1;o>=0;--o){var i,a=e[o];if("[]"===a&&n.parseArrays)i=[].concat(r);else{i=n.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,l=parseInt(c,10);n.parseArrays||""!==c?!isNaN(l)&&a!==c&&String(l)===c&&l>=0&&n.parseArrays&&l<=n.arrayLimit?(i=[])[l]=r:i[c]=r:i={0:r}}r=i}return r}(l,t,n)}};e.exports=function(e,t){var n=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return n.plainObjects?Object.create(null):{};for(var s="string"==typeof e?function(e,t){var n,l={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=t.parameterLimit===1/0?void 0:t.parameterLimit,d=s.split(t.delimiter,u),m=-1,f=t.charset;if(t.charsetSentinel)for(n=0;n<d.length;++n)0===d[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===d[n]?f="utf-8":"utf8=%26%2310003%3B"===d[n]&&(f="iso-8859-1"),m=n,n=d.length);for(n=0;n<d.length;++n)if(n!==m){var p,y,h=d[n],g=h.indexOf("]="),b=-1===g?h.indexOf("="):g+1;-1===b?(p=t.decoder(h,a.decoder,f,"key"),y=t.strictNullHandling?null:""):(p=t.decoder(h.slice(0,b),a.decoder,f,"key"),y=t.decoder(h.slice(b+1),a.decoder,f,"value")),y&&t.interpretNumericEntities&&"iso-8859-1"===f&&(y=c(y)),y&&"string"==typeof y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(",")),h.indexOf("[]=")>-1&&(y=i(y)?[y]:y),o.call(l,p)?l[p]=r.combine(l[p],y):l[p]=y}return l}(e,n):e,u=n.plainObjects?Object.create(null):{},d=Object.keys(s),m=0;m<d.length;++m){var f=d[m],p=l(f,s[f],n);u=r.merge(u,p,n)}return r.compact(u)}},sxOR:function(e,t,n){"use strict";n("pIFo");var r=String.prototype.replace,o=/%20/g,i=n("0jNN"),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return String(e)}}},a)},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vrtD:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("Wtfd"),c=n("NsgW"),l=n("SbvX"),s=n("0M2Q"),u=n("6t0R"),d=n("cRSu"),m=n("60ph"),f=n("NT6L"),p=n("hQ1k"),y=n("6p55"),h=n("VdcY"),g=n("/6c9"),b=n.n(g),v=n("lmt0"),w=(n("OG14"),n("Qyje")),O=n.n(w),S=function(){return window.location.search?O.a.parse(window.location.search,{ignoreQueryPrefix:!0}):{}},E=n("YBnV"),j={youtube:{playerVars:{rel:0,controls:1}}},k=function(e){var t=e.youtubeId,n=e.isPlaying,i=e.setIsPlaying,a=e.setPlayedSeconds,c=e.videoComponent,l=e.backgroundColor,s=Object(r.useState)(0),u=s[0],d=s[1];return Object(r.useEffect)((function(){var e=S();if(e.at){var t=Object(v.e)(e.at);d(t),a(t)}}),[]),o.a.createElement(E.a,{style:{backgroundColor:l}},o.a.createElement(b.a,{url:"https://www.youtube.com/watch?v="+t+(u>0&&"&t="+u),ref:c,onPlay:function(){return i(!0)},onPause:function(){return i(!1)},onProgress:function(e){var t=e.playedSeconds;return a(t)},progressInterval:500,playing:n,config:j,controls:!0,width:"100%",height:"100%"}))},I=(n("tUrg"),n("d1i6")),N=n("F9MX"),C=n("7tht"),_=n("zjVz"),x=n("/Zey"),D=n("wC2E"),R=i.c.li.withConfig({displayName:"VideoTimestamp__StyledVideoTimestamp",componentId:"sc-1uf0ryi-0"})(["padding:0.375em 0.75em;display:flex;cursor:pointer;font-size:",";",""],y.e.SIZE.S,(function(e){return e.active&&"background: "+y.c.BACKGROUND_DARK+";"})),L=i.c.time.withConfig({displayName:"VideoTimestamp__StyledTime",componentId:"sc-1uf0ryi-1"})(["min-width:4ch;margin-right:1ch;line-height:1.25;"]),T=i.c.div.withConfig({displayName:"VideoTimestamp__StyledDetails",componentId:"sc-1uf0ryi-2"})(["flex:1;> *{margin:0;}"]),P=i.c.p.withConfig({displayName:"VideoTimestamp__StyledText",componentId:"sc-1uf0ryi-3"})(["font-weight:",";line-height:1.25;"],y.e.WEIGHT.BOLD),V=Object(i.c)(N.a).withConfig({displayName:"VideoTimestamp__StyledBookLink",componentId:"sc-1uf0ryi-4"})(["display:block;width:max-content;font-size:",";"],y.e.SIZE.S),B=Object(i.c)(C.a).withConfig({displayName:"VideoTimestamp__StyledStarRating",componentId:"sc-1uf0ryi-5"})(["display:inline-block;vertical-align:text-top;"]),A=Object(i.c)(x.a).withConfig({displayName:"VideoTimestamp__StyledReveal",componentId:"sc-1uf0ryi-6"})(["transition:max-height 200ms linear;",""],I.a),F=function(e){var t=e.t,n=e.text,r=e.link,i=e.book,a=e.active,c=e.jumpToTimestamp;return o.a.createElement(R,{key:t,onClick:function(e){"a"!==e.target.tagName&&c(t,!0)},active:a},o.a.createElement(L,null,Object(v.b)(t)),o.a.createElement(T,null,o.a.createElement(P,null,r?o.a.createElement(N.a,{href:r,as:"a"},n,o.a.createElement(_.a,null)):n),i&&o.a.createElement(o.a.Fragment,null,i.slug&&o.a.createElement(V,{to:i.slug},o.a.createElement(B,{of7:i.rating7}),o.a.createElement(_.a,null)),o.a.createElement(A,{open:a},o.a.createElement(D.a,{links:i.links})))))};function z(){var e=G(["\n    max-height: calc(1em + ",");\n  "]);return z=function(){return e},e}function H(){var e=G(["\n    max-height: calc(1em + ",");\n  "]);return H=function(){return e},e}function G(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Q=i.c.div.withConfig({displayName:"VideoTimestampList__StyledWrapper",componentId:"sc-4lye3t-0"})(["position:relative;&:before,&:after{content:'';display:block;position:absolute;left:-0.5em;right:0.25em;height:0.5em;z-index:1;pointer-events:none;}&:before{top:0;background:linear-gradient(to bottom,",",transparent);}&:after{bottom:0;background:linear-gradient(to top,",",transparent);}"],y.c.BACKGROUND,y.c.BACKGROUND),K=i.c.ol.withConfig({displayName:"VideoTimestampList__StyledVideoTimestampList",componentId:"sc-4lye3t-1"})(["margin:0 0 0 -0.5em;width:calc(0.5em + 100%);overflow:auto;max-height:300px;padding:0.5em 0;"," ","::-webkit-scrollbar{width:0.25em;border-left:2px solid ",";border-radius:0 "," "," 0;}::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.2);border-width:0.5em 0;border-style:solid;border-color:",";}"],p.a.l(H(),Object(h.h)(9*h.f.l(7)/16)),p.a.xl(z(),Object(h.h)(9*h.f.xl(8)/16)),y.c.BACKGROUND_DARK,y.a.S,y.a.S,y.c.BACKGROUND),M=function(e){var t,n=e.timestamps,r=e.playedSeconds,i=e.setPlayedSeconds,a=e.setIsPlaying,c=e.videoComponent,l=function(e,t){c.current&&(c.current.seekTo(e),i(e),t&&a(!0))};return n.forEach((function(e,n){var o=e.t;r>=o&&(t=n)})),o.a.createElement(Q,null,o.a.createElement(K,null,n.map((function(e,n){var r=e.t,i=e.text,a=e.link,c=e.book;return o.a.createElement(F,{key:r,t:r,text:i,link:a,book:c,jumpToTimestamp:l,active:t===n})}))))},q=n("BCon"),Z=n("aXhJ"),X=n("jZWi");function W(){var e=Y(["\n    margin: 1em 0 0;\n  "]);return W=function(){return e},e}function U(){var e=Y(["\n    padding: 0.5em 0 0 1em;\n  "]);return U=function(){return e},e}function J(){var e=Y(["\n    display: none;\n  "]);return J=function(){return e},e}function Y(e,t){return t||(t=e.slice(0)),e.raw=t,e}var $=i.c.aside.withConfig({displayName:"VideoMeta__StyledAside",componentId:"sc-14lkv44-0"})(["margin-bottom:1em;"]),ee=Object(i.c)(X.a).withConfig({displayName:"VideoMeta__StyledRevealTrigger",componentId:"sc-14lkv44-1"})(["",""],p.c.m(J())),te=i.c.dl.withConfig({displayName:"VideoMeta__StyledReveal",componentId:"sc-14lkv44-2"})([""," ",""],I.a,p.a.s(U())),ne=i.c.dt.withConfig({displayName:"VideoMeta__StyledDt",componentId:"sc-14lkv44-3"})(["font-size:",";font-weight:",";margin:0.5em 0 0;",""],y.e.SIZE.S,y.e.WEIGHT.BOLD,p.c.m(W())),re=i.c.dd.withConfig({displayName:"VideoMeta__StyledDd",componentId:"sc-14lkv44-4"})(["font-size:",";margin:0;"],y.e.SIZE.S),oe=function(e){var t=e.datePublished,n=e.viewCount,i=e.commentCount,a=e.youtubeId,c=Object(Z.a)().width,l=Object(r.useState)(!1),s=l[0],u=l[1];return o.a.createElement($,null,o.a.createElement(ee,{onClick:function(){return u(!s)},open:s,ariaId:"book-meta"},"Video information"),o.a.createElement(x.a,{as:te,open:c&&c>y.b.S||s,ariaId:"book-meta"},o.a.createElement(ne,null,"Date posted"),o.a.createElement(re,null,o.a.createElement("time",null,Object(v.a)(t))),n>parseInt("50")&&o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null,"Statistics"),o.a.createElement(re,null,Object(q.a)(n)," views"),o.a.createElement(re,null,o.a.createElement(N.a,{as:"a",href:"https://youtu.be/"+a},Object(q.a)(i)," comments")))))},ie=i.c.aside.withConfig({displayName:"VideoOwnedBook__StyledAside",componentId:"sc-132yjrc-0"})(["",""],I.a),ae=Object(i.c)(N.a).withConfig({displayName:"VideoOwnedBook__StyledLink",componentId:"sc-132yjrc-1"})(["font-size:",";font-weight:",";"],y.e.SIZE.S,y.e.WEIGHT.BOLD),ce=Object(i.c)(C.a).withConfig({displayName:"VideoOwnedBook__StyledStarRating",componentId:"sc-132yjrc-2"})(["font-size:",";"],y.e.SIZE.S),le=function(e){var t=e.rating7,n=e.slug,r=e.links;return o.a.createElement(ie,null,o.a.createElement(ce,{of7:t}),o.a.createElement(ae,{to:n},"Book page",o.a.createElement(_.a,null)),o.a.createElement(D.a,{links:r}))};function se(){var e=ye(["\n    display: none;\n  "]);return se=function(){return e},e}function ue(){var e=ye(["\n    align-self: end;\n  "]);return ue=function(){return e},e}function de(){var e=ye(["\n    grid-gap: ",";\n  "]);return de=function(){return e},e}function me(){var e=ye(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: ",";\n  "]);return me=function(){return e},e}function fe(){var e=ye(["\n    margin-top: 1em;\n  "]);return fe=function(){return e},e}function pe(){var e=ye(["\n    margin-bottom: -0.5em;\n  "]);return pe=function(){return e},e}function ye(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,"query",(function(){return Oe}));var he=Object(i.c)(d.a).withConfig({displayName:"VideoPage__StyledTimestampGridItem",componentId:"sc-1uvbpte-0"})(["margin-top:0.5em;",""],p.c.l(pe())),ge=i.c.aside.withConfig({displayName:"VideoPage__StyledMeta",componentId:"sc-1uvbpte-1"})([""," "," ",""],p.c.m(fe()),p.c.l(me(),Object(h.h)(h.c.L)),p.a.xl(de(),Object(h.h)(h.c.XL))),be=i.c.div.withConfig({displayName:"VideoPage__StyledTitleWrapper",componentId:"sc-1uvbpte-2"})(["",""],p.c.l(ue())),ve=Object(i.c)(s.a).withConfig({displayName:"VideoPage__StyledTitle",componentId:"sc-1uvbpte-3"})(["margin:0.5em 0 -0.2em;"]),we=i.c.blockquote.withConfig({displayName:"VideoPage__StyledBlockquote",componentId:"sc-1uvbpte-4"})(["position:relative;margin:1.5em 0 1.5em 1.5em;"," &:before{content:'“';position:absolute;left:-0.5em;top:0.25em;line-height:0;font-size:4em;font-family:",";}"],p.b.m(se()),y.e.FAMILY.DECORATIVE),Oe="4257495964";t.default=function(e){var t=e.data.video,n=e.location,i=Object(r.useState)(!1),s=i[0],p=i[1],y=Object(r.useState)(0),h=y[0],g=y[1],b=Object(r.useRef)(),v=t.ownedBy,w=t.relatedBooks,O=(t.timestamps||[]).filter((function(e){return e.book})).map((function(e){return e.book.slug})),S=v||!t.timestamps;return o.a.createElement(c.a,{location:n,navTitle:"Back to all videos",navTitleLink:a.a.VIDEOS,title:t.title,description:Object(l.b)(t.html),shareImage:t.image.childImageSharp.share.src},o.a.createElement(u.a,{full:!0},o.a.createElement(d.a,{columnsFromL:"1/8",columnsFromXL:"1/9"},o.a.createElement(k,{videoComponent:b,youtubeId:t.youtubeId,isPlaying:s,setIsPlaying:p,setPlayedSeconds:g,backgroundColor:t.image.colors.muted})),o.a.createElement(d.a,{as:be,columnsFromM:"5 / 13",columnsFromL:"8 / 14",columnsFromXL:"9 / 15",rows:S?"2/3":"3/4",rowsFromL:S?"1/2":"2/3"},t.quote&&o.a.createElement(we,null,t.quote),o.a.createElement(ve,{as:"h1",size:"L"},t.title)),t.html&&o.a.createElement(d.a,{columnsFromM:"5 / 13",columnsFromL:"8/14",columnsFromXL:"9/15"},o.a.createElement(f.a,{dangerouslySetInnerHTML:{__html:t.html}})),o.a.createElement(d.a,{as:ge,spanRows:3,spanRowsFromL:t.html&&t.timestamps?2:1,spanFromM:4,columnsFromL:"2/8",columnsFromXL:"3/9"},o.a.createElement(oe,{datePublished:t.datePublished,viewCount:t.viewCount,commentCount:t.commentCount,youtubeId:t.youtubeId}),v&&o.a.createElement(le,{rating7:v.rating7,slug:v.slug,links:v.links})),t.timestamps&&o.a.createElement(d.a,{as:he,columnsFromM:"5 / 13",columnsFromL:"8/15",columnsFromXL:"9/17",rows:S?"3/4":"2/3",rowsFromL:S?"2/3":"1/2",style:{marginTop:S?"-0.25em":"-0.75em",marginBottom:"-0.5em",alignSelf:S?"start":"end"}},o.a.createElement(M,{timestamps:t.timestamps,playedSeconds:h,setPlayedSeconds:g,setIsPlaying:p,videoComponent:b}))),o.a.createElement(m.a,{books:w,featuredSlugs:O,ownedSlug:v&&v.slug}))}},wC2E:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb");var r,o=n("q1tI"),i=n.n(o),a=n("vOnD"),c=(n("hhXQ"),n("a1Th"),n("xfY5"),n("SRfc"),{GOODREADS:"gr",AMAZON:"amzn",BOOK_DEPOSITORY:"bd"}),l=n("6p55"),s=n("hQ1k"),u=n("zjVz");function d(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    margin-left: -1.5em;\n  "]);return d=function(){return e},e}var m=((r={})[c.GOODREADS]="See on Goodreads",r[c.AMAZON]="Buy on Amazon",r[c.BOOK_DEPOSITORY]="Buy on Book Depository",r),f=a.c.li.withConfig({displayName:"BookAffiliates__StyledLi",componentId:"sc-1dplmdt-0"})(["font-size:",";",""],l.e.SIZE.S,s.c.l(d())),p=Object(a.c)(u.a).withConfig({displayName:"BookAffiliates__StyledArrowIcon",componentId:"sc-1dplmdt-1"})(["margin:0 0.75em 0 0;"]);t.a=function(e){var t=e.links;return i.a.createElement("ol",null,Object.entries(m).map((function(e){var n=e[0],r=e[1];return i.a.createElement(f,{key:n},i.a.createElement("a",{href:t.long[n]},i.a.createElement(p,null),r))})))}}}]);
//# sourceMappingURL=component---src-views-video-page-index-tsx-7d724ef2cc69c2e57b69.js.map