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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/history.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/art-template/lib/compile/runtime.js":
/*!**********************************************************!*\
  !*** ./node_modules/art-template/lib/compile/runtime.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n/*! art-template@runtime | https://github.com/aui/art-template */\n\nvar globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};\n\nvar runtime = Object.create(globalThis);\nvar ESCAPE_REG = /[\"&'<>]/;\n\n/**\n * 编码模板输出的内容\n * @param  {any}        content\n * @return {string}\n */\nruntime.$escape = function (content) {\n    return xmlEscape(toString(content));\n};\n\n/**\n * 迭代器，支持数组与对象\n * @param {array|Object} data\n * @param {function}     callback\n */\nruntime.$each = function (data, callback) {\n    if (Array.isArray(data)) {\n        for (var i = 0, len = data.length; i < len; i++) {\n            callback(data[i], i);\n        }\n    } else {\n        for (var _i in data) {\n            callback(data[_i], _i);\n        }\n    }\n};\n\n// 将目标转成字符\nfunction toString(value) {\n    if (typeof value !== 'string') {\n        if (value === undefined || value === null) {\n            value = '';\n        } else if (typeof value === 'function') {\n            value = toString(value.call(value));\n        } else {\n            value = JSON.stringify(value);\n        }\n    }\n\n    return value;\n}\n\n// 编码 HTML 内容\nfunction xmlEscape(content) {\n    var html = '' + content;\n    var regexResult = ESCAPE_REG.exec(html);\n    if (!regexResult) {\n        return content;\n    }\n\n    var result = '';\n    var i = void 0,\n        lastIndex = void 0,\n        char = void 0;\n    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n        switch (html.charCodeAt(i)) {\n            case 34:\n                char = '&#34;';\n                break;\n            case 38:\n                char = '&#38;';\n                break;\n            case 39:\n                char = '&#39;';\n                break;\n            case 60:\n                char = '&#60;';\n                break;\n            case 62:\n                char = '&#62;';\n                break;\n            default:\n                continue;\n        }\n\n        if (lastIndex !== i) {\n            result += html.substring(lastIndex, i);\n        }\n\n        lastIndex = i + 1;\n        result += char;\n    }\n\n    if (lastIndex !== i) {\n        return result + html.substring(lastIndex, i);\n    } else {\n        return result;\n    }\n}\n\nmodule.exports = runtime;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/art-template/lib/compile/runtime.js?");

/***/ }),

/***/ "./node_modules/art-template/lib/runtime.js":
/*!**************************************************!*\
  !*** ./node_modules/art-template/lib/runtime.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./compile/runtime */ \"./node_modules/art-template/lib/compile/runtime.js\");\n\n//# sourceURL=webpack:///./node_modules/art-template/lib/runtime.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/scripts/controllers/history/history.js":
/*!****************************************************!*\
  !*** ./src/scripts/controllers/history/history.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const historyHtml = __webpack_require__(/*! ../../views/history/history.art */ \"./src/scripts/views/history/history.art\")\r\n\r\nclass Index {\r\n    constructor() {\r\n        this.render()\r\n    }\r\n\r\n    render() {\r\n        let html = historyHtml()\r\n\r\n        $('#home').html(html)\r\n\r\n        $('.header-back').on('click', function () {\r\n            window.history.back(-1)\r\n        })\r\n\r\n        $('.header-title').eq(0).on('click', function () {\r\n            $('.header-title').eq(0).addClass('active').siblings().removeClass('active')\r\n\r\n            let userInfoStrS = sessionStorage.getItem(\"userInfo\")\r\n            let userinfo = JSON.parse(userInfoStrS)[0].email\r\n\r\n            let userInfoStrL = localStorage.getItem(\"userInfo\")\r\n            let userInfo = JSON.parse(userInfoStrL)\r\n\r\n            let result = $.grep(userInfo, (item) => {\r\n                return (item.email == userinfo)\r\n            })\r\n\r\n            console.log(result);\r\n\r\n\r\n            if (result) {\r\n\r\n                let sectionHtml = `\r\n                <section class=\"favorite-content\">\r\n                    <div class=\"item\">\r\n                        <div class=\"item-pic\" style=\"background-image: ${result[0].bookImg}\"></div>\r\n                        <p class=\"item-text\">${result[0].bookName}</p>\r\n                    </div>\r\n                </section>\r\n                `\r\n\r\n                $('.comic-cue').css('display', 'none')\r\n                $('#home').append(sectionHtml)\r\n            }\r\n\r\n        })\r\n\r\n        $('.header-title').eq(1).on('click', function () {\r\n            $('.header-title').eq(1).addClass('active').siblings().removeClass('active')\r\n        })\r\n    }\r\n}\r\n\r\nnew Index()\n\n//# sourceURL=webpack:///./src/scripts/controllers/history/history.js?");

/***/ }),

/***/ "./src/scripts/history.js":
/*!********************************!*\
  !*** ./src/scripts/history.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_history_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/history/history */ \"./src/scripts/controllers/history/history.js\");\n/* harmony import */ var _controllers_history_history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_controllers_history_history__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/scripts/history.js?");

/***/ }),

/***/ "./src/scripts/views/history/history.art":
/*!***********************************************!*\
  !*** ./src/scripts/views/history/history.art ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $imports = __webpack_require__(/*! ../../../../node_modules/art-template/lib/runtime.js */ \"./node_modules/art-template/lib/runtime.js\");\nmodule.exports = function ($data) {\n    'use strict';\n    $data = $data || {};\n    var $$out = '';\n    $$out += '<header class=\"header-tabs\">\\r\\n    <div class=\"header-back\"></div>\\r\\n    <div class=\"header-group\">\\r\\n        <div class=\"header-title\">收藏</div>\\r\\n        <div class=\"header-title active\">历史</div>\\r\\n    </div>\\r\\n</header>\\r\\n\\r\\n<section class=\"comic-cue\">\\r\\n    <div class=\"cue\">\\r\\n        <div class=\"cue-pic\"></div>\\r\\n        <p class=\"fav-text\">还未欣赏过任何漫画哦~</p>\\r\\n    </div>\\r\\n</section>';\n    return $$out;\n};\n\n//# sourceURL=webpack:///./src/scripts/views/history/history.art?");

/***/ })

/******/ });