/******/ (function(modules) { // webpackBootstrap
/******/ 	function require(moduleId) {  // moduleid 代表的就是文件名.
/******/ 		var module = {
/******/ 			exports: {}
/******/ 		};
/******/ 		modules[moduleId].call(module.exports, module, module.exports, require);
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	return require(__webpack_require__.s = "./src/index.js");
/******/ })

({"./src/index.js":
(function(module, exports) {
    eval("console.log('研究webpack原理');\n\n\n//# sourceURL=webpack:///./src/index.js?");
    })
 });