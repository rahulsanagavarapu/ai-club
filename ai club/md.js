!function(n){function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=1)}([function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function i(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}function a(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MarkedInHtml=void 0;var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),u=e(3),l=r(u),s=e(2),c=r(s);t.MarkedInHtml=function(){function n(){a(this,n),l.default.setOptions(this.options||{gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(n,t,e){return c.default.highlightAuto(n).value}})}return o(n,[{key:"init",value:function(){var n=this;document.querySelectorAll('template[type="markdown"]').forEach(function(t){var e=document.createElement("div");e.innerHTML=n.parse(t),e.id=t.id,e.classList.add(["markdown-body"].concat(i(Array.from(t.classList)))),e.dataset.markdown=n.intelligentProcessingIndent(t),t.parentElement.replaceChild(e,t)})}},{key:"parse",value:function(n){return(0,l.default)(this.intelligentProcessingIndent(n))}},{key:"intelligentProcessingIndent",value:function(n){var t=n.innerHTML.split("\n");t.length&&/^\s*$/.test(t[0])&&t.shift(),t.length&&/^\s*$/.test(t[t.length-1])&&t.pop();var e=Math.min.apply(Math,i(t.map(function(n){return n.length?n.match(/^\s*/)[0].length:1/0})));return t.map(function(n){return n.substring(e)}).join("\n")}}]),n}()},function(n,t,e){"use strict";var r=e(0);window&&(window.markedInHtml=new r.MarkedInHtml)},function(n,t){n.exports=hljs},function(n,t){n.exports=marked}]);