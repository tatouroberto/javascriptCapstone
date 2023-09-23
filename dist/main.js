/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  font-family: 'roboto', 'mooli', Arial, sans-serif;\r\n}\r\n\r\nbody {\r\n  background: radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%);\r\n}\r\n\r\n.nav,\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40%;\r\n  border: 1px solid #d3d3d3;\r\n  padding: 0 2.1rem;\r\n}\r\n\r\ni.fa-solid.fa-film {\r\n  background-color: transparent !important;\r\n}\r\n\r\nfooter {\r\n  font-style: italic;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 5rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.form-content input,\r\n.form-content textarea {\r\n  padding: 5px;\r\n  border-radius: 8px;\r\n  border: 0.3px solid #000;\r\n}\r\n\r\n.form-content input:hover,\r\n.form-content textarea:hover {\r\n  border: 0.5px solid #00968859;\r\n}\r\n\r\n.desc {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nbutton {\r\n  width: 80px;\r\n  border: none;\r\n  background: none;\r\n  background-color: #02282b;\r\n  padding: 5px;\r\n  color: #fff;\r\n  border-radius: 8px;\r\n}\r\n\r\nli > a {\r\n  text-decoration: none;\r\n  color: #0e0202;\r\n  list-style: none;\r\n}\r\n\r\nli > a:hover {\r\n  font-size: large;\r\n}\r\n\r\n.fa-clapperboard,\r\n.fa-heart {\r\n  padding-right: 10px;\r\n}\r\n\r\n.fa-heart {\r\n  color: #ef3d01;\r\n  cursor: pointer;\r\n  pointer-events: auto;\r\n}\r\n\r\n.fa-regular,\r\n.far {\r\n  font-weight: 400;\r\n  padding-left: 10px;\r\n}\r\n\r\n.movie-icon {\r\n  font-size: 2rem;\r\n  background-color: transparent;\r\n}\r\n\r\nfooter p {\r\n  font-size: 20px;\r\n}\r\n\r\np.padd,\r\nh3.padd.movie-info,\r\nh4 {\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\nh2.movie-popup-title {\r\n  color: black;\r\n}\r\n\r\n.close-icon {\r\n  color: black;\r\n  display: block;\r\n  position: absolute;\r\n  right: 300px;\r\n  top: 78px;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: auto;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.display-comments {\r\n  color: black;\r\n}\r\n\r\n.popup-display {\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin: 20px auto;\r\n  padding: 0;\r\n  background-color: #f1f1f1;\r\n  color: #fff;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  margin-top: 75px;\r\n}\r\n\r\n.movie-img {\r\n  width: 600px;\r\n  padding-top: 30px;\r\n  height: 600px;\r\n}\r\n\r\n.btncomment {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.property-container {\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.movie-pop-title,\r\n.movie-info {\r\n  text-align: center;\r\n}\r\n\r\n.property-container-1,\r\n.property-container-2 {\r\n  align-items: flex-start;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-items {\r\n  padding-left: 30px;\r\n}\r\n\r\n.form-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  width: 50%;\r\n  padding-left: 30px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_gettingLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gettingLikes.js */ \"./src/modules/gettingLikes.js\");\n/* harmony import */ var _modules_postingLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postingLikes.js */ \"./src/modules/postingLikes.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_gettingMovies_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/gettingMovies.js */ \"./src/modules/gettingMovies.js\");\n/* harmony import */ var _modules_ourPopUp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ourPopUp.js */ \"./src/modules/ourPopUp.js\");\n/* harmony import */ var _modules_countMovies_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/countMovies.js */ \"./src/modules/countMovies.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst showContainer = document.querySelector('.movie-section');\r\nconst popupContainer = document.querySelector('.popup-display');\r\nconst hearder = document.querySelector('.hearder');\r\nconst addEvents = () => {\r\n  const likeIcon = document.querySelectorAll('.fa-heart');\r\n  likeIcon.forEach((element) => {\r\n    element.addEventListener('click', () => {\r\n      (0,_modules_postingLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element.dataset.id);\r\n    });\r\n  });\r\n};\r\n\r\nwindow.addEventListener('load', async () => {\r\n  const shows = await (0,_modules_gettingMovies_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(shows);\r\n  addEvents();\r\n  (0,_modules_gettingLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const movieLink = document.querySelector('.movie');\r\n  movieLink.innerHTML = `Home <i class=\"fa-solid fa-clapperboard\"></i>(${(0,_modules_countMovies_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()})`;\r\n  (0,_modules_countMovies_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\r\n  document.addEventListener('click', async (e) => {\r\n    const button = e.target.closest('.comments-btn');\r\n    const closeButton = e.target.closest('.close-icon');\r\n\r\n    if (button) {\r\n      const selectedShow = shows.filter(\r\n        (it) => it.id.toString() === button.id.toString(),\r\n      )[0];\r\n      const {\r\n        id, image, name, language, genres, rating, schedule,\r\n      } = selectedShow;\r\n      showContainer.style.display = 'none';\r\n      hearder.style.display = 'none';\r\n      popupContainer.style.display = 'flex';\r\n      (0,_modules_ourPopUp_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(id, image, name, language, genres, rating, schedule);\r\n    }\r\n\r\n    if (closeButton) {\r\n      popupContainer.style.display = 'none';\r\n      showContainer.style.display = 'flex';\r\n      // renderHomePage(shows);\r\n      addEvents();\r\n      (0,_modules_gettingLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://webpack_template/./src/index.js?");

