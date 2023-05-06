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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  list-style: none;\\n}\\n\\nbody {\\n  margin: auto;\\n  padding: 0;\\n  font-family: 'Source Sans 3', sans-serif;\\n  background-color: #fbfbfb;\\n}\\n\\n.navbar {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  background-color: rgb(3, 37, 65);\\n}\\n\\n.nav-list {\\n  display: flex;\\n  gap: 10%;\\n  font-size: 1.2rem;\\n}\\n\\n.nav-logo {\\n  font-size: 1.5rem;\\n  font-weight: 700;\\n  text-decoration: none;\\n  font-variant: small-caps;\\n}\\n\\na,\\nli {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n\\nh1 {\\n  font-size: 2.8rem;\\n}\\n\\n#header-section {\\n  background-color: rgba(3, 37, 65, 0.8);\\n  padding: 30px 40px;\\n  color: white;\\n}\\n\\n.header_content .header_content_head {\\n  margin: 0;\\n  font-size: 3em;\\n  font-weight: 700;\\n  line-height: 1;\\n}\\n\\n.header_content .header_content_body {\\n  font-size: 1.4em;\\n  font-weight: 300;\\n  margin: 25px 0;\\n}\\n\\n.search {\\n  margin: 3rem 0 2rem 0;\\n}\\n\\n#inner_search {\\n  width: 100%;\\n  height: 46px;\\n  line-height: 46px;\\n  font-size: 1.3em;\\n  color: rgba(0, 0, 0, 0.5);\\n  border: none;\\n  border-radius: 30px;\\n  padding: 10px 20px;\\n  font-family: 'Source Sans 3', sans-serif;\\n}\\n\\n#search_btn {\\n  display: inline-flex;\\n  justify-content: center;\\n  align-content: center;\\n  align-items: center;\\n  height: 46px;\\n  padding: 10px 26px;\\n  border: none;\\n  background: linear-gradient(to right, rgba(30, 213, 169, 1) 0%, rgba(1, 180, 228, 1) 100%);\\n  border-radius: 30px;\\n  position: absolute;\\n  right: 3em;\\n  color: #fff;\\n  font-family: 'Source Sans 3', sans-serif;\\n  font-size: 0.8em;\\n}\\n\\n#movie_section {\\n  margin-top: 2rem;\\n  padding: 40px;\\n}\\n\\n.trending_container {\\n  color: black;\\n  margin: 0 2rem 2.5rem 1.5rem;\\n}\\n\\n.trending_movie {\\n  font-weight: 700;\\n  font-size: 2rem;\\n  border-bottom: 1px solid grey;\\n  padding-bottom: 0.6rem;\\n}\\n\\n.movie_lists {\\n  margin-top: 3.5rem;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n  align-items: flex-start;\\n  justify-items: center;\\n  row-gap: 5rem;\\n}\\n\\n.movie {\\n  display: flex;\\n  flex-direction: column;\\n  width: 200px;\\n  min-width: 150px;\\n}\\n\\n.movie_info_title {\\n  margin: 0 0 19px 0;\\n  line-height: 50px;\\n}\\n\\n.movieImg_container img {\\n  width: 100%;\\n  border-radius: 30px;\\n}\\n\\n@keyframes zoom-in-out {\\n  0% {\\n    transform: scale(1);\\n  }\\n\\n  50% {\\n    transform: scale(1.2);\\n  }\\n\\n  100% {\\n    transform: scale(1);\\n  }\\n}\\n\\n.movie .movie_poster img {\\n  display: inline-block;\\n  width: 90%;\\n  height: 100%;\\n  border-radius: 15px;\\n  cursor: pointer;\\n}\\n\\n.movie .movie_poster img:hover {\\n  animation-name: zoom-in-out;\\n  animation-duration: 1.2s;\\n  animation-timing-function: ease-in-out;\\n}\\n\\n.movie .movie_info .movie_info_title {\\n  margin: 10px 0 0 0;\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 20px;\\n}\\n\\n.movie .movie_info .movie_info_release-date {\\n  margin: 5px 0 15px 0;\\n  font-weight: 400;\\n  color: rgba(0, 0, 0, 0.8);\\n}\\n\\n.comment_btn_container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.comment_btn {\\n  padding: 7px 20px;\\n  font-family: 'Source Sans 3', sans-serif;\\n  font-weight: 600;\\n  color: white;\\n  background: rgb(3, 37, 65);\\n  border-radius: 30px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.comment_btn:hover {\\n  background-color: white;\\n  border: 2px solid rgb(3, 37, 65);\\n  color: rgb(3, 37, 65);\\n  font-weight: 600;\\n}\\n\\n.pop-up {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  display: none;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  z-index: 1000;\\n  backdrop-filter: blur(7px);\\n  overflow-y: scroll;\\n}\\n\\n.comment_popup {\\n  margin: 10% 10%;\\n  padding: 40px;\\n  width: 70%;\\n  background-color: #fff;\\n}\\n\\n.movie_display_section {\\n  margin-top: 20px;\\n  display: grid;\\n  grid-template-columns: 30% 65%;\\n  column-gap: 5%;\\n  align-items: flex-start;\\n}\\n\\n.movie_info_overview {\\n  margin: 0;\\n  padding: 0;\\n  font-weight: 300;\\n}\\n\\n.sub_text {\\n  margin-top: 40px;\\n  display: grid;\\n  grid-template-columns: 50% 40%;\\n}\\n\\n.sub_text h3 {\\n  margin: 0;\\n  font-weight: 400;\\n}\\n\\n.sub_text span {\\n  font-weight: 700;\\n}\\n\\n#name {\\n  margin-bottom: 2%;\\n}\\n\\n.close {\\n  font-size: 30px;\\n  cursor: default;\\n}\\n\\n.favourite {\\n  cursor: pointer;\\n}\\n\\n.display_likes p {\\n  font-weight: 700;\\n}\\n\\n.display_likes .likes {\\n  font-weight: 400;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cineflix/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_displayList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayList.js */ \"./src/modules/displayList.js\");\n\n\n\n(0,_modules_displayList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://cineflix/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentSection.js":
/*!***************************************!*\
  !*** ./src/modules/commentSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComment.js */ \"./src/modules/getComment.js\");\n\n\nconst commentSection = async (id) => {\n  const commentElement = document.createElement('div');\n  commentElement.classList.add('comment_container');\n\n  const data = await (0,_getComment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);\n\n  commentElement.innerHTML = `\n\n  &nbsp;Comment&nbsp;(<span id=\"count\"></span>)\n  <h3>Add Comment</h3>\n  <div id=\"comments\"></div>\n  <form id=\"form-id\">\n  <input type=\"text\" value=\"\" id=\"name\" placeholder=\"Your Name\" required><br>\n  <textarea id=\"comment\" placeholder=\"Enter Text\" required></textarea><br>\n  <button type=\"button\" id=\"submit-btn\" >Submit</button><br>\n  </form>\n  `;\n\n  const commentList = commentElement.querySelector('#comments');\n  const submitBtn = commentElement.querySelector('#submit-btn');\n  const countComment = commentElement.querySelector('#count');\n\n  if (data.length > 0) {\n    data.forEach((comment) => {\n      commentList.innerHTML += `<div class=\"comments-box\"  >${comment.creation_date} ${comment.username}: ${comment.comment}</div>`;\n    });\n  } else {\n    commentList.innerHTML = '<div>No comments yet.</div>';\n  }\n\n  submitBtn.addEventListener('click', async () => {\n    const userName = document.querySelector('#name').value;\n    const comment = document.querySelector('#comment').value;\n    const form = document.querySelector('#form-id');\n    if (userName.trim() === '' && comment.trim() === '') {\n      // handle empty input\n    } else {\n      await (0,_getComment_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(id, userName, comment);\n      form.reset();\n      commentList.innerHTML = ''; // clear existing comments\n      const data = await (0,_getComment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(id); // get updated comments\n      countComment.textContent = data.length; // update comments counter\n      if (data.length > 0) {\n        data.forEach((comment) => {\n          commentList.innerHTML += `<div class=\"comments-box\">${comment.creation_date} ${comment.username}: ${comment.comment}</div>`;\n        });\n      } else {\n        commentList.innerHTML = '<div>No comments yet.</div>';\n      }\n    }\n  });\n\n  return commentElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentSection);\n\n\n//# sourceURL=webpack://cineflix/./src/modules/commentSection.js?");

