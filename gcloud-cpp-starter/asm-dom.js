!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.asmDom=t():e.asmDom=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,o){"use strict";t.__esModule=!0,t.nodes=void 0;var n=o(1),r=function(e){return e&&e.__esModule?e:{default:e}}(n),u=t.nodes={0:null},a=0,i=function(e){return null===e?0:void 0!==e.asmDomPtr?e.asmDomPtr:(u[++a]=e,e.asmDomPtr=a)};t.default={addNode:function(e){return i(e.parentNode),i(e.nextSibling),i(e)},createElement:function(e){return i(r.default.create(e))},createElementNS:function(e,t){return i(r.default.createNS(t,e))},createTextNode:function(e){return i(r.default.createText(e))},createComment:function(e){return i(r.default.createComment(e))},createDocumentFragment:function(){return i(document.createDocumentFragment())},insertBefore:function(e,t,o){u[e].insertBefore(u[t],u[o])},removeChild:function(e){var t=u[e];if(null!==t&&void 0!==t){var o=t.parentNode;null!==o&&o.removeChild(t),r.default.collect(t)}},appendChild:function(e,t){u[e].appendChild(u[t])},removeAttribute:function(e,t){u[e].removeAttribute(t)},setAttribute:function(e,t,o){120!==t.charCodeAt(0)?u[e].setAttribute(t,o):58===t.charCodeAt(3)?u[e].setAttributeNS("http://www.w3.org/XML/1998/namespace",t,o):58===t.charCodeAt(5)?u[e].setAttributeNS("http://www.w3.org/1999/xlink",t,o):u[e].setAttribute(t,o)},parentNode:function(e){var t=u[e];return null!==t&&void 0!==t&&null!==t.parentNode?t.parentNode.asmDomPtr:0},nextSibling:function(e){var t=u[e];return null!==t&&void 0!==t&&null!==t.nextSibling?t.nextSibling.asmDomPtr:0},setNodeValue:function(e,t){u[e].nodeValue=t}}},function(e,t,o){"use strict";t.__esModule=!0;var n={create:function(e){e=e.toUpperCase();var t=n.nodes[e];return void 0!==t&&t.pop()||document.createElement(e)},createNS:function(e,t){e=e.toUpperCase();var o=n.nodes[e+t],r=void 0!==o&&o.pop()||document.createElementNS(t,e);return r.asmDomNS=t,r},createText:function(e){var t=n.nodes["#text"];if(void 0!==t){var o=t.pop();if(void 0!==o)return o.nodeValue=e,o}return document.createTextNode(e)},createComment:function(e){var t=n.nodes["#comment"];if(void 0!==t){var o=t.pop();if(void 0!==o)return o.nodeValue=e,o}return document.createComment(e)},collect:function(e){for(var t=void 0;t=e.lastChild;)e.removeChild(t),n.collect(t);for(t=void 0!==e.attributes?e.attributes.length:0;t--;)e.removeAttribute(e.attributes[t].name);e.asmDomVNode=void 0,void 0!==e.asmDomRaws&&(e.asmDomRaws.forEach(function(t){e[t]=void 0}),e.asmDomRaws=void 0),void 0!==e.asmDomEvents&&(Object.keys(e.asmDomEvents).forEach(function(t){e.removeEventListener(t,e.asmDomEvents[t],!1)}),e.asmDomEvents=void 0),null!==e.nodeValue&&""!==e.nodeValue&&(e.nodeValue=""),Object.keys(e).forEach(function(t){"a"===t[0]&&"s"===t[1]&&"m"===t[2]&&"D"===t[3]&&"o"===t[4]&&"m"===t[5]||(e[t]=void 0)});var o=e.nodeName;void 0!==e.asmDomNS&&(o+=e.namespaceURI);var r=n.nodes[o];void 0!==r?r.push(e):n.nodes[o]=[e]},nodes:{}};t.default=n},function(e,t,o){"use strict";var n=o(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n);"undefined"!=typeof global&&void 0===global.window&&(global.window={}),void 0===window.asmDomHelpers&&(window.asmDomHelpers={}),window.asmDomHelpers.domApi=r.default,window.asmDomHelpers.nodes=n.nodes}])});
