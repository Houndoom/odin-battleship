/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Electrolize-Regular.ttf */ "./src/fonts/Electrolize-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TarrgetRegular-WEOz.otf */ "./src/fonts/TarrgetRegular-WEOz.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sea-blue: #00A1E0;\n  --board-length: 0;\n}\n\n@font-face {\n  font-family: 'Electrolize';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'Tarrget';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--sea-blue);\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n.header {\n  font-size: 6rem;\n  margin: 20px auto;\n  font-family: 'Tarrget', sans-serif;\n}\n\n.footer {\n  font-size: 1rem;\n  margin: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\n.game-message {\n  font-size: 1rem;\n  display: grid;\n  place-content: center;\n}\n\nmain {\n  display: grid;\n  place-items: center;\n  font-family: 'Electrolize', sans-serif;  \n}\n\n/* Start */\n\n.start {\n  display: grid;\n  grid-gap: 20px;\n  font-size: 2rem;\n  place-items: center;\n  font-family: 'Electrolize', sans-serif;\n}\n\n.start .name-form {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.start input {\n  height: 2.5rem;\n  width: 15rem;\n  font-size: 2rem;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 0 5px;\n}\n\n.start input:hover, .start input:focus {\n  outline: 1.5px solid black;\n}\n\nbutton {\n  width: 16rem;\n  height: 4rem;\n  font-size: 3rem;\n  border: 1px solid black;\n  border-radius: 10px;\n  font-family: 'Electrolize', sans-serif;\n  background-color: rgb(200, 200, 200);\n}\n\nbutton:hover {\n  background-color: mediumseagreen;\n  outline: 1.5px solid black;\n}\n\n/* Place Ship */\n\n.place-ship {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n  place-items: center;\n}\n\n.place-ship .game-message {\n  grid-column: 1 / -1;\n}\n\n.choose-ship {\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n  height: 100%;\n  place-items: center;\n}\n\n.choose-ship img {\n  height: 32px;\n}\n\n/* Game */\n\n.game {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  width: 100%;\n}\n\n.game-display {\n  display: grid;\n  grid-template-columns: 1fr 300px 1fr;\n  place-items: center;\n}\n\n.game-message {\n  font-size: 1.5rem;\n  margin-bottom: 50px;\n}\n\n.player-name {\n  display: grid;\n  place-content: center;\n  font-size: 3rem;\n}\n\n.player-space {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n}\n\n.gameboard {\n  display: grid;\n  height: 400px;\n  width: 400px;\n  grid-template-columns: repeat(var(--board-length), 1fr);\n  grid-template-rows: repeat(var(--board-length), 1fr);\n}\n\n.square {\n  border: 1px solid black;\n  margin: -1px 0px 0px -1px;\n}\n\n.square.active-board:hover:not(.attacked), .square.drag-over{\n  background-color: green;\n  opacity: 0.5;\n}\n\n.square.attacked.hit {\n  background-color: red;\n  opacity: 0.5;\n}\n\n.square.attacked {\n  background:\n  linear-gradient(to bottom right, \n   transparent calc(50% - 1px), black calc(50% - 1px), \n   black calc(50% + 1px), transparent calc(50% + 1px)),\n  linear-gradient(to bottom left , \n   transparent calc(50% - 1px), black calc(50% - 1px), \n   black calc(50% + 1px), transparent calc(50% + 1px)),\n  transparent;\n}\n\n.rotate {\n  transform: rotate(90deg);\n}\n\n.hide {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,4CAA2C;AAC7C;;AAEA;EACE,sBAAsB;EACtB,4CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;EAChC,0BAA0B;AAC5B;;AAEA,eAAe;;AAEf;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,4BAA4B;EAC5B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,uDAAuD;EACvD,oDAAoD;AACtD;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE;;;;;;;aAOW;AACb;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --sea-blue: #00A1E0;\n  --board-length: 0;\n}\n\n@font-face {\n  font-family: 'Electrolize';\n  src: url('./fonts/Electrolize-Regular.ttf');\n}\n\n@font-face {\n  font-family: 'Tarrget';\n  src: url('./fonts/TarrgetRegular-WEOz.otf');\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--sea-blue);\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n.header {\n  font-size: 6rem;\n  margin: 20px auto;\n  font-family: 'Tarrget', sans-serif;\n}\n\n.footer {\n  font-size: 1rem;\n  margin: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\n.game-message {\n  font-size: 1rem;\n  display: grid;\n  place-content: center;\n}\n\nmain {\n  display: grid;\n  place-items: center;\n  font-family: 'Electrolize', sans-serif;  \n}\n\n/* Start */\n\n.start {\n  display: grid;\n  grid-gap: 20px;\n  font-size: 2rem;\n  place-items: center;\n  font-family: 'Electrolize', sans-serif;\n}\n\n.start .name-form {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.start input {\n  height: 2.5rem;\n  width: 15rem;\n  font-size: 2rem;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 0 5px;\n}\n\n.start input:hover, .start input:focus {\n  outline: 1.5px solid black;\n}\n\nbutton {\n  width: 16rem;\n  height: 4rem;\n  font-size: 3rem;\n  border: 1px solid black;\n  border-radius: 10px;\n  font-family: 'Electrolize', sans-serif;\n  background-color: rgb(200, 200, 200);\n}\n\nbutton:hover {\n  background-color: mediumseagreen;\n  outline: 1.5px solid black;\n}\n\n/* Place Ship */\n\n.place-ship {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n  place-items: center;\n}\n\n.place-ship .game-message {\n  grid-column: 1 / -1;\n}\n\n.choose-ship {\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n  height: 100%;\n  place-items: center;\n}\n\n.choose-ship img {\n  height: 32px;\n}\n\n/* Game */\n\n.game {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  width: 100%;\n}\n\n.game-display {\n  display: grid;\n  grid-template-columns: 1fr 300px 1fr;\n  place-items: center;\n}\n\n.game-message {\n  font-size: 1.5rem;\n  margin-bottom: 50px;\n}\n\n.player-name {\n  display: grid;\n  place-content: center;\n  font-size: 3rem;\n}\n\n.player-space {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n}\n\n.gameboard {\n  display: grid;\n  height: 400px;\n  width: 400px;\n  grid-template-columns: repeat(var(--board-length), 1fr);\n  grid-template-rows: repeat(var(--board-length), 1fr);\n}\n\n.square {\n  border: 1px solid black;\n  margin: -1px 0px 0px -1px;\n}\n\n.square.active-board:hover:not(.attacked), .square.drag-over{\n  background-color: green;\n  opacity: 0.5;\n}\n\n.square.attacked.hit {\n  background-color: red;\n  opacity: 0.5;\n}\n\n.square.attacked {\n  background:\n  linear-gradient(to bottom right, \n   transparent calc(50% - 1px), black calc(50% - 1px), \n   black calc(50% + 1px), transparent calc(50% + 1px)),\n  linear-gradient(to bottom left , \n   transparent calc(50% - 1px), black calc(50% - 1px), \n   black calc(50% + 1px), transparent calc(50% + 1px)),\n  transparent;\n}\n\n.rotate {\n  transform: rotate(90deg);\n}\n\n.hide {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");