/***/ }),

/***/ "./src/modules/commentcounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentcounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = () => {\n  const items = document.querySelectorAll('.comments-box').length;\n  let sum = 0;\n\n  for (let i = 0; i <= items; i += 1) {\n    sum = i;\n  }\n  const count = document.querySelector('#count');\n  count.textContent = `${sum}`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n//# sourceURL=webpack://cineflix/./src/modules/commentcounter.js?");

/***/ }),

/***/ "./src/modules/displayList.js":
/*!************************************!*\
  !*** ./src/modules/displayList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAPI.js */ \"./src/modules/getAPI.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/modules/itemCounter.js\");\n\n// eslint-disable-next-line import/no-cycle\n\n\n\n\nconst url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=5b73fb0f47fa9983cf6c63ff8e835442';\n\nconst displayMovies = document.querySelector('.movie_lists');\nconst movieSection = document.querySelector('#movie_section');\n\nconst movie = new _getAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](url);\nmovie.getMovies();\n\nconst displayList = async () => {\n  const movies = await movie.getMovies();\n  const listOfMovies = movies.results;\n\n  listOfMovies.forEach(async (movie) => {\n    _popup_js__WEBPACK_IMPORTED_MODULE_1__.pop.innerHTML = '';\n    const movieContainer = document.createElement('div');\n\n    movieContainer.classList.add('movie');\n\n    movieContainer.innerHTML = `\n        <div class=\"movie_poster\">\n          <img class=\"movie_poster_img\" src=\"https://image.tmdb.org/t/p/w185${movie.poster_path}\" alt=\"moviePoster\">\n        </div>\n        <div class=\"movie_info\">\n          <h3 class=\"movie_info_title\">${movie.title}</h3>\n          <h5 class=\"movie_info_release-date\">${movie.release_date}</h5>\n        </div>\n      `;\n    movieContainer.appendChild(await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movie));\n    displayMovies.appendChild(movieContainer);\n\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.displayCommentsPopup)(movieContainer, movie);\n    (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n  movieSection.appendChild(displayMovies);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);\n\n\n//# sourceURL=webpack://cineflix/./src/modules/displayList.js?");

