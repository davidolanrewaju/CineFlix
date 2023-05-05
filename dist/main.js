"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcineflix"] = self["webpackChunkcineflix"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: auto;\\r\\n  padding: 0;\\r\\n  font-family: 'Source Sans 3', sans-serif;\\r\\n  background-color: #fbfbfb;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: grey;\\r\\n  height: 3.5rem;\\r\\n  width: 100%;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  display: flex;\\r\\n  gap: 10%;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.nav-logo {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 700;\\r\\n  text-decoration: none;\\r\\n  font-variant: small-caps;\\r\\n}\\r\\n\\r\\na,\\r\\nli {\\r\\n  color: #fff;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 2.8rem;\\r\\n}\\r\\n\\r\\n#movie_section {\\r\\n  padding: 40px;\\r\\n}\\r\\n\\r\\n.movie_lists {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\r\\n  align-items: flex-start;\\r\\n  justify-items: center;\\r\\n  row-gap: 5rem;\\r\\n}\\r\\n\\r\\n.movie {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 200px;\\r\\n  min-width: 150px;\\r\\n}\\r\\n\\r\\n.movie_info_title {\\r\\n  margin: 0 0 19px 0;\\r\\n  line-height: 50px;\\r\\n}\\r\\n\\r\\n.movieImg_container img {\\r\\n  width: 100%;\\r\\n  border-radius: 30px;\\r\\n}\\r\\n\\r\\n.movie .movie_poster img {\\r\\n  display: inline-block;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-radius: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.movie .movie_info .movie_info_title {\\r\\n  margin: 10px 0 0 0;\\r\\n  font-weight: 700;\\r\\n  font-size: 16px;\\r\\n  line-height: 20px;\\r\\n}\\r\\n\\r\\n.movie .movie_info .movie_info_release-date {\\r\\n  margin: 5px 0 15px 0;\\r\\n  font-weight: 400;\\r\\n  color: rgba(0, 0, 0, 0.8);\\r\\n}\\r\\n\\r\\n.comment_btn_container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comment_btn {\\r\\n  padding: 7px 20px;\\r\\n  font-family: 'Source Sans 3', sans-serif;\\r\\n  font-weight: 600;\\r\\n  background: #969696;\\r\\n  outline: none;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 30px;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: none;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  z-index: 1000;\\r\\n  backdrop-filter: blur(7px);\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.comment_popup {\\r\\n  margin: 10% 10%;\\r\\n  padding: 40px;\\r\\n  width: 70%;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.movie_display_section {\\r\\n  margin-top: 20px;\\r\\n  display: grid;\\r\\n  grid-template-columns: 30% 65%;\\r\\n  column-gap: 5%;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.movie_info_overview {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n.sub_text {\\r\\n  margin-top: 40px;\\r\\n  display: grid;\\r\\n  grid-template-columns: 50% 40%;\\r\\n}\\r\\n\\r\\n.sub_text h3 {\\r\\n  margin: 0;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.sub_text span {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  margin-bottom: 2%;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  font-size: 30px;\\r\\n  cursor: default;\\r\\n}\\r\\n\\r\\n.favourite {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cineflix/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://cineflix/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cineflix/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cineflix/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cineflix/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cineflix/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cineflix/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cineflix/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cineflix/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cineflix/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_displayList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayList.js */ \"./src/modules/displayList.js\");\n\r\n\r\n\r\n(0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://cineflix/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentSection.js":
/*!***************************************!*\
  !*** ./src/modules/commentSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentSection = () => {\r\n  const commentElement = document.createElement('div');\r\n  commentElement.classList.add('comment_container');\r\n\r\n  commentElement.innerHTML = `\r\n            <h3>Comments:(0)</h3>\r\n            <h3>Add Comment</h3>\r\n            <form>\r\n                <input type=\"text\" id=\"name\" value=\"Your Name\"><br>\r\n                <textarea>Your Comment</textarea><br>\r\n                <button type=\"button\">Submit</button><br>\r\n            </form>\r\n    `;\r\n\r\n  return commentElement;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentSection);\n\n//# sourceURL=webpack://cineflix/./src/modules/commentSection.js?");

/***/ }),

/***/ "./src/modules/displayList.js":
/*!************************************!*\
  !*** ./src/modules/displayList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAPI.js */ \"./src/modules/getAPI.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n\r\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\n\r\nconst url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=5b73fb0f47fa9983cf6c63ff8e835442';\r\n\r\nconst displayMovies = document.querySelector('.movie_lists');\r\nconst movieSection = document.querySelector('#movie_section');\r\n\r\nconst movie = new _getAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](url);\r\nmovie.getMovies();\r\n\r\nconst displayList = async () => {\r\n  const movies = await movie.getMovies();\r\n  const listOfMovies = movies.results;\r\n\r\n  listOfMovies.forEach(async (movie) => {\r\n    _popup_js__WEBPACK_IMPORTED_MODULE_1__.pop.innerHTML = '';\r\n    const movieContainer = document.createElement('div');\r\n\r\n    movieContainer.classList.add('movie');\r\n\r\n    movieContainer.innerHTML = `\r\n        <div class=\"movie_poster\">\r\n          <img class=\"movie_poster_img\" src=\"https://image.tmdb.org/t/p/w185${movie.poster_path}\" alt=\"moviePoster\">\r\n        </div>\r\n        <div class=\"movie_info\">\r\n          <h3 class=\"movie_info_title\">${movie.title}</h3>\r\n          <h5 class=\"movie_info_release-date\">${movie.release_date}</h5>\r\n        </div>\r\n      `;\r\n    movieContainer.appendChild(await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movie));\r\n    displayMovies.appendChild(movieContainer);\r\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.displayCommentsPopup)(movieContainer, movie);\r\n  });\r\n  movieSection.appendChild(displayMovies);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);\r\n\n\n//# sourceURL=webpack://cineflix/./src/modules/displayList.js?");