const Gameboard = (len) => {
  let _board = new Array(len);
  let _ships = [];
  let _shipPositions = [];
  const _boardSize = len*len; 

  for (let i = 0; i < len; i++) {
    _board[i] = new Array(len)
  }

  const getLength = () => len;
  
  const placeShipRandom = function(shipLen) {
    let x;
    let y;
    const directions = ['h', 'v'];
    let dir;
    let placed = false;

    while(placed === false) {
      dir = directions[Math.floor(Math.random() * 2)];
      if (dir === 'h') {
        x = Math.floor(Math.random() * (len - shipLen));
        y = Math.floor(Math.random() * len);
      } else {
        x = Math.floor(Math.random() * len);
        y = Math.floor(Math.random() * (len - shipLen));
      }
      placed = placeShip(x, y, shipLen, dir);
    }
  }

  const placeShip = function(x, y, shipLen, dir) {
    if (dir === 'h') {
      if (x <= len - shipLen) {
        for (let i = x; i < x + shipLen; i++) {
          if (_board[i][y] >= 0) return false;
        }
        _ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipLen));
        _shipPositions.push([x, y, shipLen, dir]);
        for (let i = x; i < x + shipLen; i++) {
          _board[i][y] = _ships.length - 1;
        }
        return true;
      }
    }
    if (dir === 'v') {
      if (y <= len - shipLen) {
        for (let i = y; i < y + shipLen; i++) {
          if (_board[x][i] >= 0) return false;
        }
        _ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipLen));
        _shipPositions.push([x, y, shipLen, dir]);
        for (let i = y; i < y + shipLen; i++) {
          _board[x][i] = _ships.length - 1;
        }
        return true;
      }
    }
    return false;
  }

  const receiveAttack = function(x, y) {
    // There cannot be a ship with number >= _boardSize, so can use numbers >= _boardSize to identify hit squares
    if (_board[x][y] === undefined) { // Unhit empty square
      _board[x][y] = _boardSize;
      return -1;
    } else if (_board[x][y] < _boardSize) { // Unhit ship square
      const shipNo = _board[x][y];
      _board[x][y] += _boardSize;
      if (_ships[shipNo].hit()) {
        return _shipPositions[shipNo];
      } else return 0; // 0 if hit ship not sunk, ship positions if ship sunk
    } else return -2; // Square already hit
  }

  const allSunk = function() {
    if (!_ships) return false;
    return _ships.reduce((a, b) => a && b.isSunk(), true);
  }

  const getShipPositions = () => _shipPositions;

  return { placeShip, receiveAttack, allSunk, getLength, placeShipRandom, getShipPositions };
}

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });


const Player = (name) => {
  const getName = () => name;

  return { getName };
}

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });


const Ship = (length) => {
  let _hitCount = 0;

  const getLength = () => length;

  const hit = () => {
    _hitCount++;
    if (isSunk()) return true;
    else return false;
  }
  
  const isSunk = () => {
    return _hitCount >= length;
  }

  return { getLength, hit, isSunk };
}

/***/ }),

/***/ "./src/displayControl.js":
/*!*******************************!*\
  !*** ./src/displayControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayControl": () => (/* binding */ displayControl)
/* harmony export */ });


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(__webpack_require__("./src/img sync \\.(png%7Cjpe?g%7Csvg)$"));

const displayControl = (() => {

  const div = function(...className) {
    const div = document.createElement('div');
    div.classList.add(...className);
    return div;
  }

  const _setGameMessage = function(text) {
    document.querySelector('.game-message').textContent = text;
  }

  const basicSetup = function() {
    const header = div('header');
    header.textContent = 'Battleship';
    
    const main = document.createElement('main');

    const footer = div('footer');
    footer.textContent = 'Created by Houndoom';
    
    const body = document.querySelector('body');
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
  }

  const clearMain = function() {
    const mainNode = document.querySelector('main').firstElementChild;
    if (mainNode) mainNode.remove();
  }

  // Start screen to ask for name
  const startSetup = function() {
    const start = div('start');
    
    // Name field
    const nameForm = div('name-form');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name-input');
    nameLabel.textContent = 'Please enter your player name:';

    const nameInput = document.createElement('input');
    nameInput.id = 'name-input';
    nameInput.maxLength = '12';
    nameInput.required = true;

    nameForm.appendChild(nameLabel);
    nameForm.appendChild(nameInput);

    // Submit button
    const enterButton = document.createElement('button');
    enterButton.textContent = 'Enter';

    start.appendChild(nameForm);
    start.appendChild(enterButton);

    document.querySelector('main').appendChild(start);
  }

  const placeShipSetup = function() {
    const placeShip = div('place-ship');
    const gameMessage = div('game-message');
    gameMessage.textContent = 'Drag and drop your ships to place them on your board';
    const chooseShip = div('choose-ship');
    
    for (let i = 2; i <= 5; i++) {
      const ship = document.createElement('img');
      ship.src = images[`ship${i}h.svg`];
      ship.id = `ship${i}`;
      ship.draggable = true;
      chooseShip.appendChild(ship);
    }

    placeShip.appendChild(gameMessage);
    placeShip.appendChild(chooseShip);
    placeShip.appendChild(_createGameboard(10));

    document.querySelector('main').appendChild(placeShip);
  }

  const gameSetup = function(len, leftName, rightName) {
    const game = div('game');

    const gameMessage = div('game-message');
    gameMessage.textContent = 'Start attacking!';

    const gameDisplay = div('game-display');

    const playerSpaceLeft = div('player-space', 'left');
    const midsection = div('midsection');
    const playerSpaceRight = div('player-space', 'right');

    const playerNameLeft = div('player-name');
    playerNameLeft.textContent = leftName;
    playerSpaceLeft.appendChild(playerNameLeft);
    playerSpaceLeft.appendChild(_createGameboard(len));

    const playerNameRight = div('player-name');
    playerNameRight.textContent = rightName;
    playerSpaceRight.appendChild(playerNameRight);
    playerSpaceRight.appendChild(_createGameboard(len));

    gameDisplay.appendChild(playerSpaceLeft);
    gameDisplay.appendChild(midsection);
    gameDisplay.appendChild(playerSpaceRight);

    game.appendChild(gameMessage);
    game.appendChild(gameDisplay);

    document.querySelector('main').appendChild(game);

  }

  const _createGameboard = function(len) {
    const root = document.documentElement;
    root.style.setProperty('--board-length', len);

    const newGameboard = div('gameboard');

    for (let i = 0; i < len * len; i++) {
      const square = div('square');
      square.setAttribute('data-id', `s${i}`);
      const x = i % len;
      const y = (i - x) / len;
      square.setAttribute('data-x', `x${x}`);
      square.setAttribute('data-y', `y${y}`);
      square.style.gridColumn = `${x + 1} / span 1`;
      square.style.gridRow = `${y + 1} / span 1`;
      newGameboard.appendChild(square);
    }

    return newGameboard;
  }

  const insertShip = function(gameboardSelector, x, y, len, dir) {
    const img = document.createElement('img');
    img.src = images[`ship${len}${dir}.svg`];
    if (dir === 'h') {
      img.style.gridColumn = `${x + 1} / span ${len}`;
      img.style.gridRow = `${y + 1}`;
    } else {
      img.style.gridColumn = `${x + 1}`;
      img.style.gridRow = `${y + 1} / span ${len}`;  
    }
    img.style.zIndex = '-1';
    document.querySelector(gameboardSelector).appendChild(img);
  }

  const attack = function(playerName, boardSelector, i, hit = false, sunk = false) {
    const board = document.querySelector(boardSelector);
    const square = board.querySelector(`[data-id = 's${i}']`)
    square.classList.add('attacked');
    if (hit) {
      square.classList.add('hit');
      if (sunk) _setGameMessage(`${playerName} sinks a ship!`);
      else _setGameMessage(`${playerName} hits a ship!`);
    } else  _setGameMessage(`${playerName} misses!`);
  }

  // Toggle whether board has event listeners
  const toggleBoard = function(boardSelector, func, disable = false) {
    const board = document.querySelector(boardSelector);
    const squares = board.querySelectorAll('.square');

    if (!disable) squares.forEach(e => {
      e.addEventListener('click', func)
      e.classList.add('active-board');
    });
    else squares.forEach(e => {
      e.removeEventListener('click', func);
      e.classList.remove('active-board')
    });
  }

  const win = function(playerName) {
    _setGameMessage(`${playerName} wins!`);

    const restart = document.createElement('button');
    restart.textContent = 'Play Again';
    document.querySelector('.midsection').append(restart);
  }

  return { basicSetup, startSetup, placeShipSetup, gameSetup, attack, toggleBoard, win, clearMain, insertShip };

})();

