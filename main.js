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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sea-blue: #00A1E0;\n  --board-length: 0;\n}\n\n@font-face {\n  font-family: 'Electrolize';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'Tarrget';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--sea-blue);\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n.header {\n  font-size: 6rem;\n  margin: 20px auto;\n  font-family: 'Tarrget', sans-serif;\n}\n\n.footer {\n  font-size: 1rem;\n  margin: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\n.game-message {\n  font-size: 1rem;\n  display: grid;\n  place-content: center;\n}\n\nmain {\n  display: grid;\n  place-items: center;\n  font-family: 'Electrolize', sans-serif;  \n}\n\n/* Start */\n\n.start {\n  display: grid;\n  grid-gap: 20px;\n  font-size: 2rem;\n  place-items: center;\n  font-family: 'Electrolize', sans-serif;\n}\n\n.start .name-form {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.start input {\n  height: 2.5rem;\n  width: 15rem;\n  font-size: 2rem;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 0 5px;\n}\n\n.start input:hover, .start input:focus {\n  outline: 1.5px solid black;\n}\n\nbutton {\n  width: 16rem;\n  height: 4rem;\n  font-size: 3rem;\n  border: 1px solid black;\n  border-radius: 10px;\n  font-family: 'Electrolize', sans-serif;\n  background-color: rgb(200, 200, 200);\n}\n\nbutton:hover {\n  background-color: mediumseagreen;\n  outline: 1.5px solid black;\n}\n\n/* Place Ship */\n\n.place-ship {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n  place-items: center;\n}\n\n.place-ship .game-message {\n  grid-column: 1 / -1;\n}\n\n.choose-ship {\n  display: grid;\n  grid-template-rows: 40px repeat(3, 160px);\n  grid-template-columns: repeat(2, 160px);\n  height: 100%;\n  place-items: center;\n}\n\n.choose-ship button {\n  grid-column: 1 / -1;\n  font-size: 1rem;\n  height: 30px;\n  width: 150px;\n}\n\n.choose-ship [data-dir = 'h'] {\n  height: 32px;\n}\n\n.choose-ship [data-dir = 'v'] {\n  width: 32px;\n}\n\n/* Game */\n\n.game {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  width: 100%;\n}\n\n.game-display {\n  display: grid;\n  grid-template-columns: 1fr 300px 1fr;\n  place-items: center;\n}\n\n.game-message {\n  font-size: 1.5rem;\n  margin-bottom: 50px;\n}\n\n.player-name {\n  display: grid;\n  place-content: center;\n  font-size: 3rem;\n}\n\n.player-space {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n}\n\n.gameboard {\n  display: grid;\n  height: 400px;\n  width: 400px;\n  grid-template-columns: repeat(var(--board-length), 1fr);\n  grid-template-rows: repeat(var(--board-length), 1fr);\n}\n\n.square {\n  border: 1px solid black;\n  margin: -1px 0px 0px -1px;\n}\n\n.square.active-board:hover:not(.attacked), .square.drag-over{\n  background-color: green;\n  opacity: 0.5;\n}\n\n.square.attacked.hit {\n  background-color: red;\n  opacity: 0.5;\n}\n\n.square.attacked {\n  background:\n  linear-gradient(to bottom right, \n   transparent calc(50% - 1px), black calc(50% - 1px), \n   black calc(50% + 1px), transparent calc(50% + 1px)),\n  linear-gradient(to bottom left , \n   transparent calc(50% - 1px), black calc(50% - 1px), \n   black calc(50% + 1px), transparent calc(50% + 1px)),\n  transparent;\n}\n\n.rotate {\n  transform: rotate(90deg);\n}\n\n.hide {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;EAC1B,4CAA2C;AAC7C;;AAEA;EACE,sBAAsB;EACtB,4CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,gCAAgC;EAChC,0BAA0B;AAC5B;;AAEA,eAAe;;AAEf;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,uCAAuC;EACvC,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,4BAA4B;EAC5B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,uDAAuD;EACvD,oDAAoD;AACtD;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE;;;;;;;aAOW;AACb;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --sea-blue: #00A1E0;\n  --board-length: 0;\n}\n\n@font-face {\n  font-family: 'Electrolize';\n  src: url('./fonts/Electrolize-Regular.ttf');\n}\n\n@font-face {\n  font-family: 'Tarrget';\n  src: url('./fonts/TarrgetRegular-WEOz.otf');\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--sea-blue);\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n.header {\n  font-size: 6rem;\n  margin: 20px auto;\n  font-family: 'Tarrget', sans-serif;\n}\n\n.footer {\n  font-size: 1rem;\n  margin: auto;\n  font-family: 'Roboto', sans-serif;\n}\n\n.game-message {\n  font-size: 1rem;\n  display: grid;\n  place-content: center;\n}\n\nmain {\n  display: grid;\n  place-items: center;\n  font-family: 'Electrolize', sans-serif;  \n}\n\n/* Start */\n\n.start {\n  display: grid;\n  grid-gap: 20px;\n  font-size: 2rem;\n  place-items: center;\n  font-family: 'Electrolize', sans-serif;\n}\n\n.start .name-form {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.start input {\n  height: 2.5rem;\n  width: 15rem;\n  font-size: 2rem;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 0 5px;\n}\n\n.start input:hover, .start input:focus {\n  outline: 1.5px solid black;\n}\n\nbutton {\n  width: 16rem;\n  height: 4rem;\n  font-size: 3rem;\n  border: 1px solid black;\n  border-radius: 10px;\n  font-family: 'Electrolize', sans-serif;\n  background-color: rgb(200, 200, 200);\n}\n\nbutton:hover {\n  background-color: mediumseagreen;\n  outline: 1.5px solid black;\n}\n\n/* Place Ship */\n\n.place-ship {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n  place-items: center;\n}\n\n.place-ship .game-message {\n  grid-column: 1 / -1;\n}\n\n.choose-ship {\n  display: grid;\n  grid-template-rows: 40px repeat(3, 160px);\n  grid-template-columns: repeat(2, 160px);\n  height: 100%;\n  place-items: center;\n}\n\n.choose-ship button {\n  grid-column: 1 / -1;\n  font-size: 1rem;\n  height: 30px;\n  width: 150px;\n}\n\n.choose-ship [data-dir = 'h'] {\n  height: 32px;\n}\n\n.choose-ship [data-dir = 'v'] {\n  width: 32px;\n}\n\n/* Game */\n\n.game {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  width: 100%;\n}\n\n.game-display {\n  display: grid;\n  grid-template-columns: 1fr 300px 1fr;\n  place-items: center;\n}\n\n.game-message {\n  font-size: 1.5rem;\n  margin-bottom: 50px;\n}\n\n.player-name {\n  display: grid;\n  place-content: center;\n  font-size: 3rem;\n}\n\n.player-space {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n}\n\n.gameboard {\n  display: grid;\n  height: 400px;\n  width: 400px;\n  grid-template-columns: repeat(var(--board-length), 1fr);\n  grid-template-rows: repeat(var(--board-length), 1fr);\n}\n\n.square {\n  border: 1px solid black;\n  margin: -1px 0px 0px -1px;\n}\n\n.square.active-board:hover:not(.attacked), .square.drag-over{\n  background-color: green;\n  opacity: 0.5;\n}\n\n.square.attacked.hit {\n  background-color: red;\n  opacity: 0.5;\n}\n\n.square.attacked {\n  background:\n  linear-gradient(to bottom right, \n   transparent calc(50% - 1px), black calc(50% - 1px), \n   black calc(50% + 1px), transparent calc(50% + 1px)),\n  linear-gradient(to bottom left , \n   transparent calc(50% - 1px), black calc(50% - 1px), \n   black calc(50% + 1px), transparent calc(50% + 1px)),\n  transparent;\n}\n\n.rotate {\n  transform: rotate(90deg);\n}\n\n.hide {\n  display: none;\n}"],"sourceRoot":""}]);
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
  let _board = new Array(len); // All positions on board
  for (let i = 0; i < len; i++) {
    _board[i] = new Array(len)
  }

  let _ships = []; // All Ship objects on board
  let _shipPositions = []; // Starting x, y, ship length, and ship direction values for each ship
  const _boardSize = len*len; 


  const getLength = () => len;

  // Creates a Ship object and places it on the board
  // x, y are coordinates of the starting square
  // shipLen is the ship length, and dir is the ship direction
  const placeShip = function(x, y, shipLen, dir) {
    if (dir === 'h') { // Horizontal ship
      if (x <= len - shipLen) { // Starting column needs to be at most board length less ship length
        for (let i = x; i < x + shipLen; i++) {
          if (_board[i][y] >= 0) return false; // Don't place ship if any square is already occupied
        } // Otherwise create ship and record in the relevant arrays
        _ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipLen));
        _shipPositions.push([x, y, shipLen, dir]);
        for (let i = x; i < x + shipLen; i++) {
          _board[i][y] = _ships.length - 1; // Indicate position on board occupied by ship by labelling with ship number
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
    return false; // If starting column/row too large, don't place the ship
  }
  
  // Place a ship randomly
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

  // Attack a square at coordinates x, y
  const receiveAttack = function(x, y) {
    // There cannot be a ship with number >= _boardSize, so can use numbers >= _boardSize to identify hit squares
    if (_board[x][y] === undefined) { // Unhit empty square
      _board[x][y] = _boardSize; // Make it >= _boardSize to indicate that it has been hit
      return -1;
    } else if (_board[x][y] < _boardSize) { // Unhit ship square
      const shipNo = _board[x][y];
      _board[x][y] += _boardSize; // Make it >= _boardSize to indicate that it has been hit
      if (_ships[shipNo].hit()) {
        return _shipPositions[shipNo]; // return ship positions if ship is sunk
      } else return 0; // return 0 if hit ship not sunk
    } else return -2; // Square already hit
  }

  // Check if all ships on board are sunk
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


// Import all images with their filenames as keys using Webpack's require.context

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(__webpack_require__("./src/img sync \\.(png%7Cjpe?g%7Csvg)$"));

const displayControl = (() => {

  // Utility function to create divs with classes
  const div = function(...className) {
    const div = document.createElement('div');
    div.classList.add(...className);
    return div;
  }

  const _setGameMessage = function(text) {
    document.querySelector('.game-message').textContent = text;
  }

  // Set up skeleton of site, i.e header, footer, and main element
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

  // Clear main element, for transitioning game states
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

  // Screen to place ships
  const placeShipSetup = function(ships) {
    const placeShip = div('place-ship');
    const gameMessage = div('game-message');
    gameMessage.textContent = 'Drag and drop your ships to place them on your board';
    const chooseShip = div('choose-ship');

    const toggleDir = document.createElement('button');
    toggleDir.textContent = 'Toggle Direction';

    // Allow players to toggle ships horizontally/vertically to place them
    toggleDir.addEventListener('click', toggleDirection);

    function toggleDirection() {
      const allShips = document.querySelectorAll('img[draggable=true]'); // Don't toggle those that are already placed (non-draggable)
      allShips.forEach(s => {
        const shipDir = s.getAttribute('data-dir');
        const newShipDir = (shipDir === 'h') ? 'v' : 'h';
        const shipLen = parseInt(s.getAttribute('data-len'));
        s.src = images[`ship${shipLen}${newShipDir}.svg`]; // Replace image with toggled direction
        s.setAttribute('data-dir', newShipDir);
      })
    }

    chooseShip.appendChild(toggleDir);
    
    // Place all ship images
    for (let i = 0; i < ships.length; i++) {
      const ship = document.createElement('img');
      ship.src = images[`ship${ships[i]}h.svg`];
      ship.id = `ship${i}`;
      ship.setAttribute('data-len', ships[i]);
      ship.setAttribute('data-dir', 'h');
      ship.draggable = true;
      chooseShip.appendChild(ship);
    }

    placeShip.appendChild(gameMessage);
    placeShip.appendChild(chooseShip);
    placeShip.appendChild(_createGameboard(10));

    document.querySelector('main').appendChild(placeShip);
  }

  // Check whether all ships have been placed
  const allShipsPlaced = function() {
    return document.querySelectorAll('img[data-len]:not(.hide)').length === 0;
  }

  // Screen for actual game
  const gameSetup = function(len, leftName, rightName) {
    const game = div('game');

    const gameMessage = div('game-message');
    gameMessage.textContent = 'Start attacking!'; // Initial game message

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

  // Create DOM gameboard
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
      square.style.gridColumn = `${x + 1} / span 1`; // Fix grid positions so that ship images can be overlapped with squares
      square.style.gridRow = `${y + 1} / span 1`;
      newGameboard.appendChild(square);
    }

    return newGameboard;
  }

  // Insert ship image onto gameboard. Images overlap with squares as they all have gridColumn and gridRow specified
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
    img.style.zIndex = '-1'; // Set ship images to be behind board
    document.querySelector(gameboardSelector).appendChild(img);
  }

  // Add relevant classes to attacked squares and set game message accordingly
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
      e.classList.add('active-board'); // Add hover effect if event listeners are active
    });
    else squares.forEach(e => { // Remove event listeners if disable = true
      e.removeEventListener('click', func);
      e.classList.remove('active-board')
    });
  }

  // Add play again button and set appropriate message when someone wins
  const win = function(playerName) {
    _setGameMessage(`${playerName} wins!`);

    const restart = document.createElement('button');
    restart.textContent = 'Play Again';
    document.querySelector('.midsection').append(restart);
  }

  return { basicSetup, startSetup, placeShipSetup, gameSetup, attack, toggleBoard, win, clearMain, insertShip, allShipsPlaced };

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
  const gameboardSelectors = ['.left .gameboard', '.right .gameboard'] // For left and right gameboards
  let players;
  const boardLen = 10; // Length of gameboards
  const shipLengths = [2, 2, 3, 3, 4, 5]; // Lengths of ships that can be placed on board
  let _currPlayer = 0; // 0 = left player, 1 = right player

  const createPlayers = function(name1, name2) {
    players = [(0,_Player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(name1), (0,_Player_js__WEBPACK_IMPORTED_MODULE_1__.Player)(name2)];
  }

  // Utility function to insert all ship images to either the left or right gameboard
  const _insertAllShips = function(gameboard) {
    if (gameboard === 'left') gameboards[0].getShipPositions().forEach(params => _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.insertShip(gameboardSelectors[0],...params));
    else gameboards[1].getShipPositions().forEach(params => _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.insertShip(gameboardSelectors[1],...params));
  }

  // Current player attacks enemy board
  const _attack = function() {
    const id = this.getAttribute('data-id').substring(1);
    const enemyPlayer = (_currPlayer + 1) % 2;
    const x = id % boardLen;
    const y = (id - x) / boardLen;
    let attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    if (attackResult === -1) { // Valid attack that missed
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id);
    } else if (attackResult === 0) { // Valid attack that hit a ship (but did not sink it)
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true);
    } else if (typeof attackResult === 'object') { // Valid attack that sunk a ship
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], id, true, true);
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.insertShip(gameboardSelectors[enemyPlayer],...attackResult);
    }
    // Check if all ships on enemy board are sunk. If so, trigger win
    if (gameboards[enemyPlayer].allSunk()) _win();
    else if (attackResult !== -2) _changeTurn(); // receiveAttack returns -2 if attack on square was invalid. If so, do nothing
  }

  // Current player randomly attacks the enemy board
  const _randomAttack = () => {
    const enemyPlayer = (_currPlayer + 1) % 2;
    let attackResult = -2;
    let x;
    let y;
    while (attackResult === -2) { // receiveAttack returns -2 if attack on square was invalid
      x = Math.floor(Math.random()*boardLen);
      y = Math.floor(Math.random()*boardLen);
      attackResult = gameboards[enemyPlayer].receiveAttack(x, y);
    }
    if (attackResult === -1) { // Valid attack that missed
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*boardLen + x);
    } else if (attackResult === 0) { // Valid attack that hit a ship (but did not sink it)
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*boardLen + x, true);
    } else if (typeof attackResult === 'object') { // Valid attack that sunk a ship
      _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.attack(players[_currPlayer].getName(), gameboardSelectors[enemyPlayer], y*boardLen + x, true, true);
    }
    // Check if all ships on enemy board are sunk. If so, trigger win, otherwise change turn (attack ensured to be valid)
    if (gameboards[enemyPlayer].allSunk()) _win();
    else _changeTurn();
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
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.toggleBoard(gameboardSelectors[1], _attack, true); // Remove event selectors from board
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.win(players[_currPlayer].getName()); // Trigger win display
    document.querySelector('.midsection button').addEventListener("click", _placeShipSetup); // Add event listener to restart button to return to place ship window
  }

  // Do initial setup of the whole game
  const startSetup = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.clearMain();
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.startSetup();

    // Get name and start game
    document.querySelector('.start button').addEventListener('click', enter);

    // Make it work on Enter keyboard key also
    document.querySelector('.start input').addEventListener("keydown", e => {
      if (e.key === "Enter") enter();
    });

    // Do input validation. If OK, create Player with input value and move to place ship window
    function enter() {
      const nameInput = document.getElementById('name-input');
      if (nameInput.checkValidity()) {
        createPlayers(nameInput.value, 'Computer');
        _placeShipSetup();
      } else {
        nameInput.setCustomValidity('Please enter a name.');
        nameInput.reportValidity();
      }
    }
  }

  // Setup for place ship window
  const _placeShipSetup = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.clearMain();
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.placeShipSetup(shipLengths);
    gameboards = [(0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(boardLen), (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(boardLen)]; // (Re-)initialize gameboards here

    // Set up drag and drop
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
      e.target.classList.add('drag-over'); // Hover effect
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
      
      const id = e.dataTransfer.getData('text/plain');
      const draggable = document.getElementById(id);
      const shipLen = parseInt(draggable.getAttribute('data-len'));
      const dir = draggable.getAttribute('data-dir');
      
      e.target.classList.remove('drag-over');

      if (((dir === 'h') && (x <= boardLen - shipLen)) || ((dir === 'v') && (y <= boardLen - shipLen))) { // If start square isn't too large
        if (gameboards[0].placeShip(x, y, shipLen, dir)) { // If placeShip succeeds
          _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.insertShip('.gameboard', x, y, shipLen, dir); // Insert ship image accordingly
          draggable.classList.add('hide'); // Remove draggable ship from board
        }
      }

      if (_displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.allShipsPlaced()) _startGame(); // Once all ships have been placed, start the game
    }
  }

  // Starts the game
  const _startGame = function() {
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.clearMain();
    _displayControl_js__WEBPACK_IMPORTED_MODULE_0__.displayControl.gameSetup(boardLen, players[0].getName(), players[1].getName());

    // Place computer ships randomly
    for (let shipLen of shipLengths) {
      gameboards[1].placeShipRandom(shipLen);
    }

    // Insert all ship images for player (left) gameboard
    _insertAllShips('left');
    turnSetup(); // Player has initial turn
  }
  
  return { startSetup };
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