/***/ }),

/***/ "./src/modules/getAPI.js":
/*!*******************************!*\
  !*** ./src/modules/getAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Movies {\n  constructor(url) {\n    this.url = url;\n  }\n\n  getMovies = async () => {\n    const response = await fetch(this.url, {\n      method: 'GET',\n      header: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n\n    });\n\n    const data = await response.json();\n\n    return data;\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);\n\n\n//# sourceURL=webpack://cineflix/./src/modules/getAPI.js?");

/***/ }),

/***/ "./src/modules/getComment.js":
/*!***********************************!*\
  !*** ./src/modules/getComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment)\n/* harmony export */ });\nconst getComment = async (id) => {\n  try {\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments?item_id=${id}`);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return [];\n  }\n};\n\nconst addComment = async (id, username, comment) => {\n  try {\n    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/comments/', {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: id,\n        username,\n        comment,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const info = await response.json();\n    return info;\n  } catch (error) {\n    return error;\n  }\n};\n\n//# sourceURL=webpack://cineflix/./src/modules/getComment.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = () => {\n  const items = document.querySelectorAll('.movie').length;\n  let sum = 0;\n\n  for (let i = 0; i <= items; i += 1) {\n    sum = i;\n  }\n  const trendingContainer = document.querySelector('.trending_container');\n  trendingContainer.innerHTML = `<div class=\"trending_movie\">Trending (${sum})</div>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://cineflix/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/like-api.js":
/*!*********************************!*\
  !*** ./src/modules/like-api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/etL4WYQ30ddjnqhglbpf/likes/';\nconst postLikes = async (key) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: key,\n    }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  return response;\n};\n\nconst getLikes = async () => {\n  const response = await fetch(url, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  const data = await response.json();\n\n  return data;\n};\n\n\n\n\n//# sourceURL=webpack://cineflix/./src/modules/like-api.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCommentsPopup\": () => (/* binding */ displayCommentsPopup),\n/* harmony export */   \"pop\": () => (/* binding */ pop)\n/* harmony export */ });\n/* harmony import */ var _commentcounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentcounter.js */ \"./src/modules/commentcounter.js\");\n/* harmony import */ var _commentSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentSection.js */ \"./src/modules/commentSection.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\nconst pop = document.querySelector('.pop-up');\n\nconst displayCommentsPopup = (movieContainer, movie) => {\n  const commentButton = movieContainer.querySelector('.comment_btn');\n  commentButton.addEventListener('click', async () => {\n    pop.innerHTML = '';\n    const popUp = document.createElement('div');\n    popUp.classList.add('comment_popup');\n\n    popUp.innerHTML = `\n          <i class=\"material-icons close\">&#xe888</i>\n          <div class=\"movie_display_section\">\n          <div class=\"movieImg_container\">\n          <img src=\"https://image.tmdb.org/t/p/w185${movie.poster_path}\" alt=\"\">\n          </div>\n          <div class=\"texts_container\">\n          <div class=\"modal_text\">\n          <h1 class=\"movie_info_title\">${movie.title}</h1>\n          <h2 class=\"movie_info_overview\">${movie.overview}</h2>\n          </div>\n          <div class=\"sub_text\">\n          <h3 class=\"movie_info_release-date\"><span>Release Date:</span> ${movie.release_date}</h3>\n          <h3 class=\"movie_info_vote\"><span>Vote Count:</span> ${movie.vote_count}</h3>\n          </div>\n          </div>\n          </div>\n          `;\n    const infos = await (0,_commentSection_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie.id);\n\n    popUp.appendChild(infos);\n    pop.setAttribute('style', 'display: block');\n\n    pop.appendChild(popUp);\n\n    const closeBtn = document.querySelector('.close');\n    closeBtn.addEventListener('click', () => {\n      pop.style.display = 'none';\n    });\n\n    (0,_commentcounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n};\n\n\n\n\n//# sourceURL=webpack://cineflix/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _like_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-api.js */ \"./src/modules/like-api.js\");\n\n// Like Section\nconst likeSection = async (movie) => {\n  const likeElement = document.createElement('div');\n  likeElement.classList.add('like_container');\n\n  likeElement.innerHTML = `\n        <div class=\"comment_btn_container\">\n            <button id='${movie.id}' class=\"comment_btn\">Comment</button>\n            <i class=\"material-icons favourite\">favorite_border</i>\n        </div>\n      `;\n\n  // Display Likes\n  const displayLike = async () => {\n    const likes = await (0,_like_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n    const likedItem = likes.find((item) => item.item_id === movie.id);\n    return likedItem?.likes || 0;\n    // Also the same as if(linkedItem){return linkedItem.likes} else{return 0}\n  };\n\n  // Click eventlistener to post like to API\n  const likeBtn = likeElement.querySelector('.favourite');\n  likeBtn.addEventListener('click', async () => {\n    await (0,_like_api_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(movie.id);\n    const likesElement = likeElement.querySelector('.likes');\n    likesElement.textContent = await displayLike();\n  });\n\n  // Display Likes in the HTML DOM\n  const displayLikes = document.createElement('div');\n  displayLikes.classList.add('display_likes');\n  displayLikes.innerHTML = `\n    <p>Likes: <span class=\"likes\">${await displayLike()}</span></p>\n  `;\n  likeElement.appendChild(displayLikes);\n\n  return likeElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeSection);\n\n\n//# sourceURL=webpack://cineflix/./src/modules/postLikes.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);