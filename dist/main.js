(function(modules) { 
    function require(moduleId) {

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
        eval(`let result = require('./hello.js');
let resultc = require('./c.js');
require('./index.css');
console.log(result);
console.log(resultc);
 `);
     })
     ,
         "./hello.js":
         (function(module, exports, require) {
             eval(`module.exports = 'dddd';`)
          })
     ,
         "./c.js":
         (function(module, exports, require) {
             eval(`module.exports = 'c';`)
          })
     ,
         "./index.css":
         (function(module, exports, require) {
             eval(`
    let style = document.createElement('style');
    style.innerText= "body{background: red;}";
    document.head.appendChild(style)
    `)
          })
     
});