_gameControl_js__WEBPACK_IMPORTED_MODULE_0__.gameControl.startSetup();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUMxQjs7QUFFckIsbUVBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2ltZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9FbGVjdHJvbGl6ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvVGFycmdldFJlZ3VsYXItV0VPei5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zZWEtYmx1ZTogIzAwQTFFMDtcXG4gIC0tYm9hcmQtbGVuZ3RoOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRWxlY3Ryb2xpemUnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGFycmdldCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYS1ibHVlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBmb250LWZhbWlseTogJ1RhcnJnZXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdhbWUtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdFbGVjdHJvbGl6ZScsIHNhbnMtc2VyaWY7ICBcXG59XFxuXFxuLyogU3RhcnQgKi9cXG5cXG4uc3RhcnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRWxlY3Ryb2xpemUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc3RhcnQgLm5hbWUtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc3RhcnQgaW5wdXQge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uc3RhcnQgaW5wdXQ6aG92ZXIsIC5zdGFydCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxLjVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnRWxlY3Ryb2xpemUnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtc2VhZ3JlZW47XFxuICBvdXRsaW5lOiAxLjVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogUGxhY2UgU2hpcCAqL1xcblxcbi5wbGFjZS1zaGlwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLXNoaXAgLmdhbWUtbWVzc2FnZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4uY2hvb3NlLXNoaXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCByZXBlYXQoMywgMTYwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTYwcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNob29zZS1zaGlwIGJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uY2hvb3NlLXNoaXAgW2RhdGEtZGlyID0gJ2gnXSB7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5jaG9vc2Utc2hpcCBbZGF0YS1kaXIgPSAndiddIHtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4vKiBHYW1lICovXFxuXFxuLmdhbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdhbWUtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHggMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wbGF5ZXItbmFtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ucGxheWVyLXNwYWNlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtbGVuZ3RoKSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWxlbmd0aCksIDFmcik7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IC0xcHggMHB4IDBweCAtMXB4O1xcbn1cXG5cXG4uc3F1YXJlLmFjdGl2ZS1ib2FyZDpob3Zlcjpub3QoLmF0dGFja2VkKSwgLnNxdWFyZS5kcmFnLW92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnNxdWFyZS5hdHRhY2tlZC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3F1YXJlLmF0dGFja2VkIHtcXG4gIGJhY2tncm91bmQ6XFxuICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCBcXG4gICB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGJsYWNrIGNhbGMoNTAlIC0gMXB4KSwgXFxuICAgYmxhY2sgY2FsYyg1MCUgKyAxcHgpLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpLFxcbiAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0ICwgXFxuICAgdHJhbnNwYXJlbnQgY2FsYyg1MCUgLSAxcHgpLCBibGFjayBjYWxjKDUwJSAtIDFweCksIFxcbiAgIGJsYWNrIGNhbGMoNTAlICsgMXB4KSwgdHJhbnNwYXJlbnQgY2FsYyg1MCUgKyAxcHgpKSxcXG4gIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNENBQTJDO0FBQzdDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywwQkFBMEI7QUFDNUI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWix1REFBdUQ7RUFDdkQsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7Ozs7Ozs7YUFPVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2VhLWJsdWU6ICMwMEExRTA7XFxuICAtLWJvYXJkLWxlbmd0aDogMDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL0VsZWN0cm9saXplLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdUYXJyZ2V0JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL1RhcnJnZXRSZWd1bGFyLVdFT3oub3RmJyk7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYS1ibHVlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBmb250LWZhbWlseTogJ1RhcnJnZXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdhbWUtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdFbGVjdHJvbGl6ZScsIHNhbnMtc2VyaWY7ICBcXG59XFxuXFxuLyogU3RhcnQgKi9cXG5cXG4uc3RhcnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRWxlY3Ryb2xpemUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc3RhcnQgLm5hbWUtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc3RhcnQgaW5wdXQge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uc3RhcnQgaW5wdXQ6aG92ZXIsIC5zdGFydCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxLjVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxNnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnRWxlY3Ryb2xpemUnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtc2VhZ3JlZW47XFxuICBvdXRsaW5lOiAxLjVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogUGxhY2UgU2hpcCAqL1xcblxcbi5wbGFjZS1zaGlwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLXNoaXAgLmdhbWUtbWVzc2FnZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4uY2hvb3NlLXNoaXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCByZXBlYXQoMywgMTYwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTYwcHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNob29zZS1zaGlwIGJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uY2hvb3NlLXNoaXAgW2RhdGEtZGlyID0gJ2gnXSB7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5jaG9vc2Utc2hpcCBbZGF0YS1kaXIgPSAndiddIHtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4vKiBHYW1lICovXFxuXFxuLmdhbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdhbWUtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzAwcHggMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtbWVzc2FnZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5wbGF5ZXItbmFtZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ucGxheWVyLXNwYWNlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtbGVuZ3RoKSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWJvYXJkLWxlbmd0aCksIDFmcik7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IC0xcHggMHB4IDBweCAtMXB4O1xcbn1cXG5cXG4uc3F1YXJlLmFjdGl2ZS1ib2FyZDpob3Zlcjpub3QoLmF0dGFja2VkKSwgLnNxdWFyZS5kcmFnLW92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnNxdWFyZS5hdHRhY2tlZC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc3F1YXJlLmF0dGFja2VkIHtcXG4gIGJhY2tncm91bmQ6XFxuICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCBcXG4gICB0cmFuc3BhcmVudCBjYWxjKDUwJSAtIDFweCksIGJsYWNrIGNhbGMoNTAlIC0gMXB4KSwgXFxuICAgYmxhY2sgY2FsYyg1MCUgKyAxcHgpLCB0cmFuc3BhcmVudCBjYWxjKDUwJSArIDFweCkpLFxcbiAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0ICwgXFxuICAgdHJhbnNwYXJlbnQgY2FsYyg1MCUgLSAxcHgpLCBibGFjayBjYWxjKDUwJSAtIDFweCksIFxcbiAgIGJsYWNrIGNhbGMoNTAlICsgMXB4KSwgdHJhbnNwYXJlbnQgY2FsYyg1MCUgKyAxcHgpKSxcXG4gIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAuanMnO1xuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG5cbmNvbnN0IEdhbWVib2FyZCA9IChsZW4pID0+IHtcbiAgbGV0IF9ib2FyZCA9IG5ldyBBcnJheShsZW4pOyAvLyBBbGwgcG9zaXRpb25zIG9uIGJvYXJkXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBfYm9hcmRbaV0gPSBuZXcgQXJyYXkobGVuKVxuICB9XG5cbiAgbGV0IF9zaGlwcyA9IFtdOyAvLyBBbGwgU2hpcCBvYmplY3RzIG9uIGJvYXJkXG4gIGxldCBfc2hpcFBvc2l0aW9ucyA9IFtdOyAvLyBTdGFydGluZyB4LCB5LCBzaGlwIGxlbmd0aCwgYW5kIHNoaXAgZGlyZWN0aW9uIHZhbHVlcyBmb3IgZWFjaCBzaGlwXG4gIGNvbnN0IF9ib2FyZFNpemUgPSBsZW4qbGVuOyBcblxuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbjtcblxuICAvLyBDcmVhdGVzIGEgU2hpcCBvYmplY3QgYW5kIHBsYWNlcyBpdCBvbiB0aGUgYm9hcmRcbiAgLy8geCwgeSBhcmUgY29vcmRpbmF0ZXMgb2YgdGhlIHN0YXJ0aW5nIHNxdWFyZVxuICAvLyBzaGlwTGVuIGlzIHRoZSBzaGlwIGxlbmd0aCwgYW5kIGRpciBpcyB0aGUgc2hpcCBkaXJlY3Rpb25cbiAgY29uc3QgcGxhY2VTaGlwID0gZnVuY3Rpb24oeCwgeSwgc2hpcExlbiwgZGlyKSB7XG4gICAgaWYgKGRpciA9PT0gJ2gnKSB7IC8vIEhvcml6b250YWwgc2hpcFxuICAgICAgaWYgKHggPD0gbGVuIC0gc2hpcExlbikgeyAvLyBTdGFydGluZyBjb2x1bW4gbmVlZHMgdG8gYmUgYXQgbW9zdCBib2FyZCBsZW5ndGggbGVzcyBzaGlwIGxlbmd0aFxuICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwTGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoX2JvYXJkW2ldW3ldID49IDApIHJldHVybiBmYWxzZTsgLy8gRG9uJ3QgcGxhY2Ugc2hpcCBpZiBhbnkgc3F1YXJlIGlzIGFscmVhZHkgb2NjdXBpZWRcbiAgICAgICAgfSAvLyBPdGhlcndpc2UgY3JlYXRlIHNoaXAgYW5kIHJlY29yZCBpbiB0aGUgcmVsZXZhbnQgYXJyYXlzXG4gICAgICAgIF9zaGlwcy5wdXNoKFNoaXAoc2hpcExlbikpO1xuICAgICAgICBfc2hpcFBvc2l0aW9ucy5wdXNoKFt4LCB5LCBzaGlwTGVuLCBkaXJdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgX2JvYXJkW2ldW3ldID0gX3NoaXBzLmxlbmd0aCAtIDE7IC8vIEluZGljYXRlIHBvc2l0aW9uIG9uIGJvYXJkIG9jY3VwaWVkIGJ5IHNoaXAgYnkgbGFiZWxsaW5nIHdpdGggc2hpcCBudW1iZXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpciA9PT0gJ3YnKSB7XG4gICAgICBpZiAoeSA8PSBsZW4gLSBzaGlwTGVuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXBMZW47IGkrKykge1xuICAgICAgICAgIGlmIChfYm9hcmRbeF1baV0gPj0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF9zaGlwcy5wdXNoKFNoaXAoc2hpcExlbikpO1xuICAgICAgICBfc2hpcFBvc2l0aW9ucy5wdXNoKFt4LCB5LCBzaGlwTGVuLCBkaXJdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcExlbjsgaSsrKSB7XG4gICAgICAgICAgX2JvYXJkW3hdW2ldID0gX3NoaXBzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTsgLy8gSWYgc3RhcnRpbmcgY29sdW1uL3JvdyB0b28gbGFyZ2UsIGRvbid0IHBsYWNlIHRoZSBzaGlwXG4gIH1cbiAgXG4gIC8vIFBsYWNlIGEgc2hpcCByYW5kb21seVxuICBjb25zdCBwbGFjZVNoaXBSYW5kb20gPSBmdW5jdGlvbihzaGlwTGVuKSB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFsnaCcsICd2J107XG4gICAgbGV0IGRpcjtcbiAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG5cbiAgICB3aGlsZShwbGFjZWQgPT09IGZhbHNlKSB7XG4gICAgICBkaXIgPSBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgICAgIGlmIChkaXIgPT09ICdoJykge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxlbiAtIHNoaXBMZW4pKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChsZW4gLSBzaGlwTGVuKSk7XG4gICAgICB9XG4gICAgICBwbGFjZWQgPSBwbGFjZVNoaXAoeCwgeSwgc2hpcExlbiwgZGlyKTtcbiAgICB9XG4gIH1cblxuICAvLyBBdHRhY2sgYSBzcXVhcmUgYXQgY29vcmRpbmF0ZXMgeCwgeVxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIC8vIFRoZXJlIGNhbm5vdCBiZSBhIHNoaXAgd2l0aCBudW1iZXIgPj0gX2JvYXJkU2l6ZSwgc28gY2FuIHVzZSBudW1iZXJzID49IF9ib2FyZFNpemUgdG8gaWRlbnRpZnkgaGl0IHNxdWFyZXNcbiAgICBpZiAoX2JvYXJkW3hdW3ldID09PSB1bmRlZmluZWQpIHsgLy8gVW5oaXQgZW1wdHkgc3F1YXJlXG4gICAgICBfYm9hcmRbeF1beV0gPSBfYm9hcmRTaXplOyAvLyBNYWtlIGl0ID49IF9ib2FyZFNpemUgdG8gaW5kaWNhdGUgdGhhdCBpdCBoYXMgYmVlbiBoaXRcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKF9ib2FyZFt4XVt5XSA8IF9ib2FyZFNpemUpIHsgLy8gVW5oaXQgc2hpcCBzcXVhcmVcbiAgICAgIGNvbnN0IHNoaXBObyA9IF9ib2FyZFt4XVt5XTtcbiAgICAgIF9ib2FyZFt4XVt5XSArPSBfYm9hcmRTaXplOyAvLyBNYWtlIGl0ID49IF9ib2FyZFNpemUgdG8gaW5kaWNhdGUgdGhhdCBpdCBoYXMgYmVlbiBoaXRcbiAgICAgIGlmIChfc2hpcHNbc2hpcE5vXS5oaXQoKSkge1xuICAgICAgICByZXR1cm4gX3NoaXBQb3NpdGlvbnNbc2hpcE5vXTsgLy8gcmV0dXJuIHNoaXAgcG9zaXRpb25zIGlmIHNoaXAgaXMgc3Vua1xuICAgICAgfSBlbHNlIHJldHVybiAwOyAvLyByZXR1cm4gMCBpZiBoaXQgc2hpcCBub3Qgc3Vua1xuICAgIH0gZWxzZSByZXR1cm4gLTI7IC8vIFNxdWFyZSBhbHJlYWR5IGhpdFxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHNoaXBzIG9uIGJvYXJkIGFyZSBzdW5rXG4gIGNvbnN0IGFsbFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIV9zaGlwcykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBfc2hpcHMucmVkdWNlKChhLCBiKSA9PiBhICYmIGIuaXNTdW5rKCksIHRydWUpO1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcFBvc2l0aW9ucyA9ICgpID0+IF9zaGlwUG9zaXRpb25zO1xuXG4gIHJldHVybiB7IHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgZ2V0TGVuZ3RoLCBwbGFjZVNoaXBSYW5kb20sIGdldFNoaXBQb3NpdGlvbnMgfTtcbn0iLCJleHBvcnQgeyBQbGF5ZXIgfTtcblxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgcmV0dXJuIHsgZ2V0TmFtZSB9O1xufSIsImV4cG9ydCB7IFNoaXAgfTtcblxuY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgbGV0IF9oaXRDb3VudCA9IDA7XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBfaGl0Q291bnQrKztcbiAgICBpZiAoaXNTdW5rKCkpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9oaXRDb3VudCA+PSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGhpdCwgaXNTdW5rIH07XG59IiwiZXhwb3J0IHsgZGlzcGxheUNvbnRyb2wgfTtcblxuLy8gSW1wb3J0IGFsbCBpbWFnZXMgd2l0aCB0aGVpciBmaWxlbmFtZXMgYXMga2V5cyB1c2luZyBXZWJwYWNrJ3MgcmVxdWlyZS5jb250ZXh0XG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gIGxldCBpbWFnZXMgPSB7fTtcbiAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn1cblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9pbWcvJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbCA9ICgoKSA9PiB7XG5cbiAgLy8gVXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgZGl2cyB3aXRoIGNsYXNzZXNcbiAgY29uc3QgZGl2ID0gZnVuY3Rpb24oLi4uY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgY29uc3QgX3NldEdhbWVNZXNzYWdlID0gZnVuY3Rpb24odGV4dCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cblxuICAvLyBTZXQgdXAgc2tlbGV0b24gb2Ygc2l0ZSwgaS5lIGhlYWRlciwgZm9vdGVyLCBhbmQgbWFpbiBlbGVtZW50XG4gIGNvbnN0IGJhc2ljU2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkaXYoJ2hlYWRlcicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwJztcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZGl2KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBIb3VuZG9vbSc7XG4gICAgXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIH1cblxuICAvLyBDbGVhciBtYWluIGVsZW1lbnQsIGZvciB0cmFuc2l0aW9uaW5nIGdhbWUgc3RhdGVzXG4gIGNvbnN0IGNsZWFyTWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW5Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmIChtYWluTm9kZSkgbWFpbk5vZGUucmVtb3ZlKCk7XG4gIH1cblxuICAvLyBTdGFydCBzY3JlZW4gdG8gYXNrIGZvciBuYW1lXG4gIGNvbnN0IHN0YXJ0U2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdGFydCA9IGRpdignc3RhcnQnKTtcbiAgICBcbiAgICAvLyBOYW1lIGZpZWxkXG4gICAgY29uc3QgbmFtZUZvcm0gPSBkaXYoJ25hbWUtZm9ybScpO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUtaW5wdXQnKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUGxlYXNlIGVudGVyIHlvdXIgcGxheWVyIG5hbWU6JztcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xuICAgIG5hbWVJbnB1dC5tYXhMZW5ndGggPSAnMTInO1xuICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICAvLyBTdWJtaXQgYnV0dG9uXG4gICAgY29uc3QgZW50ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbnRlckJ1dHRvbi50ZXh0Q29udGVudCA9ICdFbnRlcic7XG5cbiAgICBzdGFydC5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XG4gICAgc3RhcnQuYXBwZW5kQ2hpbGQoZW50ZXJCdXR0b24pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHN0YXJ0KTtcbiAgfVxuXG4gIC8vIFNjcmVlbiB0byBwbGFjZSBzaGlwc1xuICBjb25zdCBwbGFjZVNoaXBTZXR1cCA9IGZ1bmN0aW9uKHNoaXBzKSB7XG4gICAgY29uc3QgcGxhY2VTaGlwID0gZGl2KCdwbGFjZS1zaGlwJyk7XG4gICAgY29uc3QgZ2FtZU1lc3NhZ2UgPSBkaXYoJ2dhbWUtbWVzc2FnZScpO1xuICAgIGdhbWVNZXNzYWdlLnRleHRDb250ZW50ID0gJ0RyYWcgYW5kIGRyb3AgeW91ciBzaGlwcyB0byBwbGFjZSB0aGVtIG9uIHlvdXIgYm9hcmQnO1xuICAgIGNvbnN0IGNob29zZVNoaXAgPSBkaXYoJ2Nob29zZS1zaGlwJyk7XG5cbiAgICBjb25zdCB0b2dnbGVEaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2dnbGVEaXIudGV4dENvbnRlbnQgPSAnVG9nZ2xlIERpcmVjdGlvbic7XG5cbiAgICAvLyBBbGxvdyBwbGF5ZXJzIHRvIHRvZ2dsZSBzaGlwcyBob3Jpem9udGFsbHkvdmVydGljYWxseSB0byBwbGFjZSB0aGVtXG4gICAgdG9nZ2xlRGlyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRGlyZWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICAgIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RyYWdnYWJsZT10cnVlXScpOyAvLyBEb24ndCB0b2dnbGUgdGhvc2UgdGhhdCBhcmUgYWxyZWFkeSBwbGFjZWQgKG5vbi1kcmFnZ2FibGUpXG4gICAgICBhbGxTaGlwcy5mb3JFYWNoKHMgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRGlyID0gcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlyJyk7XG4gICAgICAgIGNvbnN0IG5ld1NoaXBEaXIgPSAoc2hpcERpciA9PT0gJ2gnKSA/ICd2JyA6ICdoJztcbiAgICAgICAgY29uc3Qgc2hpcExlbiA9IHBhcnNlSW50KHMuZ2V0QXR0cmlidXRlKCdkYXRhLWxlbicpKTtcbiAgICAgICAgcy5zcmMgPSBpbWFnZXNbYHNoaXAke3NoaXBMZW59JHtuZXdTaGlwRGlyfS5zdmdgXTsgLy8gUmVwbGFjZSBpbWFnZSB3aXRoIHRvZ2dsZWQgZGlyZWN0aW9uXG4gICAgICAgIHMuc2V0QXR0cmlidXRlKCdkYXRhLWRpcicsIG5ld1NoaXBEaXIpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBjaG9vc2VTaGlwLmFwcGVuZENoaWxkKHRvZ2dsZURpcik7XG4gICAgXG4gICAgLy8gUGxhY2UgYWxsIHNoaXAgaW1hZ2VzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgc2hpcC5zcmMgPSBpbWFnZXNbYHNoaXAke3NoaXBzW2ldfWguc3ZnYF07XG4gICAgICBzaGlwLmlkID0gYHNoaXAke2l9YDtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkYXRhLWxlbicsIHNoaXBzW2ldKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkYXRhLWRpcicsICdoJyk7XG4gICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICBjaG9vc2VTaGlwLmFwcGVuZENoaWxkKHNoaXApO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcC5hcHBlbmRDaGlsZChnYW1lTWVzc2FnZSk7XG4gICAgcGxhY2VTaGlwLmFwcGVuZENoaWxkKGNob29zZVNoaXApO1xuICAgIHBsYWNlU2hpcC5hcHBlbmRDaGlsZChfY3JlYXRlR2FtZWJvYXJkKDEwKSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQocGxhY2VTaGlwKTtcbiAgfVxuXG4gIC8vIENoZWNrIHdoZXRoZXIgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgY29uc3QgYWxsU2hpcHNQbGFjZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtbGVuXTpub3QoLmhpZGUpJykubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgLy8gU2NyZWVuIGZvciBhY3R1YWwgZ2FtZVxuICBjb25zdCBnYW1lU2V0dXAgPSBmdW5jdGlvbihsZW4sIGxlZnROYW1lLCByaWdodE5hbWUpIHtcbiAgICBjb25zdCBnYW1lID0gZGl2KCdnYW1lJyk7XG5cbiAgICBjb25zdCBnYW1lTWVzc2FnZSA9IGRpdignZ2FtZS1tZXNzYWdlJyk7XG4gICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSAnU3RhcnQgYXR0YWNraW5nISc7IC8vIEluaXRpYWwgZ2FtZSBtZXNzYWdlXG5cbiAgICBjb25zdCBnYW1lRGlzcGxheSA9IGRpdignZ2FtZS1kaXNwbGF5Jyk7XG5cbiAgICBjb25zdCBwbGF5ZXJTcGFjZUxlZnQgPSBkaXYoJ3BsYXllci1zcGFjZScsICdsZWZ0Jyk7XG4gICAgY29uc3QgbWlkc2VjdGlvbiA9IGRpdignbWlkc2VjdGlvbicpO1xuICAgIGNvbnN0IHBsYXllclNwYWNlUmlnaHQgPSBkaXYoJ3BsYXllci1zcGFjZScsICdyaWdodCcpO1xuXG4gICAgY29uc3QgcGxheWVyTmFtZUxlZnQgPSBkaXYoJ3BsYXllci1uYW1lJyk7XG4gICAgcGxheWVyTmFtZUxlZnQudGV4dENvbnRlbnQgPSBsZWZ0TmFtZTtcbiAgICBwbGF5ZXJTcGFjZUxlZnQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZUxlZnQpO1xuICAgIHBsYXllclNwYWNlTGVmdC5hcHBlbmRDaGlsZChfY3JlYXRlR2FtZWJvYXJkKGxlbikpO1xuXG4gICAgY29uc3QgcGxheWVyTmFtZVJpZ2h0ID0gZGl2KCdwbGF5ZXItbmFtZScpO1xuICAgIHBsYXllck5hbWVSaWdodC50ZXh0Q29udGVudCA9IHJpZ2h0TmFtZTtcbiAgICBwbGF5ZXJTcGFjZVJpZ2h0LmFwcGVuZENoaWxkKHBsYXllck5hbWVSaWdodCk7XG4gICAgcGxheWVyU3BhY2VSaWdodC5hcHBlbmRDaGlsZChfY3JlYXRlR2FtZWJvYXJkKGxlbikpO1xuXG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQocGxheWVyU3BhY2VMZWZ0KTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChtaWRzZWN0aW9uKTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChwbGF5ZXJTcGFjZVJpZ2h0KTtcblxuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZU1lc3NhZ2UpO1xuICAgIGdhbWUuYXBwZW5kQ2hpbGQoZ2FtZURpc3BsYXkpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGdhbWUpO1xuXG4gIH1cblxuICAvLyBDcmVhdGUgRE9NIGdhbWVib2FyZFxuICBjb25zdCBfY3JlYXRlR2FtZWJvYXJkID0gZnVuY3Rpb24obGVuKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWJvYXJkLWxlbmd0aCcsIGxlbik7XG5cbiAgICBjb25zdCBuZXdHYW1lYm9hcmQgPSBkaXYoJ2dhbWVib2FyZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gKiBsZW47IGkrKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZGl2KCdzcXVhcmUnKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgcyR7aX1gKTtcbiAgICAgIGNvbnN0IHggPSBpICUgbGVuO1xuICAgICAgY29uc3QgeSA9IChpIC0geCkgLyBsZW47XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBgeCR7eH1gKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIGB5JHt5fWApO1xuICAgICAgc3F1YXJlLnN0eWxlLmdyaWRDb2x1bW4gPSBgJHt4ICsgMX0gLyBzcGFuIDFgOyAvLyBGaXggZ3JpZCBwb3NpdGlvbnMgc28gdGhhdCBzaGlwIGltYWdlcyBjYW4gYmUgb3ZlcmxhcHBlZCB3aXRoIHNxdWFyZXNcbiAgICAgIHNxdWFyZS5zdHlsZS5ncmlkUm93ID0gYCR7eSArIDF9IC8gc3BhbiAxYDtcbiAgICAgIG5ld0dhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdHYW1lYm9hcmQ7XG4gIH1cblxuICAvLyBJbnNlcnQgc2hpcCBpbWFnZSBvbnRvIGdhbWVib2FyZC4gSW1hZ2VzIG92ZXJsYXAgd2l0aCBzcXVhcmVzIGFzIHRoZXkgYWxsIGhhdmUgZ3JpZENvbHVtbiBhbmQgZ3JpZFJvdyBzcGVjaWZpZWRcbiAgY29uc3QgaW5zZXJ0U2hpcCA9IGZ1bmN0aW9uKGdhbWVib2FyZFNlbGVjdG9yLCB4LCB5LCBsZW4sIGRpcikge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBpbWFnZXNbYHNoaXAke2xlbn0ke2Rpcn0uc3ZnYF07XG4gICAgaWYgKGRpciA9PT0gJ2gnKSB7XG4gICAgICBpbWcuc3R5bGUuZ3JpZENvbHVtbiA9IGAke3ggKyAxfSAvIHNwYW4gJHtsZW59YDtcbiAgICAgIGltZy5zdHlsZS5ncmlkUm93ID0gYCR7eSArIDF9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1nLnN0eWxlLmdyaWRDb2x1bW4gPSBgJHt4ICsgMX1gO1xuICAgICAgaW1nLnN0eWxlLmdyaWRSb3cgPSBgJHt5ICsgMX0gLyBzcGFuICR7bGVufWA7ICBcbiAgICB9XG4gICAgaW1nLnN0eWxlLnpJbmRleCA9ICctMSc7IC8vIFNldCBzaGlwIGltYWdlcyB0byBiZSBiZWhpbmQgYm9hcmRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGdhbWVib2FyZFNlbGVjdG9yKS5hcHBlbmRDaGlsZChpbWcpO1xuICB9XG5cbiAgLy8gQWRkIHJlbGV2YW50IGNsYXNzZXMgdG8gYXR0YWNrZWQgc3F1YXJlcyBhbmQgc2V0IGdhbWUgbWVzc2FnZSBhY2NvcmRpbmdseVxuICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbihwbGF5ZXJOYW1lLCBib2FyZFNlbGVjdG9yLCBpLCBoaXQgPSBmYWxzZSwgc3VuayA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkU2VsZWN0b3IpO1xuICAgIGNvbnN0IHNxdWFyZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkID0gJ3Mke2l9J11gKVxuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIGlmIChzdW5rKSBfc2V0R2FtZU1lc3NhZ2UoYCR7cGxheWVyTmFtZX0gc2lua3MgYSBzaGlwIWApO1xuICAgICAgZWxzZSBfc2V0R2FtZU1lc3NhZ2UoYCR7cGxheWVyTmFtZX0gaGl0cyBhIHNoaXAhYCk7XG4gICAgfSBlbHNlICBfc2V0R2FtZU1lc3NhZ2UoYCR7cGxheWVyTmFtZX0gbWlzc2VzIWApO1xuICB9XG5cbiAgLy8gVG9nZ2xlIHdoZXRoZXIgYm9hcmQgaGFzIGV2ZW50IGxpc3RlbmVyc1xuICBjb25zdCB0b2dnbGVCb2FyZCA9IGZ1bmN0aW9uKGJvYXJkU2VsZWN0b3IsIGZ1bmMsIGRpc2FibGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZFNlbGVjdG9yKTtcbiAgICBjb25zdCBzcXVhcmVzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuXG4gICAgaWYgKCFkaXNhYmxlKSBzcXVhcmVzLmZvckVhY2goZSA9PiB7XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYylcbiAgICAgIGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWJvYXJkJyk7IC8vIEFkZCBob3ZlciBlZmZlY3QgaWYgZXZlbnQgbGlzdGVuZXJzIGFyZSBhY3RpdmVcbiAgICB9KTtcbiAgICBlbHNlIHNxdWFyZXMuZm9yRWFjaChlID0+IHsgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBpZiBkaXNhYmxlID0gdHJ1ZVxuICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtYm9hcmQnKVxuICAgIH0pO1xuICB9XG5cbiAgLy8gQWRkIHBsYXkgYWdhaW4gYnV0dG9uIGFuZCBzZXQgYXBwcm9wcmlhdGUgbWVzc2FnZSB3aGVuIHNvbWVvbmUgd2luc1xuICBjb25zdCB3aW4gPSBmdW5jdGlvbihwbGF5ZXJOYW1lKSB7XG4gICAgX3NldEdhbWVNZXNzYWdlKGAke3BsYXllck5hbWV9IHdpbnMhYCk7XG5cbiAgICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzdGFydC50ZXh0Q29udGVudCA9ICdQbGF5IEFnYWluJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkc2VjdGlvbicpLmFwcGVuZChyZXN0YXJ0KTtcbiAgfVxuXG4gIHJldHVybiB7IGJhc2ljU2V0dXAsIHN0YXJ0U2V0dXAsIHBsYWNlU2hpcFNldHVwLCBnYW1lU2V0dXAsIGF0dGFjaywgdG9nZ2xlQm9hcmQsIHdpbiwgY2xlYXJNYWluLCBpbnNlcnRTaGlwLCBhbGxTaGlwc1BsYWNlZCB9O1xuXG59KSgpOyIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sIH0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbC5qcyc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL0dhbWVib2FyZC5qcydcblxuZXhwb3J0IHsgZ2FtZUNvbnRyb2wgfTtcblxuY29uc3QgZ2FtZUNvbnRyb2wgPSAoKCkgPT4ge1xuXG4gIGxldCBnYW1lYm9hcmRzO1xuICBjb25zdCBnYW1lYm9hcmRTZWxlY3RvcnMgPSBbJy5sZWZ0IC5nYW1lYm9hcmQnLCAnLnJpZ2h0IC5nYW1lYm9hcmQnXSAvLyBGb3IgbGVmdCBhbmQgcmlnaHQgZ2FtZWJvYXJkc1xuICBsZXQgcGxheWVycztcbiAgY29uc3QgYm9hcmRMZW4gPSAxMDsgLy8gTGVuZ3RoIG9mIGdhbWVib2FyZHNcbiAgY29uc3Qgc2hpcExlbmd0aHMgPSBbMiwgMiwgMywgMywgNCwgNV07IC8vIExlbmd0aHMgb2Ygc2hpcHMgdGhhdCBjYW4gYmUgcGxhY2VkIG9uIGJvYXJkXG4gIGxldCBfY3VyclBsYXllciA9IDA7IC8vIDAgPSBsZWZ0IHBsYXllciwgMSA9IHJpZ2h0IHBsYXllclxuXG4gIGNvbnN0IGNyZWF0ZVBsYXllcnMgPSBmdW5jdGlvbihuYW1lMSwgbmFtZTIpIHtcbiAgICBwbGF5ZXJzID0gW1BsYXllcihuYW1lMSksIFBsYXllcihuYW1lMildO1xuICB9XG5cbiAgLy8gVXRpbGl0eSBmdW5jdGlvbiB0byBpbnNlcnQgYWxsIHNoaXAgaW1hZ2VzIHRvIGVpdGhlciB0aGUgbGVmdCBvciByaWdodCBnYW1lYm9hcmRcbiAgY29uc3QgX2luc2VydEFsbFNoaXBzID0gZnVuY3Rpb24oZ2FtZWJvYXJkKSB7XG4gICAgaWYgKGdhbWVib2FyZCA9PT0gJ2xlZnQnKSBnYW1lYm9hcmRzWzBdLmdldFNoaXBQb3NpdGlvbnMoKS5mb3JFYWNoKHBhcmFtcyA9PiBkaXNwbGF5Q29udHJvbC5pbnNlcnRTaGlwKGdhbWVib2FyZFNlbGVjdG9yc1swXSwuLi5wYXJhbXMpKTtcbiAgICBlbHNlIGdhbWVib2FyZHNbMV0uZ2V0U2hpcFBvc2l0aW9ucygpLmZvckVhY2gocGFyYW1zID0+IGRpc3BsYXlDb250cm9sLmluc2VydFNoaXAoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLC4uLnBhcmFtcykpO1xuICB9XG5cbiAgLy8gQ3VycmVudCBwbGF5ZXIgYXR0YWNrcyBlbmVteSBib2FyZFxuICBjb25zdCBfYXR0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLnN1YnN0cmluZygxKTtcbiAgICBjb25zdCBlbmVteVBsYXllciA9IChfY3VyclBsYXllciArIDEpICUgMjtcbiAgICBjb25zdCB4ID0gaWQgJSBib2FyZExlbjtcbiAgICBjb25zdCB5ID0gKGlkIC0geCkgLyBib2FyZExlbjtcbiAgICBsZXQgYXR0YWNrUmVzdWx0ID0gZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0ucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAtMSkgeyAvLyBWYWxpZCBhdHRhY2sgdGhhdCBtaXNzZWRcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIGlkKTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gMCkgeyAvLyBWYWxpZCBhdHRhY2sgdGhhdCBoaXQgYSBzaGlwIChidXQgZGlkIG5vdCBzaW5rIGl0KVxuICAgICAgZGlzcGxheUNvbnRyb2wuYXR0YWNrKHBsYXllcnNbX2N1cnJQbGF5ZXJdLmdldE5hbWUoKSwgZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwgaWQsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGF0dGFja1Jlc3VsdCA9PT0gJ29iamVjdCcpIHsgLy8gVmFsaWQgYXR0YWNrIHRoYXQgc3VuayBhIHNoaXBcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIGlkLCB0cnVlLCB0cnVlKTtcbiAgICAgIGRpc3BsYXlDb250cm9sLmluc2VydFNoaXAoZ2FtZWJvYXJkU2VsZWN0b3JzW2VuZW15UGxheWVyXSwuLi5hdHRhY2tSZXN1bHQpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgb24gZW5lbXkgYm9hcmQgYXJlIHN1bmsuIElmIHNvLCB0cmlnZ2VyIHdpblxuICAgIGlmIChnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5hbGxTdW5rKCkpIF93aW4oKTtcbiAgICBlbHNlIGlmIChhdHRhY2tSZXN1bHQgIT09IC0yKSBfY2hhbmdlVHVybigpOyAvLyByZWNlaXZlQXR0YWNrIHJldHVybnMgLTIgaWYgYXR0YWNrIG9uIHNxdWFyZSB3YXMgaW52YWxpZC4gSWYgc28sIGRvIG5vdGhpbmdcbiAgfVxuXG4gIC8vIEN1cnJlbnQgcGxheWVyIHJhbmRvbWx5IGF0dGFja3MgdGhlIGVuZW15IGJvYXJkXG4gIGNvbnN0IF9yYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5lbXlQbGF5ZXIgPSAoX2N1cnJQbGF5ZXIgKyAxKSAlIDI7XG4gICAgbGV0IGF0dGFja1Jlc3VsdCA9IC0yO1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIHdoaWxlIChhdHRhY2tSZXN1bHQgPT09IC0yKSB7IC8vIHJlY2VpdmVBdHRhY2sgcmV0dXJucyAtMiBpZiBhdHRhY2sgb24gc3F1YXJlIHdhcyBpbnZhbGlkXG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvYXJkTGVuKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm9hcmRMZW4pO1xuICAgICAgYXR0YWNrUmVzdWx0ID0gZ2FtZWJvYXJkc1tlbmVteVBsYXllcl0ucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gLTEpIHsgLy8gVmFsaWQgYXR0YWNrIHRoYXQgbWlzc2VkXG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2socGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpLCBnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCB5KmJvYXJkTGVuICsgeCk7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09IDApIHsgLy8gVmFsaWQgYXR0YWNrIHRoYXQgaGl0IGEgc2hpcCAoYnV0IGRpZCBub3Qgc2luayBpdClcbiAgICAgIGRpc3BsYXlDb250cm9sLmF0dGFjayhwbGF5ZXJzW19jdXJyUGxheWVyXS5nZXROYW1lKCksIGdhbWVib2FyZFNlbGVjdG9yc1tlbmVteVBsYXllcl0sIHkqYm9hcmRMZW4gKyB4LCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhdHRhY2tSZXN1bHQgPT09ICdvYmplY3QnKSB7IC8vIFZhbGlkIGF0dGFjayB0aGF0IHN1bmsgYSBzaGlwXG4gICAgICBkaXNwbGF5Q29udHJvbC5hdHRhY2socGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpLCBnYW1lYm9hcmRTZWxlY3RvcnNbZW5lbXlQbGF5ZXJdLCB5KmJvYXJkTGVuICsgeCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGFsbCBzaGlwcyBvbiBlbmVteSBib2FyZCBhcmUgc3Vuay4gSWYgc28sIHRyaWdnZXIgd2luLCBvdGhlcndpc2UgY2hhbmdlIHR1cm4gKGF0dGFjayBlbnN1cmVkIHRvIGJlIHZhbGlkKVxuICAgIGlmIChnYW1lYm9hcmRzW2VuZW15UGxheWVyXS5hbGxTdW5rKCkpIF93aW4oKTtcbiAgICBlbHNlIF9jaGFuZ2VUdXJuKCk7XG4gIH1cblxuICAvLyBEb2VzIHNldHVwIGZvciBwbGF5ZXIgYW5kIGNvbXB1dGVyIHR1cm5cbiAgY29uc3QgdHVyblNldHVwID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKF9jdXJyUGxheWVyID09PSAwKSBkaXNwbGF5Q29udHJvbC50b2dnbGVCb2FyZChnYW1lYm9hcmRTZWxlY3RvcnNbMV0sIF9hdHRhY2spOyAvLyBQbGF5ZXIgdHVybjogYWRkIGF0dGFjayBjbGljayBldmVudHNcbiAgICBlbHNlIHsgLy8gQ29tcHV0ZXIgdHVybjogcmVtb3ZlIGF0dGFjayBjbGljayBldmVudHMgYW5kIGNvbXB1dGVyIHJhbmRvbWx5IGF0dGFja3MgYWZ0ZXIgb25lIHNlY29uZFxuICAgICAgZGlzcGxheUNvbnRyb2wudG9nZ2xlQm9hcmQoZ2FtZWJvYXJkU2VsZWN0b3JzWzFdLCBfYXR0YWNrLCB0cnVlKSBcbiAgICAgIHNldFRpbWVvdXQoX3JhbmRvbUF0dGFjaywgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgX2NoYW5nZVR1cm4gPSBmdW5jdGlvbigpIHtcbiAgICBfY3VyclBsYXllciA9IChfY3VyclBsYXllciArIDEpICUgMjtcbiAgICB0dXJuU2V0dXAoKTtcbiAgfVxuXG4gIGNvbnN0IF93aW4gPSBmdW5jdGlvbigpIHtcbiAgICBkaXNwbGF5Q29udHJvbC50b2dnbGVCb2FyZChnYW1lYm9hcmRTZWxlY3RvcnNbMV0sIF9hdHRhY2ssIHRydWUpOyAvLyBSZW1vdmUgZXZlbnQgc2VsZWN0b3JzIGZyb20gYm9hcmRcbiAgICBkaXNwbGF5Q29udHJvbC53aW4ocGxheWVyc1tfY3VyclBsYXllcl0uZ2V0TmFtZSgpKTsgLy8gVHJpZ2dlciB3aW4gZGlzcGxheVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWRzZWN0aW9uIGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcGxhY2VTaGlwU2V0dXApOyAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gcmVzdGFydCBidXR0b24gdG8gcmV0dXJuIHRvIHBsYWNlIHNoaXAgd2luZG93XG4gIH1cblxuICAvLyBEbyBpbml0aWFsIHNldHVwIG9mIHRoZSB3aG9sZSBnYW1lXG4gIGNvbnN0IHN0YXJ0U2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICBkaXNwbGF5Q29udHJvbC5jbGVhck1haW4oKTtcbiAgICBkaXNwbGF5Q29udHJvbC5zdGFydFNldHVwKCk7XG5cbiAgICAvLyBHZXQgbmFtZSBhbmQgc3RhcnQgZ2FtZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVudGVyKTtcblxuICAgIC8vIE1ha2UgaXQgd29yayBvbiBFbnRlciBrZXlib2FyZCBrZXkgYWxzb1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCBpbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIGVudGVyKCk7XG4gICAgfSk7XG5cbiAgICAvLyBEbyBpbnB1dCB2YWxpZGF0aW9uLiBJZiBPSywgY3JlYXRlIFBsYXllciB3aXRoIGlucHV0IHZhbHVlIGFuZCBtb3ZlIHRvIHBsYWNlIHNoaXAgd2luZG93XG4gICAgZnVuY3Rpb24gZW50ZXIoKSB7XG4gICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1pbnB1dCcpO1xuICAgICAgaWYgKG5hbWVJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgY3JlYXRlUGxheWVycyhuYW1lSW5wdXQudmFsdWUsICdDb21wdXRlcicpO1xuICAgICAgICBfcGxhY2VTaGlwU2V0dXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGVudGVyIGEgbmFtZS4nKTtcbiAgICAgICAgbmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0dXAgZm9yIHBsYWNlIHNoaXAgd2luZG93XG4gIGNvbnN0IF9wbGFjZVNoaXBTZXR1cCA9IGZ1bmN0aW9uKCkge1xuICAgIGRpc3BsYXlDb250cm9sLmNsZWFyTWFpbigpO1xuICAgIGRpc3BsYXlDb250cm9sLnBsYWNlU2hpcFNldHVwKHNoaXBMZW5ndGhzKTtcbiAgICBnYW1lYm9hcmRzID0gW0dhbWVib2FyZChib2FyZExlbiksIEdhbWVib2FyZChib2FyZExlbildOyAvLyAoUmUtKWluaXRpYWxpemUgZ2FtZWJvYXJkcyBoZXJlXG5cbiAgICAvLyBTZXQgdXAgZHJhZyBhbmQgZHJvcFxuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XG5cbiAgICBzcXVhcmVzLmZvckVhY2gocyA9PiB7XG4gICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgICBzLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgcy5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgcy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gICAgfSlcblxuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gICAgc2hpcHMuZm9yRWFjaChzID0+IHMuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KSk7XG5cbiAgICBmdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTsgLy8gSG92ZXIgZWZmZWN0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0xlYXZlKGUpIHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyb3AoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS14Jykuc3Vic3RyaW5nKDEpKTtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLnN1YnN0cmluZygxKSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgY29uc3Qgc2hpcExlbiA9IHBhcnNlSW50KGRyYWdnYWJsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVuJykpO1xuICAgICAgY29uc3QgZGlyID0gZHJhZ2dhYmxlLmdldEF0dHJpYnV0ZSgnZGF0YS1kaXInKTtcbiAgICAgIFxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG5cbiAgICAgIGlmICgoKGRpciA9PT0gJ2gnKSAmJiAoeCA8PSBib2FyZExlbiAtIHNoaXBMZW4pKSB8fCAoKGRpciA9PT0gJ3YnKSAmJiAoeSA8PSBib2FyZExlbiAtIHNoaXBMZW4pKSkgeyAvLyBJZiBzdGFydCBzcXVhcmUgaXNuJ3QgdG9vIGxhcmdlXG4gICAgICAgIGlmIChnYW1lYm9hcmRzWzBdLnBsYWNlU2hpcCh4LCB5LCBzaGlwTGVuLCBkaXIpKSB7IC8vIElmIHBsYWNlU2hpcCBzdWNjZWVkc1xuICAgICAgICAgIGRpc3BsYXlDb250cm9sLmluc2VydFNoaXAoJy5nYW1lYm9hcmQnLCB4LCB5LCBzaGlwTGVuLCBkaXIpOyAvLyBJbnNlcnQgc2hpcCBpbWFnZSBhY2NvcmRpbmdseVxuICAgICAgICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7IC8vIFJlbW92ZSBkcmFnZ2FibGUgc2hpcCBmcm9tIGJvYXJkXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpc3BsYXlDb250cm9sLmFsbFNoaXBzUGxhY2VkKCkpIF9zdGFydEdhbWUoKTsgLy8gT25jZSBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCwgc3RhcnQgdGhlIGdhbWVcbiAgICB9XG4gIH1cblxuICAvLyBTdGFydHMgdGhlIGdhbWVcbiAgY29uc3QgX3N0YXJ0R2FtZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRpc3BsYXlDb250cm9sLmNsZWFyTWFpbigpO1xuICAgIGRpc3BsYXlDb250cm9sLmdhbWVTZXR1cChib2FyZExlbiwgcGxheWVyc1swXS5nZXROYW1lKCksIHBsYXllcnNbMV0uZ2V0TmFtZSgpKTtcblxuICAgIC8vIFBsYWNlIGNvbXB1dGVyIHNoaXBzIHJhbmRvbWx5XG4gICAgZm9yIChsZXQgc2hpcExlbiBvZiBzaGlwTGVuZ3Rocykge1xuICAgICAgZ2FtZWJvYXJkc1sxXS5wbGFjZVNoaXBSYW5kb20oc2hpcExlbik7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IGFsbCBzaGlwIGltYWdlcyBmb3IgcGxheWVyIChsZWZ0KSBnYW1lYm9hcmRcbiAgICBfaW5zZXJ0QWxsU2hpcHMoJ2xlZnQnKTtcbiAgICB0dXJuU2V0dXAoKTsgLy8gUGxheWVyIGhhcyBpbml0aWFsIHR1cm5cbiAgfVxuICBcbiAgcmV0dXJuIHsgc3RhcnRTZXR1cCB9O1xufSkoKTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vc2hpcDJoLnN2Z1wiOiBcIi4vc3JjL2ltZy9zaGlwMmguc3ZnXCIsXG5cdFwiLi9zaGlwMnYuc3ZnXCI6IFwiLi9zcmMvaW1nL3NoaXAydi5zdmdcIixcblx0XCIuL3NoaXAzaC5zdmdcIjogXCIuL3NyYy9pbWcvc2hpcDNoLnN2Z1wiLFxuXHRcIi4vc2hpcDN2LnN2Z1wiOiBcIi4vc3JjL2ltZy9zaGlwM3Yuc3ZnXCIsXG5cdFwiLi9zaGlwNGguc3ZnXCI6IFwiLi9zcmMvaW1nL3NoaXA0aC5zdmdcIixcblx0XCIuL3NoaXA0di5zdmdcIjogXCIuL3NyYy9pbWcvc2hpcDR2LnN2Z1wiLFxuXHRcIi4vc2hpcDVoLnN2Z1wiOiBcIi4vc3JjL2ltZy9zaGlwNWguc3ZnXCIsXG5cdFwiLi9zaGlwNXYuc3ZnXCI6IFwiLi9zcmMvaW1nL3NoaXA1di5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbCB9IGZyb20gJy4vZ2FtZUNvbnRyb2wuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmdhbWVDb250cm9sLnN0YXJ0U2V0dXAoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=