/***/ }),

/***/ "./src/modules/getAPI.js":
/*!*******************************!*\
  !*** ./src/modules/getAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Movies {\r\n  constructor(url) {\r\n    this.url = url;\r\n  }\r\n\r\n  getMovies = async () => {\r\n    const response = await fetch(this.url, {\r\n      method: 'GET',\r\n      header: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n\r\n    });\r\n\r\n    const data = await response.json();\r\n\r\n    return data;\r\n  };\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);\r\n\n\n//# sourceURL=webpack://cineflix/./src/modules/getAPI.js?");

/***/ }),

/***/ "./src/modules/like-api.js":
/*!*********************************!*\
  !*** ./src/modules/like-api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/likes/';\r\nconst postLikes = async (key) => {\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: key,\r\n    }),\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return response;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const response = await fetch(url, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  const data = await response.json();\r\n\r\n  return data;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://cineflix/./src/modules/like-api.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCommentsPopup\": () => (/* binding */ displayCommentsPopup),\n/* harmony export */   \"pop\": () => (/* binding */ pop)\n/* harmony export */ });\n/* harmony import */ var _commentSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentSection.js */ \"./src/modules/commentSection.js\");\n// eslint-disable-next-line import/no-cycle\r\n\r\n\r\nconst pop = document.querySelector('.pop-up');\r\n\r\nconst displayCommentsPopup = (movieContainer, movie) => {\r\n  const commentButton = movieContainer.querySelector('.comment_btn');\r\n  commentButton.addEventListener('click', () => {\r\n    const popUp = document.createElement('div');\r\n    popUp.classList.add('comment_popup');\r\n\r\n    popUp.innerHTML = `\r\n        <i class=\"material-icons close\">&#xe888</i>\r\n        <div class=\"movie_display_section\">\r\n            <div class=\"movieImg_container\">\r\n                <img src=\"https://image.tmdb.org/t/p/w185${movie.poster_path}\" alt=\"\">\r\n            </div>\r\n            <div class=\"texts_container\">\r\n                <div class=\"modal_text\">\r\n                    <h1 class=\"movie_info_title\">${movie.title}</h1>\r\n                    <h2 class=\"movie_info_overview\">${movie.overview}</h2>\r\n                </div>\r\n                <div class=\"sub_text\">\r\n                    <h3 class=\"movie_info_release-date\"><span>Release Date:</span> ${movie.release_date}</h3>\r\n                    <h3 class=\"movie_info_vote\"><span>Vote Count:</span> ${movie.vote_count}</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      `;\r\n\r\n    popUp.appendChild((0,_commentSection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    pop.setAttribute('style', 'display: block');\r\n\r\n    pop.appendChild(popUp);\r\n\r\n    const closeBtn = document.querySelector('.close');\r\n    closeBtn.addEventListener('click', () => {\r\n      pop.style.display = 'none';\r\n    });\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://cineflix/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _like_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-api.js */ \"./src/modules/like-api.js\");\n\r\n// Like Section\r\nconst likeSection = async (movie) => {\r\n  const likeElement = document.createElement('div');\r\n  likeElement.classList.add('like_container');\r\n\r\n  likeElement.innerHTML = `\r\n        <div class=\"comment_btn_container\">\r\n            <button class=\"comment_btn\">Comment</button>\r\n            <i class=\"material-icons favourite\">favorite_border</i>\r\n        </div>\r\n      `;\r\n\r\n  // Display Likes\r\n  const displayLike = async () => {\r\n    const likes = await (0,_like_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\r\n    const likedItem = likes.find((item) => item.item_id === movie.id);\r\n    return likedItem?.likes || 0;\r\n    // Also the same as if(linkedItem){return linkedItem.likes} else{return 0}\r\n  };\r\n\r\n  // Click eventlistener to post like to API\r\n  const likeBtn = likeElement.querySelector('.favourite');\r\n  likeBtn.addEventListener('click', async () => {\r\n    await (0,_like_api_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(movie.id);\r\n    const likesElement = likeElement.querySelector('.likes');\r\n    likesElement.textContent = await displayLike();\r\n  });\r\n\r\n  // Display Likes in the HTML DOM\r\n  const displayLikes = document.createElement('div');\r\n  displayLikes.classList.add('display_likes');\r\n  displayLikes.innerHTML = `\r\n    <p>Likes: <span class=\"likes\">${await displayLike()}</span></p>\r\n  `;\r\n  likeElement.appendChild(displayLikes);\r\n\r\n  return likeElement;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeSection);\r\n\n\n//# sourceURL=webpack://cineflix/./src/modules/postLikes.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);