/***/ }),

/***/ "./src/gameControl.js":
/*!****************************!*\
  !*** ./src/gameControl.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameControl": () => (/* binding */ gameControl)
/* harmony export */ });
/* harmony import */ var _displayControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl.js */ "./src/displayControl.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");






const gameControl = (() => {

  let gameboards;
  const gameboardSelectors = ['.left .gameboard', '.right .gameboard']
  let players;
  const boardLen = 10;

  const createPlayers = function(name1, name2) {
    players = [(0,_Player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(name1), (0,_Player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(name2)];
  }

  const insertAllShips = function(gameboard) {
    if (gameboard === 'left') gameboards[0].getShipPositions().forEach(params => _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.insertShip(gameboardSelectors[0],...params));
    else gameboards[1].getShipPositions().forEach(params => _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.insertShip(gameboardSelectors[1],...params));
  }

  let _currPlayer = 0;

  const _randomAttack = () => {
    const enemyPlayer = (_currPlayer + 1) % 2;
    const len = gameboards[enemyPlayer].getLength();
    let attackResult = -2;
    let x;
    let y;
    while (attackResult === -2) {
      x = Math.floor(Math.random()*len);
      y = Math.floor(Math.random()*len);
      attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    }
    if (attackResult === -1) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x);
    } else if (attackResult === 0) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x, true);
    } else if (typeof attackResult === 'object') {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*len + x, true, true);
    }
    if (gameboards[enemyPlayer].allSunk()) _win();
    else _changeTurn();
  }

  const _attack = function() {
    const id = this.getAttribute('data-id').substring(1);
    const enemyPlayer = (_currPlayer + 1) % 2;
    const len = gameboards[enemyPlayer].getLength();
    const x = id % len;
    const y = (id - x) / len;
    let attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    if (attackResult === -1) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id);
    } else if (attackResult === 0) {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true);
    } else if (typeof attackResult === 'object') {
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true, true);
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.insertShip(gameboardSelectors[enemyPlayer],...attackResult);
    }
    if (gameboards[enemyPlayer].allSunk()) _win();
    else if (attackResult !== -2) _changeTurn();
  }

  // Does setup for player and computer turn
  const turnSetup = function() {
    if (_currPlayer === 0) _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack); // Player turn: add attack click events
    else { // Computer turn: remove attack click events and computer randomly attacks after one second
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack, true) 
      setTimeout(_randomAttack, 1000);
    }
  }

  const _changeTurn = function() {
    _currPlayer = (_currPlayer + 1) % 2;
    turnSetup();
  }

  const _win = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack, true);
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.win(players[_currPlayer].getName());
    document.querySelector('.midsection button').addEventListener("click", _startGame);
  }

  const startSetup = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.clearMain();
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.startSetup();

    /* Get name and start game */

    document.querySelector('.start button').addEventListener('click', enter);

    // Make it work on Enter key
    document.querySelector('.start input').addEventListener("keydown", e => {
      if (e.key === "Enter") enter();
    });

    function enter() {
      const nameInput = document.getElementById('name-input');
      if (nameInput.checkValidity()) {
        createPlayers(nameInput.value, 'Computer');
        _startGame();
      } else {
        nameInput.setCustomValidity('Please enter a name.');
        nameInput.reportValidity();
      }
    }
  }

  const placeShipSetup = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.placeShipSetup();
    gameboards = [(0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(boardLen), (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(boardLen)];
    const squares = document.querySelectorAll('.square');

    squares.forEach(s => {
      s.addEventListener('dragenter', dragEnter);
      s.addEventListener('dragover', dragOver);
      s.addEventListener('dragleave', dragLeave);
      s.addEventListener('drop', drop);
    })

    const ships = document.querySelectorAll('img');

    ships.forEach(s => s.addEventListener('dragstart', dragStart));

    function dragStart(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
    }

    function dragEnter(e) {
      e.preventDefault();
      e.target.classList.add('drag-over');
    }

    function dragOver(e) {
      e.preventDefault();
      e.target.classList.add('drag-over');
    }

    function dragLeave(e) {
      e.target.classList.remove('drag-over');
    }

    function drop(e) {
      e.preventDefault();
      const x = parseInt(e.target.getAttribute('data-x').substring(1));
      const y = parseInt(e.target.getAttribute('data-y').substring(1));
      let dir = 'h';
      
      const id = e.dataTransfer.getData('text/plain');
      const shipLen = parseInt(id.substring(4));
      const draggable = document.getElementById(id);

      e.target.classList.remove('drag-over');
      if (((dir === 'h') && (x <= boardLen - shipLen)) || ((dir === 'v') && (y <= boardLen - shipLen))) {
        if (gameboards[0].placeShip(x, y, shipLen, dir)) {
          _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.insertShip('.gameboard', x, y, shipLen, dir);
          draggable.classList.add('hide');
        }
      }
    }
  }

  const _startGame = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.clearMain();
    gameboards = [(0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(boardLen), (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(boardLen)];
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.gameSetup(boardLen, players[0].getName(), players[1].getName());

    for (let shipLen of [5, 4, 3, 2]) {
      gameboards[0].placeShipRandom(shipLen);
      gameboards[1].placeShipRandom(shipLen);
    }
    insertAllShips('left');
    turnSetup();
  }
  
  return { startSetup, placeShipSetup };
})();

/***/ }),

/***/ "./src/img sync \\.(png%7Cjpe?g%7Csvg)$":
/*!***********************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ship2h.svg": "./src/img/ship2h.svg",
	"./ship2v.svg": "./src/img/ship2v.svg",
	"./ship3h.svg": "./src/img/ship3h.svg",
	"./ship3v.svg": "./src/img/ship3v.svg",
	"./ship4h.svg": "./src/img/ship4h.svg",
	"./ship4v.svg": "./src/img/ship4v.svg",
	"./ship5h.svg": "./src/img/ship5h.svg",
	"./ship5v.svg": "./src/img/ship5v.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/fonts/Electrolize-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Electrolize-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8dc903348de81a218f08.ttf";

/***/ }),

