!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).zustandShallow={})}(this,(function(e){"use strict";e.default=function(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!Object.is(e[n[o]],t[n[o]]))return!1;return!0},Object.defineProperty(e,"__esModule",{value:!0})}));