/***/ }),

/***/ "./src/modules/countMovies.js":
/*!************************************!*\
  !*** ./src/modules/countMovies.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCounter = () => {\r\n  const movieCounter = document.querySelector('.main-section');\r\n  const count = movieCounter.childElementCount;\r\n  return count;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);\n\n//# sourceURL=webpack://webpack_template/./src/modules/countMovies.js?");

/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShowLikes: () => (/* binding */ ShowLikes),\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   url: () => (/* binding */ url)\n/* harmony export */ });\nconst ShowLikes = async (likes) => {\r\n  likes.forEach((like) => {\r\n    const elementid = `show-${like.item_id}`;\r\n    const showLike = document.getElementById(elementid);\r\n    if (showLike !== null) {\r\n      const likeCount = showLike.querySelector('.like-count');\r\n      likeCount.innerHTML = `${like.likes}`;\r\n    }\r\n  });\r\n};\r\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sW84L8HHl7QgRfLX5BO5/likes/';\r\nconst getAddedLikes = async () => {\r\n  let likes = [];\r\n  const response = await fetch(url);\r\n  likes = await response.json();\r\n  ShowLikes(likes);\r\n};\r\n\r\nconst addLike = async (id) => {\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  getAddedLikes();\r\n};\n\n//# sourceURL=webpack://webpack_template/./src/modules/displayLikes.js?");

/***/ }),

/***/ "./src/modules/gettingLikes.js":
/*!*************************************!*\
  !*** ./src/modules/gettingLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/modules/displayLikes.js\");\n\r\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sW84L8HHl7QgRfLX5BO5/likes/';\r\nconst getAddedLikes = async () => {\r\n  let likes = [];\r\n  const response = await fetch(url);\r\n  likes = await response.json();\r\n  (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_0__.ShowLikes)(likes);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAddedLikes);\n\n//# sourceURL=webpack://webpack_template/./src/modules/gettingLikes.js?");

/***/ }),

/***/ "./src/modules/gettingMovies.js":
/*!**************************************!*\
  !*** ./src/modules/gettingMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gettingMovie = async () => {\r\n  const response = await fetch('https://api.tvmaze.com/shows');\r\n  const getMovie = await response.json();\r\n  const listOfMovies = getMovie.slice(35, 45);\r\n  return listOfMovies;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gettingMovie);\n\n//# sourceURL=webpack://webpack_template/./src/modules/gettingMovies.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showContainer = document.querySelector('.movie-section');\r\n\r\nconst home = async (shows) => {\r\n  showContainer.innerHTML = '';\r\n  shows.forEach((item) => {\r\n    showContainer.innerHTML += `\r\n        <li id=\"show-${item.id}\" class=\"single-movie\">\r\n        <img src=${item.image.medium} alt=\"movie-image\" class=\"image-pic\" />\r\n        <div class=\"desc\">\r\n          <p class=\"movie-title\">${item.name}</p>\r\n          <div class=\"likes\">\r\n            <i class=\"fa-solid fa-heart\" style=\"color: #ef3d01;\" data-id=${item.id}></i>     \r\n            <p data-id = \"${item.id}\"> <span class=\"like-count\"></span> likes</p>\r\n          </div>\r\n        </div>\r\n        <button class=\"comments-btn\" id=${item.id}>Comments</button>\r\n      </li>\r\n    `;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://webpack_template/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/ourComments.js":
/*!************************************!*\
  !*** ./src/modules/ourComments.js ***!
  \************************************/