/***/ "./src/fonts/TarrgetRegular-WEOz.otf":
/*!*******************************************!*\
  !*** ./src/fonts/TarrgetRegular-WEOz.otf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2e95069e398a42fa428.otf";

/***/ }),

/***/ "./src/img/ship2h.svg":
/*!****************************!*\
  !*** ./src/img/ship2h.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bca7418dbf2fc713cc76.svg";

/***/ }),

/***/ "./src/img/ship2v.svg":
/*!****************************!*\
  !*** ./src/img/ship2v.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5c819a4f25182ad0a4da.svg";

/***/ }),

/***/ "./src/img/ship3h.svg":
/*!****************************!*\
  !*** ./src/img/ship3h.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "025df341758e7654c2d0.svg";

/***/ }),

/***/ "./src/img/ship3v.svg":
/*!****************************!*\
  !*** ./src/img/ship3v.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4f9634ec58189061ba18.svg";

/***/ }),

/***/ "./src/img/ship4h.svg":
/*!****************************!*\
  !*** ./src/img/ship4h.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "69ffba33292b4364e905.svg";

/***/ }),

/***/ "./src/img/ship4v.svg":
/*!****************************!*\
  !*** ./src/img/ship4v.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d56972878c213d4b8d79.svg";

/***/ }),

/***/ "./src/img/ship5h.svg":
/*!****************************!*\
  !*** ./src/img/ship5h.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "349335a067d60d3f8476.svg";

/***/ }),

/***/ "./src/img/ship5v.svg":
/*!****************************!*\
  !*** ./src/img/ship5v.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7114a864fa8534b68e54.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameControl.js */ "./src/gameControl.js");
/* harmony import */ var _displayControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayControl.js */ "./src/displayControl.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




