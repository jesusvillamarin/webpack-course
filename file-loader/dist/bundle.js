/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./file-loader/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./file-loader/src/css/estilo.css":
/*!****************************************!*\
  !*** ./file-loader/src/css/estilo.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./file-loader/src/css/estilo.css?");

/***/ }),

/***/ "./file-loader/src/imgs/octogib.jpg":
/*!******************************************!*\
  !*** ./file-loader/src/imgs/octogib.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/octogib.dcef3abedf0e0761203aaeb85886a6f3.jpg\";\n\n//# sourceURL=webpack:///./file-loader/src/imgs/octogib.jpg?");

/***/ }),

/***/ "./file-loader/src/js/index.js":
/*!*************************************!*\
  !*** ./file-loader/src/js/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/estilo.css */ \"./file-loader/src/css/estilo.css\");\n\nvar _octogib = __webpack_require__(/*! ../imgs/octogib.jpg */ \"./file-loader/src/imgs/octogib.jpg\");\n\nvar _octogib2 = _interopRequireDefault(_octogib);\n\nvar _video = __webpack_require__(/*! ../videos/video.mp4 */ \"./file-loader/src/videos/video.mp4\");\n\nvar _video2 = _interopRequireDefault(_video);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar element = document.createElement('p');\nelement.textContent = 'Agregando información desde el modulo ´index.js´ ';\ndocument.body.appendChild(element);\nvar img = document.createElement('img');\nimg.setAttribute('src', _octogib2.default);\nimg.setAttribute('height', '300');\ndocument.body.appendChild(img);\n\nvar videoelem = document.createElement('video');\nvideoelem.setAttribute('src', _video2.default);\nvideoelem.setAttribute('controls', true);\nvideoelem.setAttribute('width', '300');\n\ndocument.body.appendChild(videoelem);\n\n//# sourceURL=webpack:///./file-loader/src/js/index.js?");

/***/ }),

/***/ "./file-loader/src/videos/video.mp4":
/*!******************************************!*\
  !*** ./file-loader/src/videos/video.mp4 ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"videos/video.7a8923a28f2c8458d615a3f8743d8339.mp4\";\n\n//# sourceURL=webpack:///./file-loader/src/videos/video.mp4?");

/***/ })

/******/ });