/***/ ((module) => {

eval("// counter for number of comments for a single item\r\nconst counter = (comment) => {\r\n  let commentCounter = comment.length;\r\n  if (comment.error) {\r\n    commentCounter = 0;\r\n  }\r\n  return commentCounter;\r\n};\r\n\r\n// function to Display comments given for a single item\r\nconst showComment = (data, element) => {\r\n  element.innerHTML = '';\r\n  const head = document.createElement('h4');\r\n  head.innerHTML = `Comments (${counter(data)})`;\r\n  element.appendChild(head);\r\n  const commentitem = document.createElement('div');\r\n  commentitem.classList.add('comment-items');\r\n  if (!data.error) {\r\n    data.forEach((element) => {\r\n      const item = document.createElement('p');\r\n      item.innerHTML = `<span class=\"data-comment display-comments\"><small class=\"display-comments\"> ${element.creation_date} </small>${element.username}: ${element.comment}</span>`;\r\n      commentitem.appendChild(item);\r\n    });\r\n  }\r\n  element.appendChild(commentitem);\r\n};\r\n\r\n// address for comments API\r\nconst link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Z6mlbf0VYcyGDmGWWyyR/comments?item_id=';\r\n\r\n// get number of comments from the given API\r\nconst getAddedComments = async (id) => {\r\n  const request = new Request(link + id);\r\n  const response = await fetch(request);\r\n  const comment = await response.json();\r\n  return comment;\r\n};\r\n\r\nconst addnewComent = async (id, name, msg) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Z6mlbf0VYcyGDmGWWyyR/comments';\r\n  const request = new Request(url);\r\n  await fetch(request, {\r\n    method: 'POST',\r\n    body: JSON.stringify({ item_id: id, username: name, comment: msg }),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n\r\n  const arr = await getAddedComments(id);\r\n  const dataCard = document.querySelector('.comments-container');\r\n\r\n  showComment(arr, dataCard);\r\n};\r\nconst addComment = (id, name, msg) => {\r\n  if (name.value !== '' && msg.value !== '') {\r\n    addnewComent(id, name.value, msg.value);\r\n    name.value = '';\r\n    msg.value = '';\r\n  }\r\n};\r\n\r\nconst formComment = (commentId, node) => {\r\n  const commentTitle = document.createElement('div');\r\n  commentTitle.classList.add('form-container');\r\n  commentTitle.innerHTML = '<h4> Add a Comment </h4>';\r\n  const form = document.createElement('form');\r\n  form.classList.add('form-content');\r\n  form.innerHTML = `<input type=\"text\" class=\"username\" placeholder=\"Your name\" required >\r\n   <textarea class=\"msg\" name=\"msg\" id=\"\" cols=\"20\" rows=\"6\" placeholder=\"Your Comment\" required ></textarea>\r\n   <button class=\"btncomment\" type=\"button\">Comment</button>`;\r\n  const btncomment = form.querySelector('.btncomment');\r\n  const username = form.querySelector('.username');\r\n  const msg = form.querySelector('.msg');\r\n  btncomment.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    addComment(commentId, username, msg);\r\n  });\r\n  commentTitle.appendChild(form);\r\n  node.appendChild(commentTitle);\r\n};\r\n\r\nmodule.exports = {\r\n  counter, formComment, showComment, getAddedComments,\r\n};\n\n//# sourceURL=webpack://webpack_template/./src/modules/ourComments.js?");

/***/ }),

/***/ "./src/modules/ourPopUp.js":
/*!*********************************!*\
  !*** ./src/modules/ourPopUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ourComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourComments.js */ \"./src/modules/ourComments.js\");\n/* harmony import */ var _ourComments_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ourComments_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst popupContainer = document.querySelector('.popup-display');\r\n\r\nconst renderPopup = async (\r\n  id,\r\n  image,\r\n  name,\r\n  language,\r\n  genres,\r\n  rating,\r\n  schedule,\r\n) => {\r\n  popupContainer.innerHTML = '';\r\n\r\n  popupContainer.innerHTML += `\r\n   <div class=\"show-${id} movie-img-sect\">\r\n     <div class=\"close-icon\">X</div>\r\n     <img src=${image.original} alt=\"\" class=\"movie-img\" />\r\n     <h2 class=\"movie-pop-title display-comments\">${name}</h2>\r\n     </div>\r\n   <div class=\"movie-features\">\r\n   <h3 class=\"padd movie-info\">Movie Info</h3>\r\n   <div class=\"property-container\">\r\n   <div class=\"property-container-1\">\r\n     <p class=\"padd\" >Language: ${language}</p>\r\n     <p class=\"padd\" >Genre: ${genres.join(',')}</p>\r\n     </div> \r\n     <div class=\"property-container-2\">\r\n     <p class=\"padd\">Rating: ${rating.average} <i class=\"fa-solid fa-star\"></i></p>\r\n     <p class=\"padd\" >Schedule: ${schedule.time} on ${schedule.days}s</p>\r\n     </div>\r\n  </div>\r\n     <div class=\"comments-container\"></div\r\n `;\r\n\r\n  const commentsContainer = document.querySelector('.movie-features .comments-container');\r\n  const comments = await (0,_ourComments_js__WEBPACK_IMPORTED_MODULE_0__.getAddedComments)(id);\r\n\r\n  (0,_ourComments_js__WEBPACK_IMPORTED_MODULE_0__.showComment)(comments, commentsContainer);\r\n  (0,_ourComments_js__WEBPACK_IMPORTED_MODULE_0__.formComment)(id, commentsContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPopup);\n\n//# sourceURL=webpack://webpack_template/./src/modules/ourPopUp.js?");

/***/ }),

/***/ "./src/modules/postingLikes.js":
/*!*************************************!*\
  !*** ./src/modules/postingLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gettingLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gettingLikes.js */ \"./src/modules/gettingLikes.js\");\n\r\n\r\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sW84L8HHl7QgRfLX5BO5/likes/';\r\n\r\nconst addLike = async (id) => {\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  (0,_gettingLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://webpack_template/./src/modules/postingLikes.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;