_gameControl_js__WEBPACK_IMPORTED_MODULE_0__.gameControl.placeShipSetup();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQStDO0FBQ007QUFDaEM7O0FBRXJCLHVFQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZGlzcGxheUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb250cm9sLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbWcvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvRWxlY3Ryb2xpemUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1RhcnJnZXRSZWd1bGFyLVdFT3oub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc2VhLWJsdWU6ICMwMEExRTA7XFxuICAtLWJvYXJkLWxlbmd0aDogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1RhcnJnZXQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWEtYmx1ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgZm9udC1mYW1pbHk6ICdUYXJyZ2V0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYW1lLW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRWxlY3Ryb2xpemUnLCBzYW5zLXNlcmlmOyAgXFxufVxcblxcbi8qIFN0YXJ0ICovXFxuXFxuLnN0YXJ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnN0YXJ0IC5uYW1lLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnN0YXJ0IGlucHV0IHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnN0YXJ0IGlucHV0OmhvdmVyLCAuc3RhcnQgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMS41cHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTZyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXNlYWdyZWVuO1xcbiAgb3V0bGluZTogMS41cHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIFBsYWNlIFNoaXAgKi9cXG5cXG4ucGxhY2Utc2hpcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGFjZS1zaGlwIC5nYW1lLW1lc3NhZ2Uge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLmNob29zZS1zaGlwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNob29zZS1zaGlwIGltZyB7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi8qIEdhbWUgKi9cXG5cXG4uZ2FtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ2FtZS1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweCAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnBsYXllci1uYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5wbGF5ZXItc3BhY2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC1sZW5ndGgpLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtbGVuZ3RoKSwgMWZyKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogLTFweCAwcHggMHB4IC0xcHg7XFxufVxcblxcbi5zcXVhcmUuYWN0aXZlLWJvYXJkOmhvdmVyOm5vdCguYXR0YWNrZWQpLCAuc3F1YXJlLmRyYWctb3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3F1YXJlLmF0dGFja2VkLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zcXVhcmUuYXR0YWNrZWQge1xcbiAgYmFja2dyb3VuZDpcXG4gIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIFxcbiAgIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgYmxhY2sgY2FsYyg1MCUgLSAxcHgpLCBcXG4gICBibGFjayBjYWxjKDUwJSArIDFweCksIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXFxuICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQgLCBcXG4gICB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGJsYWNrIGNhbGMoNTAlIC0gMXB4KSwgXFxuICAgYmxhY2sgY2FsYyg1MCUgKyAxcHgpLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpLFxcbiAgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNDQUFzQztBQUN4Qzs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osdURBQXVEO0VBQ3ZELG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFOzs7Ozs7O2FBT1c7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNlYS1ibHVlOiAjMDBBMUUwO1xcbiAgLS1ib2FyZC1sZW5ndGg6IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdFbGVjdHJvbGl6ZSc7XFxuICBzcmM6IHVybCgnLi9mb250cy9FbGVjdHJvbGl6ZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGFycmdldCc7XFxuICBzcmM6IHVybCgnLi9mb250cy9UYXJyZ2V0UmVndWxhci1XRU96Lm90ZicpO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWEtYmx1ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgZm9udC1mYW1pbHk6ICdUYXJyZ2V0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYW1lLW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRWxlY3Ryb2xpemUnLCBzYW5zLXNlcmlmOyAgXFxufVxcblxcbi8qIFN0YXJ0ICovXFxuXFxuLnN0YXJ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnN0YXJ0IC5uYW1lLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnN0YXJ0IGlucHV0IHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnN0YXJ0IGlucHV0OmhvdmVyLCAuc3RhcnQgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMS41cHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTZyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXNlYWdyZWVuO1xcbiAgb3V0bGluZTogMS41cHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qIFBsYWNlIFNoaXAgKi9cXG5cXG4ucGxhY2Utc2hpcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGFjZS1zaGlwIC5nYW1lLW1lc3NhZ2Uge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLmNob29zZS1zaGlwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNob29zZS1zaGlwIGltZyB7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi8qIEdhbWUgKi9cXG5cXG4uZ2FtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ2FtZS1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMDBweCAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnBsYXllci1uYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5wbGF5ZXItc3BhY2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ib2FyZC1sZW5ndGgpLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tYm9hcmQtbGVuZ3RoKSwgMWZyKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogLTFweCAwcHggMHB4IC0xcHg7XFxufVxcblxcbi5zcXVhcmUuYWN0aXZlLWJvYXJkOmhvdmVyOm5vdCguYXR0YWNrZWQpLCAuc3F1YXJlLmRyYWctb3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3F1YXJlLmF0dGFja2VkLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zcXVhcmUuYXR0YWNrZWQge1xcbiAgYmFja2dyb3VuZDpcXG4gIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIFxcbiAgIHRyYW5zcGFyZW50IGNhbGMoNTAlIC0gMXB4KSwgYmxhY2sgY2FsYyg1MCUgLSAxcHgpLCBcXG4gICBibGFjayBjYWxjKDUwJSArIDFweCksIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMXB4KSksXFxuICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQgLCBcXG4gICB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGJsYWNrIGNhbGMoNTAlIC0gMXB4KSwgXFxuICAgYmxhY2sgY2FsYyg1MCUgKyAxcHgpLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpLFxcbiAgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcC5qcyc7XG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcblxuY29uc3QgR2FtZWJvYXJkID0gKGxlbikgPT4ge1xuICBsZXQgX2JvYXJkID0gbmV3IEFycmF5KGxlbik7XG4gIGxldCBfc2hpcHMgPSBbXTtcbiAgbGV0IF9zaGlwUG9zaXRpb25zID0gW107XG4gIGNvbnN0IF9ib2FyZFNpemUgPSBsZW4qbGVuOyBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgX2JvYXJkW2ldID0gbmV3IEFycmF5KGxlbilcbiAgfVxuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbjtcbiAgXG4gIGNvbnN0IHBsYWNlU2hpcFJhbmRvbSA9IGZ1bmN0aW9uKHNoaXBMZW4pIHtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gWydoJywgJ3YnXTtcbiAgICBsZXQgZGlyO1xuICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlKHBsYWNlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGRpciA9IGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuICAgICAgaWYgKGRpciA9PT0gJ2gnKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGVuIC0gc2hpcExlbikpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW4pO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxlbiAtIHNoaXBMZW4pKTtcbiAgICAgIH1cbiAgICAgIHBsYWNlZCA9IHBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuLCBkaXIpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uKHgsIHksIHNoaXBMZW4sIGRpcikge1xuICAgIGlmIChkaXIgPT09ICdoJykge1xuICAgICAgaWYgKHggPD0gbGVuIC0gc2hpcExlbikge1xuICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwTGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoX2JvYXJkW2ldW3ldID49IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfc2hpcHMucHVzaChTaGlwKHNoaXBMZW4pKTtcbiAgICAgICAgX3NoaXBQb3NpdGlvbnMucHVzaChbeCwgeSwgc2hpcExlbiwgZGlyXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW47IGkrKykge1xuICAgICAgICAgIF9ib2FyZFtpXVt5XSA9IF9zaGlwcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlyID09PSAndicpIHtcbiAgICAgIGlmICh5IDw9IGxlbiAtIHNoaXBMZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKF9ib2FyZFt4XVtpXSA+PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3NoaXBzLnB1c2goU2hpcChzaGlwTGVuKSk7XG4gICAgICAgIF9zaGlwUG9zaXRpb25zLnB1c2goW3gsIHksIHNoaXBMZW4sIGRpcl0pO1xuICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuOyBpKyspIHtcbiAgICAgICAgICBfYm9hcmRbeF1baV0gPSBfc2hpcHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAvLyBUaGVyZSBjYW5ub3QgYmUgYSBzaGlwIHdpdGggbnVtYmVyID49IF9ib2FyZFNpemUsIHNvIGNhbiB1c2UgbnVtYmVycyA+PSBfYm9hcmRTaXplIHRvIGlkZW50aWZ5IGhpdCBzcXVhcmVzXG4gICAgaWYgKF9ib2FyZFt4XVt5XSA9PT0gdW5kZWZpbmVkKSB7IC8vIFVuaGl0IGVtcHR5IHNxdWFyZVxuICAgICAgX2JvYXJkW3hdW3ldID0gX2JvYXJkU2l6ZTtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKF9ib2FyZFt4XVt5XSA8IF9ib2FyZFNpemUpIHsgLy8gVW5oaXQgc2hpcCBzcXVhcmVcbiAgICAgIGNvbnN0IHNoaXBObyA9IF9ib2FyZFt4XVt5XTtcbiAgICAgIF9ib2FyZFt4XVt5XSArPSBfYm9hcmRTaXplO1xuICAgICAgaWYgKF9zaGlwc1tzaGlwTm9dLmhpdCgpKSB7XG4gICAgICAgIHJldHVybiBfc2hpcFBvc2l0aW9uc1tzaGlwTm9dO1xuICAgICAgfSBlbHNlIHJldHVybiAwOyAvLyAwIGlmIGhpdCBzaGlwIG5vdCBzdW5rLCBzaGlwIHBvc2l0aW9ucyBpZiBzaGlwIHN1bmtcbiAgICB9IGVsc2UgcmV0dXJuIC0yOyAvLyBTcXVhcmUgYWxyZWFkeSBoaXRcbiAgfVxuXG4gIGNvbnN0IGFsbFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIV9zaGlwcykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBfc2hpcHMucmVkdWNlKChhLCBiKSA9PiBhICYmIGIuaXNTdW5rKCksIHRydWUpO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcFBvc2l0aW9ucyA9ICgpID0+IF9zaGlwUG9zaXRpb25zO1xuXG4gIHJldHVybiB7IHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgZ2V0TGVuZ3RoLCBwbGFjZVNoaXBSYW5kb20sIGdldFNoaXBQb3NpdGlvbnMgfTtcbn0iLCJleHBvcnQgeyBQbGF5ZXIgfTtcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgcmV0dXJuIHsgZ2V0TmFtZSB9O1xufSIsImV4cG9ydCB7IFNoaXAgfTtcblxuY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IF9oaXRDb3VudCA9IDA7XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBfaGl0Q291bnQrKztcbiAgICBpZiAoaXNTdW5rKCkpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9oaXRDb3VudCA+PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGhpdCwgaXNTdW5rIH07XG59IiwiZXhwb3J0IHsgZGlzcGxheUNvbnRyb2wgfTtcblxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgbGV0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufVxuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuL2ltZy8nLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sID0gKCgpID0+IHtcblxuICBjb25zdCBkaXYgPSBmdW5jdGlvbiguLi5jbGFzc05hbWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBjb25zdCBfc2V0R2FtZU1lc3NhZ2UgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbWVzc2FnZScpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuXG4gIGNvbnN0IGJhc2ljU2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkaXYoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZGl2KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBIb3VuZG9vbSc7XG4gICAgXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIH1cblxuICBjb25zdCBjbGVhck1haW4gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAobWFpbk5vZGUpIG1haW5Ob2RlLnJlbW92ZSgpO1xuICB9XG5cbiAgLy8gU3RhcnQgc2NyZWVuIHRvIGFzayBmb3IgbmFtZVxuICBjb25zdCBzdGFydFNldHVwID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBkaXYoJ3N0YXJ0Jyk7XG4gICAgXG4gICAgLy8gTmFtZSBmaWVsZFxuICAgIGNvbnN0IG5hbWVGb3JtID0gZGl2KCduYW1lLWZvcm0nKTtcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lLWlucHV0Jyk7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1BsZWFzZSBlbnRlciB5b3VyIHBsYXllciBuYW1lOic7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcbiAgICBuYW1lSW5wdXQubWF4TGVuZ3RoID0gJzEyJztcbiAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgLy8gU3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGVudGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZW50ZXJCdXR0b24udGV4dENvbnRlbnQgPSAnRW50ZXInO1xuXG4gICAgc3RhcnQuYXBwZW5kQ2hpbGQobmFtZUZvcm0pO1xuICAgIHN0YXJ0LmFwcGVuZENoaWxkKGVudGVyQnV0dG9uKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChzdGFydCk7XG4gIH1cblxuICBjb25zdCBwbGFjZVNoaXBTZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IGRpdigncGxhY2Utc2hpcCcpO1xuICAgIGNvbnN0IGdhbWVNZXNzYWdlID0gZGl2KCdnYW1lLW1lc3NhZ2UnKTtcbiAgICBnYW1lTWVzc2FnZS50ZXh0Q29udGVudCA9ICdEcmFnIGFuZCBkcm9wIHlvdXIgc2hpcHMgdG8gcGxhY2UgdGhlbSBvbiB5b3VyIGJvYXJkJztcbiAgICBjb25zdCBjaG9vc2VTaGlwID0gZGl2KCdjaG9vc2Utc2hpcCcpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IDU7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgc2hpcC5zcmMgPSBpbWFnZXNbYHNoaXAke2l9aC5zdmdgXTtcbiAgICAgIHNoaXAuaWQgPSBgc2hpcCR7aX1gO1xuICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgY2hvb3NlU2hpcC5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAuYXBwZW5kQ2hpbGQoZ2FtZU1lc3NhZ2UpO1xuICAgIHBsYWNlU2hpcC5hcHBlbmRDaGlsZChjaG9vc2VTaGlwKTtcbiAgICBwbGFjZVNoaXAuYXBwZW5kQ2hpbGQoX2NyZWF0ZUdhbWVib2FyZCgxMCkpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHBsYWNlU2hpcCk7XG4gIH1cblxuICBjb25zdCBnYW1lU2V0dXAgPSBmdW5jdGlvbihsZW4sIGxlZnROYW1lLCByaWdodE5hbWUpIHtcbiAgICBjb25zdCBnYW1lID0gZGl2KCdnYW1lJyk7XG5cbiAgICBjb25zdCBnYW1lTWVzc2FnZSA9IGRpdignZ2FtZS1tZXNzYWdlJyk7XG4gICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSAnU3RhcnQgYXR0YWNraW5nISc7XG5cbiAgICBjb25zdCBnYW1lRGlzcGxheSA9IGRpdignZ2FtZS1kaXNwbGF5Jyk7XG5cbiAgICBjb25zdCBwbGF5ZXJTcGFjZUxlZnQgPSBkaXYoJ3BsYXllci1zcGFjZScsICdsZWZ0Jyk7XG4gICAgY29uc3QgbWlkc2VjdGlvbiA9IGRpdignbWlkc2VjdGlvbicpO1xuICAgIGNvbnN0IHBsYXllclNwYWNlUmlnaHQgPSBkaXYoJ3BsYXllci1zcGFjZScsICdyaWdodCcpO1xuXG4gICAgY29uc3QgcGxheWVyTmFtZUxlZnQgPSBkaXYoJ3BsYXllci1uYW1lJyk7XG4gICAgcGxheWVyTmFtZUxlZnQudGV4dENvbnRlbnQgPSBsZWZ0TmFtZTtcbiAgICBwbGF5ZXJTcGFjZUxlZnQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZUxlZnQpO1xuICAgIHBsYXllclNwYWNlTGVmdC5hcHBlbmRDaGlsZChfY3JlYXRlR2FtZWJvYXJkKGxlbikpO1xuXG4gICAgY29uc3QgcGxheWVyTmFtZVJpZ2h0ID0gZGl2KCdwbGF5ZXItbmFtZScpO1xuICAgIHBsYXllck5hbWVSaWdodC50ZXh0Q29udGVudCA9IHJpZ2h0TmFtZTtcbiAgICBwbGF5ZXJTcGFjZVJpZ2h0LmFwcGVuZENoaWxkKHBsYXllck5hbWVSaWdodCk7XG4gICAgcGxheWVyU3BhY2VSaWdodC5hcHBlbmRDaGlsZChfY3JlYXRlR2FtZWJvYXJkKGxlbikpO1xuXG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQocGxheWVyU3BhY2VMZWZ0KTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChtaWRzZWN0aW9uKTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChwbGF5ZXJTcGFjZVJpZ2h0KTtcblxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZU1lc3NhZ2UpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZURpc3BsYXkpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGdhbWUpO1xuXG4gIH1cblxuICBjb25zdCBfY3JlYXRlR2FtZWJvYXJkID0gZnVuY3Rpb24obGVuKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJvYXJkLWxlbmd0aCcsIGxlbik7XG5cbiAgICBjb25zdCBuZXdHYW1lYm9hcmQgPSBkaXYoJ2dhbWVib2FyZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gKiBsZW47IGkrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZGl2KCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgcyR7aX1gKTtcbiAgICAgIGNvbnN0IHggPSBpICUgbGVuO1xuICAgICAgY29uc3QgeSA9IChpIC0geCkgLyBsZW47XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBgeCR7eH1gKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIGB5JHt5fWApO1xuICAgICAgc3F1YXJlLnN0eWxlLmdyaWRDb2x1bW4gPSBgJHt4ICsgMX0gLyBzcGFuIDFgO1xuICAgICAgc3F1YXJlLnN0eWxlLmdyaWRSb3cgPSBgJHt5ICsgMX0gLyBzcGFuIDFgO1xuICAgICAgbmV3R2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0dhbWVib2FyZDtcbiAgfVxuXG4gIGNvbnN0IGluc2VydFNoaXAgPSBmdW5jdGlvbihnYW1lYm9hcmRTZWxlY3RvciwgeCwgeSwgbGVuLCBkaXIpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gaW1hZ2VzW2BzaGlwJHtsZW59JHtkaXJ9LnN2Z2BdO1xuICAgIGlmIChkaXIgPT09ICdoJykge1xuICAgICAgaW1nLnN0eWxlLmdyaWRDb2x1bW4gPSBgJHt4ICsgMX0gLyBzcGFuICR7bGVufWA7XG4gICAgICBpbWcuc3R5bGUuZ3JpZFJvdyA9IGAke3kgKyAxfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltZy5zdHlsZS5ncmlkQ29sdW1uID0gYCR7eCArIDF9YDtcbiAgICAgIGltZy5zdHlsZS5ncmlkUm93ID0gYCR7eSArIDF9IC8gc3BhbiAke2xlbn1gOyAgXG4gICAgfVxuICAgIGltZy5zdHlsZS56SW5kZXggPSAnLTEnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZ2FtZWJvYXJkU2VsZWN0b3IpLmFwcGVuZENoaWxkKGltZyk7XG4gIH1cblxuICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBib2FyZFNlbGVjdG9yLCBpLCBoaXQgPSBmYWxzZSwgc3VuayA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkU2VsZWN0b3IpO1xuICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkID0gJ3Mke2l9J11gKVxuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIGlmIChzdW5rKSBfc2V0R2FtZU1lc3NhZ2UoYCR7cGxheWVyTmFtZX0gc2lua3MgYSBzaGlwIWApO1xuICAgICAgZWxzZSBfc2V0R2FtZU1lc3NhZ2UoYCR7cGxheWVyTmFtZX0gaGl0cyBhIHNoaXAhYCk7XG4gICAgfSBlbHNlICBfc2V0R2FtZU1lc3NhZ2UoYCR7cGxheWVyTmFtZX0gbWlzc2VzIWApO1xuICB9XG5cbiAgLy8gVG9nZ2xlIHdoZXRoZXIgYm9hcmQgaGFzIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCB0b2dnbGVCb2FyZCA9IGZ1bmN0aW9uKGJvYXJkU2VsZWN0b3IsIGZ1bmMsIGRpc2FibGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZFNlbGVjdG9yKTtcbiAgICBjb25zdCBzcXVhcmVzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuXG4gICAgaWYgKCFkaXNhYmxlKSBzcXVhcmVzLmZvckVhY2goZSA9PiB7XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYylcbiAgICAgIGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWJvYXJkJyk7XG4gICAgfSk7XG4gICAgZWxzZSBzcXVhcmVzLmZvckVhY2goZSA9PiB7XG4gICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1ib2FyZCcpXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB3aW4gPSBmdW5jdGlvbihwbGF5ZXJOYW1lKSB7XG4gICAgX3NldEdhbWVNZXNzYWdlKGAke3BsYXllck5hbWV9IHdpbnMhYCk7XG5cbiAgICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzdGFydC50ZXh0Q29udGVudCA9ICdQbGF5IEFnYWluJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkc2VjdGlvbicpLmFwcGVuZChyZXN0YXJ0KTtcbiAgfVxuXG4gIHJldHVybiB7IGJhc2ljU2V0dXAsIHN0YXJ0U2V0dXAsIHBsYWNlU2hpcFNldHVwLCBnYW1lU2V0dXAsIGF0dGFjaywgdG9nZ2xlQm9hcmQsIHdpbiwgY2xlYXJNYWluLCBpbnNlcnRTaGlwIH07XG5cbn0pKCk7IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2wgfSBmcm9tICcuL2Rpc3BsYXlDb250cm9sLmpzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vR2FtZWJvYXJkLmpzJ1xuXG5leHBvcnQgeyBnYW1lQ29udHJvbCB9O1xuXG5jb25zdCBnYW1lQ29udHJvbCA9ICgoKSA9PiB7XG5cbiAgbGV0IGdhbWVib2FyZHM7XG4gIGNvbnN0IGdhbWVib2FyZFNlbGVjdG9ycyA9IFsnLmxlZnQgLmdhbWVib2FyZCcsICcucmlnaHQgLmdhbWVib2FyZCddXG4gIGxldCBwbGF5ZXJzO1xuICBjb25zdCBib2FyZExlbiA9IDEwO1xuXG4gIGNvbnN0IGNyZWF0ZVBsYXllcnMgPSBmdW5jdGlvbihuYW1lMSwgbmFtZTIpIHtcbiAgICBwbGF5ZXJzID0gW1BsYXllcihuYW1lMSksIFBsYXllcihuYW1lMildO1xuICB9XG5cbiAgY29uc3QgaW5zZXJ0QWxsU2hpcHMgPSBmdW5jdGlvbihnYW1lYm9hcmQpIHtcbiAgICBpZiAoZ2FtZWJvYXJkID09PSAnbGVmdCcpIGdhbWVib2FyZHNbMF0uZ2V0U2hpcFBvc2l0aW9ucygpLmZvckVhY2gocGFyYW1zID0+IGRpc3BsYXlDb250cm9sLmluc2VydFNoaXAoZ2FtZWJvYXJkU2VsZWN0b3JzWzBdLC4uLnBhcmFtcykpO1xuICAgIGVsc2UgZ2FtZWJvYXJkc1sxXS5nZXRTaGlwUG9zaXRpb25zKCkuZm9yRWFjaChwYXJhbXMgPT4gZGlzcGxheUNvbnRyb2wuaW5zZXJ0U2hpcChnYW1lYm9hcmRTZWxlY3RvcnNbMV0sLi4ucGFyYW1zKSk7XG4gIH1cblxuICBsZXQgX2N1cnJQbGF5ZXIgPSAwO1xuXG4gIGNvbnN0IF9yYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5lbXlQbGF5ZXIgPSAoX2N1cnJQbGF5ZXIgKyAxKSAlIDI7XG4gICAgY29uc3QgbGVuID0gZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0uZ2V0TGVuZ3RoKCk7XG4gICAgbGV0IGF0dGFja1Jlc3VsdCA9IC0yO1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIHdoaWxlIChhdHRhY2tSZXN1bHQgPT09IC0yKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmxlbik7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmxlbik7XG4gICAgICBhdHRhY2tSZXN1bHQgPSBnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cbiAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAtMSkge1xuICAgICAgZGlzcGxheUNvbnRyb2wuYXR0YWNrKHBsYXllcnNbX2N1cnJQbGF5ZXJdLmdldE5hbWUoKSwgZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgeSpsZW4gKyB4KTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gMCkge1xuICAgICAgZGlzcGxheUNvbnRyb2wuYXR0YWNrKHBsYXllcnNbX2N1cnJQbGF5ZXJdLmdldE5hbWUoKSwgZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgeSpsZW4gKyB4LCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhdHRhY2tSZXN1bHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2socGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpLCBnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCB5KmxlbiArIHgsIHRydWUsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0uYWxsU3VuaygpKSBfd2luKCk7XG4gICAgZWxzZSBfY2hhbmdlVHVybigpO1xuICB9XG5cbiAgY29uc3QgX2F0dGFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKS5zdWJzdHJpbmcoMSk7XG4gICAgY29uc3QgZW5lbXlQbGF5ZXIgPSAoX2N1cnJQbGF5ZXIgKyAxKSAlIDI7XG4gICAgY29uc3QgbGVuID0gZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0uZ2V0TGVuZ3RoKCk7XG4gICAgY29uc3QgeCA9IGlkICUgbGVuO1xuICAgIGNvbnN0IHkgPSAoaWQgLSB4KSAvIGxlbjtcbiAgICBsZXQgYXR0YWNrUmVzdWx0ID0gZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0ucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAtMSkge1xuICAgICAgZGlzcGxheUNvbnRyb2wuYXR0YWNrKHBsYXllcnNbX2N1cnJQbGF5ZXJdLmdldE5hbWUoKSwgZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgaWQpO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAwKSB7XG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2socGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpLCBnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCBpZCwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXR0YWNrUmVzdWx0ID09PSAnb2JqZWN0Jykge1xuICAgICAgZGlzcGxheUNvbnRyb2wuYXR0YWNrKHBsYXllcnNbX2N1cnJQbGF5ZXJdLmdldE5hbWUoKSwgZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgaWQsIHRydWUsIHRydWUpO1xuICAgICAgZGlzcGxheUNvbnRyb2wuaW5zZXJ0U2hpcChnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLC4uLmF0dGFja1Jlc3VsdCk7XG4gICAgfVxuICAgIGlmIChnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5hbGxTdW5rKCkpIF93aW4oKTtcbiAgICBlbHNlIGlmIChhdHRhY2tSZXN1bHQgIT09IC0yKSBfY2hhbmdlVHVybigpO1xuICB9XG5cbiAgLy8gRG9lcyBzZXR1cCBmb3IgcGxheWVyIGFuZCBjb21wdXRlciB0dXJuXG4gIGNvbnN0IHR1cm5TZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChfY3VyclBsYXllciA9PT0gMCkgZGlzcGxheUNvbnRyb2wudG9nZ2xlQm9hcmQoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLCBfYXR0YWNrKTsgLy8gUGxheWVyIHR1cm46IGFkZCBhdHRhY2sgY2xpY2sgZXZlbnRzXG4gICAgZWxzZSB7IC8vIENvbXB1dGVyIHR1cm46IHJlbW92ZSBhdHRhY2sgY2xpY2sgZXZlbnRzIGFuZCBjb21wdXRlciByYW5kb21seSBhdHRhY2tzIGFmdGVyIG9uZSBzZWNvbmRcbiAgICAgIGRpc3BsYXlDb250cm9sLnRvZ2dsZUJvYXJkKGdhbWVib2FyZFNlbGVjdG9yc1sxXSwgX2F0dGFjaywgdHJ1ZSkgXG4gICAgICBzZXRUaW1lb3V0KF9yYW5kb21BdHRhY2ssIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IF9jaGFuZ2VUdXJuID0gZnVuY3Rpb24oKSB7XG4gICAgX2N1cnJQbGF5ZXIgPSAoX2N1cnJQbGF5ZXIgKyAxKSAlIDI7XG4gICAgdHVyblNldHVwKCk7XG4gIH1cblxuICBjb25zdCBfd2luID0gZnVuY3Rpb24oKSB7XG4gICAgZGlzcGxheUNvbnRyb2wudG9nZ2xlQm9hcmQoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLCBfYXR0YWNrLCB0cnVlKTtcbiAgICBkaXNwbGF5Q29udHJvbC53aW4ocGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkc2VjdGlvbiBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N0YXJ0R2FtZSk7XG4gIH1cblxuICBjb25zdCBzdGFydFNldHVwID0gZnVuY3Rpb24oKSB7XG4gICAgZGlzcGxheUNvbnRyb2wuY2xlYXJNYWluKCk7XG4gICAgZGlzcGxheUNvbnRyb2wuc3RhcnRTZXR1cCgpO1xuXG4gICAgLyogR2V0IG5hbWUgYW5kIHN0YXJ0IGdhbWUgKi9cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVudGVyKTtcblxuICAgIC8vIE1ha2UgaXQgd29yayBvbiBFbnRlciBrZXlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQgaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlbnRlcigpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZW50ZXIoKSB7XG4gICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1pbnB1dCcpO1xuICAgICAgaWYgKG5hbWVJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgY3JlYXRlUGxheWVycyhuYW1lSW5wdXQudmFsdWUsICdDb21wdXRlcicpO1xuICAgICAgICBfc3RhcnRHYW1lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIG5hbWUuJyk7XG4gICAgICAgIG5hbWVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcFNldHVwID0gZnVuY3Rpb24oKSB7XG4gICAgZGlzcGxheUNvbnRyb2wucGxhY2VTaGlwU2V0dXAoKTtcbiAgICBnYW1lYm9hcmRzID0gW0dhbWVib2FyZChib2FyZExlbiksIEdhbWVib2FyZChib2FyZExlbildO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG5cbiAgICBzcXVhcmVzLmZvckVhY2gocyA9PiB7XG4gICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgcy5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgcy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG5cbiAgICBzaGlwcy5mb3JFYWNoKHMgPT4gcy5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpKTtcblxuICAgIGZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBlLnRhcmdldC5pZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcm9wKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLnN1YnN0cmluZygxKSk7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXknKS5zdWJzdHJpbmcoMSkpO1xuICAgICAgbGV0IGRpciA9ICdoJztcbiAgICAgIFxuICAgICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgICBjb25zdCBzaGlwTGVuID0gcGFyc2VJbnQoaWQuc3Vic3RyaW5nKDQpKTtcbiAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG4gICAgICBpZiAoKChkaXIgPT09ICdoJykgJiYgKHggPD0gYm9hcmRMZW4gLSBzaGlwTGVuKSkgfHwgKChkaXIgPT09ICd2JykgJiYgKHkgPD0gYm9hcmRMZW4gLSBzaGlwTGVuKSkpIHtcbiAgICAgICAgaWYgKGdhbWVib2FyZHNbMF0ucGxhY2VTaGlwKHgsIHksIHNoaXBMZW4sIGRpcikpIHtcbiAgICAgICAgICBkaXNwbGF5Q29udHJvbC5pbnNlcnRTaGlwKCcuZ2FtZWJvYXJkJywgeCwgeSwgc2hpcExlbiwgZGlyKTtcbiAgICAgICAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgX3N0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRpc3BsYXlDb250cm9sLmNsZWFyTWFpbigpO1xuICAgIGdhbWVib2FyZHMgPSBbR2FtZWJvYXJkKGJvYXJkTGVuKSwgR2FtZWJvYXJkKGJvYXJkTGVuKV07XG4gICAgZGlzcGxheUNvbnRyb2wuZ2FtZVNldHVwKGJvYXJkTGVuLCBwbGF5ZXJzWzBdLmdldE5hbWUoKSwgcGxheWVyc1sxXS5nZXROYW1lKCkpO1xuXG4gICAgZm9yIChsZXQgc2hpcExlbiBvZiBbNSwgNCwgMywgMl0pIHtcbiAgICAgIGdhbWVib2FyZHNbMF0ucGxhY2VTaGlwUmFuZG9tKHNoaXBMZW4pO1xuICAgICAgZ2FtZWJvYXJkc1sxXS5wbGFjZVNoaXBSYW5kb20oc2hpcExlbik7XG4gICAgfVxuICAgIGluc2VydEFsbFNoaXBzKCdsZWZ0Jyk7XG4gICAgdHVyblNldHVwKCk7XG4gIH1cbiAgXG4gIHJldHVybiB7IHN0YXJ0U2V0dXAsIHBsYWNlU2hpcFNldHVwIH07XG59KSgpOyIsInZhciBtYXAgPSB7XG5cdFwiLi9zaGlwMmguc3ZnXCI6IFwiLi9zcmMvaW1nL3NoaXAyaC5zdmdcIixcblx0XCIuL3NoaXAydi5zdmdcIjogXCIuL3NyYy9pbWcvc2hpcDJ2LnN2Z1wiLFxuXHRcIi4vc2hpcDNoLnN2Z1wiOiBcIi4vc3JjL2ltZy9zaGlwM2guc3ZnXCIsXG5cdFwiLi9zaGlwM3Yuc3ZnXCI6IFwiLi9zcmMvaW1nL3NoaXAzdi5zdmdcIixcblx0XCIuL3NoaXA0aC5zdmdcIjogXCIuL3NyYy9pbWcvc2hpcDRoLnN2Z1wiLFxuXHRcIi4vc2hpcDR2LnN2Z1wiOiBcIi4vc3JjL2ltZy9zaGlwNHYuc3ZnXCIsXG5cdFwiLi9zaGlwNWguc3ZnXCI6IFwiLi9zcmMvaW1nL3NoaXA1aC5zdmdcIixcblx0XCIuL3NoaXA1di5zdmdcIjogXCIuL3NyYy9pbWcvc2hpcDV2LnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdhbWVDb250cm9sIH0gZnJvbSAnLi9nYW1lQ29udHJvbC5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbCB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2wuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmdhbWVDb250cm9sLnBsYWNlU2hpcFNldHVwKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9