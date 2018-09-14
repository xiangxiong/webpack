(function(modules) { 
    function require(moduleId) {

        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require("./src/index.js");
})
({
     "./src/index.js":
    (function(module, exports, require) {
    eval("let result = require(/*! ./a.js */ \"./src/a.js\");\nconsole.log(result);\n \n\n//# sourceURL=webpack:///./src/index.js?");
     }),
     "./src/a.js":
     (function(module, exports) {
    eval("module.exports = 'webpack';\n\n//# sourceURL=webpack:///./src/a.js?");
    })
});