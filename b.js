let fs = require('fs');


// commonJs 规范.
function req(moduleName){
    let content = fs.readFileSync(moduleName,'utf-8');
    // 最后一个参数是函数的内容体
    let fn = new Function('exports','module','require','__dirname','__filename',content+'\n return module.exports');
    let module = {
        exports:{}
    };
    return fn(module.exports,module,req,__dirname,__filename);
}

let str = req('./a.js');

console.log(str);