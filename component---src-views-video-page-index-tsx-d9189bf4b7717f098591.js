(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/6c9":function(e,t,r){"use strict";r("SRfc"),r("LK8F"),r("a1Th"),r("h7Nl"),r("hHhE"),r("/SS/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("RW0V"),r("rE2o"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.YouTube=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=r("tbWI"),i=(n=r("LVMo"))&&n.__esModule?n:{default:n};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/,O=/list=([a-zA-Z0-9_-]+)/;function P(e){return O.test(e)?{listType:"playlist",list:v(e.match(O),2)[1]}:{}}var w=function(e){function t(){var e,r;f(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return m(h(r=y(this,(e=d(t)).call.apply(e,[this].concat(o)))),"callPlayer",a.callPlayer),m(h(r),"onStateChange",(function(e){var t=e.data,n=r.props,o=n.onPlay,a=n.onPause,i=n.onBuffer,l=n.onBufferEnd,u=n.onEnded,c=n.onReady,s=n.loop,f=window.YT.PlayerState,p=f.PLAYING,y=f.PAUSED,d=f.BUFFERING,h=f.ENDED,b=f.CUED;if(t===p&&(o(),l()),t===y&&a(),t===d&&i(),t===h){var m=!!r.callPlayer("getPlaylist");s&&!m&&r.play(),u()}t===b&&c()})),m(h(r),"mute",(function(){r.callPlayer("mute")})),m(h(r),"unmute",(function(){r.callPlayer("unMute")})),m(h(r),"ref",(function(e){r.container=e})),r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,(n=[{key:"load",value:function(e,t){var r=this,n=this.props,o=n.playing,i=n.muted,l=n.playsinline,u=n.controls,c=n.loop,f=n.config,p=n.onError,y=f.youtube,d=y.playerVars,h=y.embedOptions,b=e&&e.match(g)[1];if(t)return O.test(e)?void this.player.loadPlaylist(P(e)):void this.player.cueVideoById({videoId:b,startSeconds:(0,a.parseStartTime)(e)||d.start,endSeconds:(0,a.parseEndTime)(e)||d.end});(0,a.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(function(e){return e.loaded})).then((function(t){r.container&&(r.player=new t.Player(r.container,s({width:"100%",height:"100%",videoId:b,playerVars:s({autoplay:o?1:0,mute:i?1:0,controls:u?1:0,start:(0,a.parseStartTime)(e),end:(0,a.parseEndTime)(e),origin:window.location.origin,playsinline:l},P(e),{},d),events:{onReady:function(){c&&r.player.setLoop(!0),r.props.onReady()},onStateChange:r.onStateChange,onError:function(e){return p(e.data)}}},h)))}),p)}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",e),this.props.playing||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return o.default.createElement("div",{style:e},o.default.createElement("div",{ref:this.ref}))}}])&&p(r.prototype,n),i&&p(r,i),t}(o.Component);t.YouTube=w,m(w,"displayName","YouTube"),m(w,"canPlay",(function(e){return g.test(e)}));var j=(0,i.default)(w);t.default=j},"0jNN":function(e,t,r){"use strict";r("V+eJ"),r("rE2o"),r("ioFf"),r("pIFo"),r("rGqo"),r("yt8O"),r("RW0V"),r("DNiP"),r("8+KV"),r("hHhE"),r("a1Th"),r("h7Nl"),r("Btvt"),r("LK8F");var n=Object.prototype.hasOwnProperty,o=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var a=t[n],i=a.obj[a.prop],l=Object.keys(i),u=0;u<l.length;++u){var c=l[u],s=i[c];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:i,prop:c}),r.push(s))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],a=0;a<r.length;++a)void 0!==r[a]&&n.push(r[a]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(o){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=a[l]:l<2048?o+=a[192|l>>6]+a[128|63&l]:l<55296||l>=57344?o+=a[224|l>>12]+a[128|l>>6&63]+a[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=a[240|l>>18]+a[128|l>>12&63]+a[128|l>>6&63]+a[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,a){if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(a&&(a.plainObjects||a.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var l=t;return o(t)&&!o(r)&&(l=i(t,a)),o(t)&&o(r)?(r.forEach((function(r,o){if(n.call(t,o)){var i=t[o];i&&"object"==typeof i&&r&&"object"==typeof r?t[o]=e(i,r,a):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var i=r[o];return n.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t}),l)}}},LVMo:function(e,t,r){"use strict";r("hHhE"),r("/SS/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("RW0V"),r("91GP"),r("rE2o"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r;return r=t=function(t){function r(){var e,t;y(this,r);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return g(m(t=h(this,(e=b(r)).call.apply(e,[this].concat(o)))),"config",(0,i.getConfig)(t.props,a.defaultProps,!0)),g(m(t),"getDuration",(function(){return t.player?t.player.getDuration():null})),g(m(t),"getCurrentTime",(function(){return t.player?t.player.getCurrentTime():null})),g(m(t),"getSecondsLoaded",(function(){return t.player?t.player.getSecondsLoaded():null})),g(m(t),"getInternalPlayer",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return t.player?t.player.getInternalPlayer(e):null})),g(m(t),"seekTo",(function(e,r){if(!t.player)return null;t.player.seekTo(e,r)})),g(m(t),"ref",(function(e){t.player=e})),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(r,t),function(e,t,r){t&&d(e.prototype,t);r&&d(e,r)}(r,[{key:"shouldComponentUpdate",value:function(e){return!(0,i.isEqual)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.config=(0,i.getConfig)(this.props,a.defaultProps)}},{key:"render",value:function(){var t=this.config.file,r=t.forceVideo,n=t.forceAudio,u=t.forceHLS,c=t.forceDASH,f=r||n||u||c;if(!e.canPlay(this.props.url)&&!f)return null;var y=this.props,d=y.style,h=y.width,b=y.height,m=y.wrapper,v=(0,i.omit)(this.props,O,a.DEPRECATED_CONFIG_PROPS);return o.default.createElement(m,s({style:p({},d,{width:h,height:b})},v),o.default.createElement(l.default,s({},this.props,{ref:this.ref,activePlayer:e,config:this.config})))}}]),r}(o.Component),g(t,"displayName","".concat(e.displayName,"Player")),g(t,"propTypes",a.propTypes),g(t,"defaultProps",a.defaultProps),g(t,"canPlay",e.canPlay),r};var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==c(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=r("QXAm"),i=r("tbWI"),l=(n=r("q+qS"))&&n.__esModule?n:{default:n};function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?m(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=Object.keys(a.propTypes)},MuZe:function(e,t){function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?r:n)(i,o),i.onload||r(i,o),a.appendChild(i)}},PE4B:function(e,t,r){"use strict";r("DNiP"),r("8+KV"),r("rGqo"),r("yt8O"),r("RW0V"),r("0l/t"),r("bWfx"),r("LK8F"),r("rE2o"),r("ioFf"),r("a1Th"),r("h7Nl"),r("Btvt");var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function i(e,t,r){return e.concat(t).map((function(e){return a(e,r)}))}function l(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function u(e,t){try{return t in e}catch(r){return!1}}function c(e,t,r){var n={};return r.isMergeableObject(e)&&l(e).forEach((function(t){n[t]=a(e[t],r)})),l(t).forEach((function(o){(function(e,t){return u(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(u(e,o)&&r.isMergeableObject(t[o])?n[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,r)(e[o],t[o],r):n[o]=a(t[o],r))})),n}function s(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||i,r.isMergeableObject=r.isMergeableObject||n,r.cloneUnlessOtherwiseSpecified=a;var o=Array.isArray(t);return o===Array.isArray(e)?o?r.arrayMerge(e,t,r):c(e,t,r):a(t,r)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})};var f=s;e.exports=f},QSc6:function(e,t,r){"use strict";r("0l/t"),r("Vd3H"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("jqX0"),r("LK8F");var n=r("0jNN"),o=r("sxOR"),a=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,u=Array.prototype.push,c=function(e,t){u.apply(e,l(t)?t:[t])},s=Date.prototype.toISOString,f=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(t,r,o,a,i,u,s,f,y,d,h,b,m){var v,g=t;if("function"==typeof s?g=s(r,g):g instanceof Date?g=d(g):"comma"===o&&l(g)&&(g=g.join(",")),null===g){if(a)return u&&!b?u(r,p.encoder,m,"key"):r;g=""}if("string"==typeof(v=g)||"number"==typeof v||"boolean"==typeof v||"symbol"==typeof v||"bigint"==typeof v||n.isBuffer(g))return u?[h(b?r:u(r,p.encoder,m,"key"))+"="+h(u(g,p.encoder,m,"value"))]:[h(r)+"="+h(String(g))];var O,P=[];if(void 0===g)return P;if(l(s))O=s;else{var w=Object.keys(g);O=f?w.sort(f):w}for(var j=0;j<O.length;++j){var E=O[j];i&&null===g[E]||(l(g)?c(P,e(g[E],"function"==typeof o?o(r,E):r,o,a,i,u,s,f,y,d,h,b,m)):c(P,e(g[E],r+(y?"."+E:"["+E+"]"),o,a,i,u,s,f,y,d,h,b,m)))}return P};e.exports=function(e,t){var r,n=e,u=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!a.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],i=p.filter;return("function"==typeof e.filter||l(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof u.filter?n=(0,u.filter)("",n):l(u.filter)&&(r=u.filter);var s,f=[];if("object"!=typeof n||null===n)return"";s=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var d=i[s];r||(r=Object.keys(n)),u.sort&&r.sort(u.sort);for(var h=0;h<r.length;++h){var b=r[h];u.skipNulls&&null===n[b]||c(f,y(n[b],b,d,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.formatter,u.encodeValuesOnly,u.charset))}var m=f.join(u.delimiter),v=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),m.length>0?v+m:""}},QXAm:function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DEPRECATED_CONFIG_PROPS=t.defaultProps=t.propTypes=void 0;var n,o=(n=r("17x9"))&&n.__esModule?n:{default:n};var a=o.default.string,i=o.default.bool,l=o.default.number,u=o.default.array,c=o.default.oneOfType,s=o.default.shape,f=o.default.object,p=o.default.func,y=o.default.node,d={url:c([a,u,f]),playing:i,loop:i,controls:i,volume:l,muted:i,playbackRate:l,width:c([a,l]),height:c([a,l]),style:f,progressInterval:l,playsinline:i,pip:i,light:c([i,a]),playIcon:y,wrapper:c([a,p,s({render:p.isRequired})]),config:s({soundcloud:s({options:f,preload:i}),youtube:s({playerVars:f,embedOptions:f,preload:i}),facebook:s({appId:a,version:a,playerId:a}),dailymotion:s({params:f,preload:i}),vimeo:s({playerOptions:f,preload:i}),file:s({attributes:f,tracks:u,forceVideo:i,forceAudio:i,forceHLS:i,forceDASH:i,hlsOptions:f,hlsVersion:a,dashVersion:a}),wistia:s({options:f}),mixcloud:s({options:f}),twitch:s({options:f,playerId:a})}),onReady:p,onStart:p,onPlay:p,onPause:p,onBuffer:p,onBufferEnd:p,onEnded:p,onError:p,onDuration:p,onSeek:p,onProgress:p,onEnablePIP:p,onDisablePIP:p};t.propTypes=d;t.defaultProps={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,light:!1,wrapper:"div",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},preload:!1},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null},dailymotion:{params:{api:1,"endscreen-enable":!1},preload:!1},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},preload:!1},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,hlsOptions:{},hlsVersion:"0.13.1",dashVersion:"2.9.2"},wistia:{options:{}},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null}},onReady:function(){},onStart:function(){},onPlay:function(){},onPause:function(){},onBuffer:function(){},onBufferEnd:function(){},onEnded:function(){},onError:function(){},onDuration:function(){},onSeek:function(){},onProgress:function(){},onEnablePIP:function(){},onDisablePIP:function(){}};t.DEPRECATED_CONFIG_PROPS=["soundcloudConfig","youtubeConfig","facebookConfig","dailymotionConfig","vimeoConfig","fileConfig","wistiaConfig"]},Qyje:function(e,t,r){"use strict";var n=r("QSc6"),o=r("nmq7"),a=r("sxOR");e.exports={formats:a,parse:o,stringify:n}},WLL4:function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperties:r("FJW5")})},jm62:function(e,t,r){var n=r("XKFU"),o=r("mQtv"),a=r("aCFj"),i=r("EemH"),l=r("8a7r");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=a(e),u=i.f,c=o(n),s={},f=0;c.length>f;)void 0!==(r=u(n,t=c[f++]))&&l(s,t,r);return s}})},mQtv:function(e,t,r){var n=r("kJMx"),o=r("JiEa"),a=r("y3w9"),i=r("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=n.f(a(e)),r=o.f;return r?t.concat(r(e)):t}},nmq7:function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("hHhE"),r("V+eJ"),r("KKXr"),r("pIFo"),r("LK8F");var n=r("0jNN"),o=Object.prototype.hasOwnProperty,a=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},u=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=r.depth>0&&/(\[[^[\]]*])/.exec(n),l=i?n.slice(0,i.index):n,u=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var c=0;r.depth>0&&null!==(i=a.exec(n))&&c<r.depth;){if(c+=1,!r.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(i[1])}return i&&u.push("["+n.slice(i.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,u=parseInt(l,10);r.parseArrays||""!==l?!isNaN(u)&&i!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[])[u]=n:a[l]=n:a={0:n}}n=a}return n}(u,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof e?function(e,t){var r,u={},c=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=t.parameterLimit===1/0?void 0:t.parameterLimit,f=c.split(t.delimiter,s),p=-1,y=t.charset;if(t.charsetSentinel)for(r=0;r<f.length;++r)0===f[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[r]?y="utf-8":"utf8=%26%2310003%3B"===f[r]&&(y="iso-8859-1"),p=r,r=f.length);for(r=0;r<f.length;++r)if(r!==p){var d,h,b=f[r],m=b.indexOf("]="),v=-1===m?b.indexOf("="):m+1;-1===v?(d=t.decoder(b,i.decoder,y,"key"),h=t.strictNullHandling?null:""):(d=t.decoder(b.slice(0,v),i.decoder,y,"key"),h=t.decoder(b.slice(v+1),i.decoder,y,"value")),h&&t.interpretNumericEntities&&"iso-8859-1"===y&&(h=l(h)),h&&"string"==typeof h&&t.comma&&h.indexOf(",")>-1&&(h=h.split(",")),b.indexOf("[]=")>-1&&(h=a(h)?[h]:h),o.call(u,d)?u[d]=n.combine(u[d],h):u[d]=h}return u}(e,r):e,s=r.plainObjects?Object.create(null):{},f=Object.keys(c),p=0;p<f.length;++p){var y=f[p],d=u(y,c[y],r);s=n.merge(s,d,r)}return n.compact(s)}},"q+qS":function(e,t,r){"use strict";r("hHhE"),r("/SS/"),r("91GP"),r("rE2o"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),o=r("QXAm"),a=r("tbWI");function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?y(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(){var e,r;c(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return h(y(r=f(this,(e=p(t)).call.apply(e,[this].concat(o)))),"mounted",!1),h(y(r),"isReady",!1),h(y(r),"isPlaying",!1),h(y(r),"isLoading",!0),h(y(r),"loadOnReady",null),h(y(r),"startOnPlay",!0),h(y(r),"seekOnPlay",null),h(y(r),"onDurationCalled",!1),h(y(r),"getInternalPlayer",(function(e){return r.player?r.player[e]:null})),h(y(r),"progress",(function(){if(r.props.url&&r.player&&r.isReady){var e=r.getCurrentTime()||0,t=r.getSecondsLoaded(),n=r.getDuration();if(n){var o={playedSeconds:e,played:e/n};null!==t&&(o.loadedSeconds=t,o.loaded=t/n),o.playedSeconds===r.prevPlayed&&o.loadedSeconds===r.prevLoaded||r.props.onProgress(o),r.prevPlayed=o.playedSeconds,r.prevLoaded=o.loadedSeconds}}r.progressTimeout=setTimeout(r.progress,r.props.progressFrequency||r.props.progressInterval)})),h(y(r),"handleReady",(function(){if(r.mounted){r.isReady=!0,r.isLoading=!1;var e=r.props,t=e.onReady,n=e.playing,o=e.volume,a=e.muted;t(),a||null===o||r.player.setVolume(o),r.loadOnReady?(r.player.load(r.loadOnReady,!0),r.loadOnReady=null):n&&r.player.play(),r.handleDurationCheck()}})),h(y(r),"handlePlay",(function(){r.isPlaying=!0,r.isLoading=!1;var e=r.props,t=e.onStart,n=e.onPlay,o=e.playbackRate;r.startOnPlay&&(r.player.setPlaybackRate&&1!==o&&r.player.setPlaybackRate(o),t(),r.startOnPlay=!1),n(),r.seekOnPlay&&(r.seekTo(r.seekOnPlay),r.seekOnPlay=null),r.handleDurationCheck()})),h(y(r),"handlePause",(function(e){r.isPlaying=!1,r.isLoading||r.props.onPause(e)})),h(y(r),"handleEnded",(function(){var e=r.props,t=e.activePlayer,n=e.loop,o=e.onEnded;t.loopOnEnded&&n&&r.seekTo(0),n||(r.isPlaying=!1,o())})),h(y(r),"handleError",(function(){var e;r.isLoading=!1,(e=r.props).onError.apply(e,arguments)})),h(y(r),"handleDurationCheck",(function(){clearTimeout(r.durationCheckTimeout);var e=r.getDuration();e?r.onDurationCalled||(r.props.onDuration(e),r.onDurationCalled=!0):r.durationCheckTimeout=setTimeout(r.handleDurationCheck,100)})),h(y(r),"handleLoaded",(function(){r.isLoading=!1})),h(y(r),"ref",(function(e){e&&(r.player=e)})),r}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){this.mounted=!0,this.player.load(this.props.url),this.progress()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.player.stop(),this.player.disablePIP&&this.player.disablePIP(),this.mounted=!1}},{key:"componentDidUpdate",value:function(e){var t=this,r=this.props,n=r.url,o=r.playing,i=r.volume,l=r.muted,u=r.playbackRate,c=r.pip,s=r.loop,f=r.activePlayer;if(!(0,a.isEqual)(e.url,n)){if(this.isLoading&&!f.forceLoad)return console.warn("ReactPlayer: the attempt to load ".concat(n," is being deferred until the player has loaded")),void(this.loadOnReady=n);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}e.playing||!o||this.isPlaying||this.player.play(),e.playing&&!o&&this.isPlaying&&this.player.pause(),!e.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==i&&null!==i&&this.player.setVolume(i),e.muted!==l&&(l?this.player.mute():(this.player.unmute(),null!==i&&setTimeout((function(){return t.player.setVolume(i)})))),e.playbackRate!==u&&this.player.setPlaybackRate&&this.player.setPlaybackRate(u),e.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(e,t){var r=this;if(!this.isReady&&0!==e)return this.seekOnPlay=e,void setTimeout((function(){r.seekOnPlay=null}),5e3);if(t?"fraction"===t:e>0&&e<1){var n=this.player.getDuration();return n?void this.player.seekTo(n*e):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e)}},{key:"render",value:function(){var e=this.props.activePlayer;return e?n.default.createElement(e,u({},this.props,{ref:this.ref,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}])&&s(r.prototype,o),i&&s(r,i),t}(n.Component);t.default=b,h(b,"displayName","Player"),h(b,"propTypes",o.propTypes),h(b,"defaultProps",o.defaultProps)},sxOR:function(e,t,r){"use strict";r("pIFo");var n=String.prototype.replace,o=/%20/g,a=r("0jNN"),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=a.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},i)},tbWI:function(e,t,r){"use strict";r("V+eJ"),r("pIFo"),r("8+KV"),r("VRzm"),r("yt8O"),r("RW0V"),r("bWfx"),r("SRfc"),r("LK8F"),r("a1Th"),r("h7Nl"),r("Btvt"),r("rGqo"),r("rE2o"),r("ioFf"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.parseStartTime=function(e){return h(e,f)},t.parseEndTime=function(e){return h(e,p)},t.randomString=function(){return Math.random().toString(36).substr(2,5)},t.queryString=function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},t.getSDK=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.default;if(window[t]&&n(window[t]))return Promise.resolve(window[t]);return new Promise((function(n,o){if(b[e])b[e].push({resolve:n,reject:o});else{b[e]=[{resolve:n,reject:o}];var i=function(t){b[e].forEach((function(e){return e.resolve(t)}))};if(r){var l=window[r];window[r]=function(){l&&l(),i(window[t])}}a(e,(function(n){n?(b[e].forEach((function(e){return e.reject(n)})),b[e]=null):r||i(window[t])}))}}))},t.getConfig=function(e,t,r){var n=(0,a.default)(t.config,e.config),o=!0,l=!1,u=void 0;try{for(var s,f=i.DEPRECATED_CONFIG_PROPS[Symbol.iterator]();!(o=(s=f.next()).done);o=!0){var p=s.value;if(e[p]){var y=p.replace(/Config$/,"");if(n=(0,a.default)(n,c({},y,e[p])),r){var d="ReactPlayer: %c".concat(p," %cis deprecated, please use the config prop instead – ").concat("https://github.com/CookPete/react-player#config-prop");console.warn(d,"font-weight: bold","")}}}}catch(h){l=!0,u=h}finally{try{o||null==f.return||f.return()}finally{if(l)throw u}}return n},t.omit=function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var a=(t=[]).concat.apply(t,n),i={},l=Object.keys(e),u=0,c=l;u<c.length;u++){var s=c[u];-1===a.indexOf(s)&&(i[s]=e[s])}return i},t.callPlayer=function(e){var t;if(!this.player||!this.player[e]){var r="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(e,"%c – ");return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return(t=this.player)[e].apply(t,o)},t.isObject=m,t.isEqual=function e(t,r){if("function"==typeof t&&"function"==typeof r)return!0;if((0,n.isValidElement)(t)&&(0,n.isValidElement)(r))return!0;if(t instanceof Array&&r instanceof Array){if(t.length!==r.length)return!1;for(var o=0;o!==t.length;o++)if(!e(t[o],r[o]))return!1;return!0}if(m(t)&&m(r)){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(var a=0,i=Object.keys(t);a<i.length;a++){var l=i[a];if(!e(t[l],r[l]))return!1}return!0}return t===r},t.isMediaStream=function(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream};var n=r("q1tI"),o=l(r("MuZe")),a=l(r("PE4B")),i=r("QXAm");function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=/[?&#](?:start|t)=([0-9hms]+)/,p=/[?&#]end=([0-9hms]+)/,y=/(\d+)(h|m|s)/g,d=/^\d+$/;function h(e,t){var r=e.match(t);if(r){var n=r[1];if(n.match(y))return function(e){var t=0,r=y.exec(e);for(;null!==r;){var n=s(r,3),o=n[1],a=n[2];"h"===a&&(t+=60*parseInt(o,10)*60),"m"===a&&(t+=60*parseInt(o,10)),"s"===a&&(t+=parseInt(o,10)),r=y.exec(e)}return t}(n);if(d.test(n))return parseInt(n)}}var b={};function m(e){return null!==e&&"object"===u(e)}},vrtD:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),i=r("/6c9"),l=r.n(i),u=r("rcno"),c=r("NsgW"),s=r("lmt0"),f=(r("OG14"),r("Qyje")),p=r.n(f),y=function(){return window.location.search?p.a.parse(window.location.search,{ignoreQueryPrefix:!0}):{}},d=r("7tht");r.d(t,"query",(function(){return b}));var h={youtube:{playerVars:{rel:0,controls:1}}},b="3540146121";t.default=function(e){var t=e.data.videoData,r=t.timestamps.map((function(e){var t=e.t,r=e.text,n=e.book;return{t:t,text:r,book:n&&Object(u.b)(n)}})),i=Object(u.b)(t),f=Object(n.useState)(!1),p=f[0],b=f[1],m=Object(n.useState)(0),v=m[0],g=m[1],O=Object(n.useState)(0),P=O[0],w=O[1],j=Object(n.useRef)();Object(n.useEffect)((function(){var e=y();if(e.at){var t=Object(s.d)(e.at);w(t),g(t)}}),[]);var E;r.forEach((function(e,t){var r=e.t;v>=r&&(E=t)}));var S=i.ownedBy&&Object(u.b)(i.ownedBy);return o.a.createElement(c.a,null,o.a.createElement("h2",null,i.title),o.a.createElement(l.a,{url:"https://www.youtube.com/watch?v="+i.youtubeId+(P>0&&"&t="+P),ref:j,onPlay:function(){return b(!0)},onPause:function(){return b(!1)},onProgress:function(e){var t=e.playedSeconds;return g(t)},progressInterval:500,playing:p,config:h,controls:!0}),o.a.createElement("time",null,Object(s.a)(i.datePublished)),o.a.createElement("p",null,i.description),i.quote&&o.a.createElement("blockquote",null,i.quote),S&&o.a.createElement("p",null,o.a.createElement(d.a,{of7:S.rating7}),o.a.createElement(a.a,{to:S.slug},"go to book page")),o.a.createElement("ol",null,r.map((function(e,t){var r=e.t,n=e.text,i=e.book;return o.a.createElement("li",{key:r,onClick:function(){return function(e,t){j.current&&(j.current.seekTo(e),g(e),t&&b(!0))}(r,!0)},style:E===t?{background:"thistle"}:void 0},Object(s.b)(r)," - ",n,i&&o.a.createElement("p",null,o.a.createElement(d.a,{of7:i.rating7}),o.a.createElement(a.a,{to:i.slug},"go to book page")))}))))}}}]);
//# sourceMappingURL=component---src-views-video-page-index-tsx-d9189bf4b7717f098591.js.map