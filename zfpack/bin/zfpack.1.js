#! /usr/bin/env node

// 这个文件就要描述如何打包.

let entry = './src/index.js'; //入口文件
let out = './dist/main.js'; // 出口文件

let fs = require('fs');

let script = fs.readFileSync(entry,'utf-8');

let ejs = require('ejs');
// let name = '100';
// ejs.render('<a><%=name%></a>',{name});
// console.log(ejs.render('<a><%=name%></a>',{name}));

let template =`/******/ (function(modules) { // webpackBootstrap
    /******/ 	function require(moduleId) {  // moduleid 代表的就是文件名.
    /******/ 		var module = {
    /******/ 			exports: {}
    /******/ 		};
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, require);
    /******/ 		return module.exports;
    /******/ 	}
    /******/
    /******/ 	return require("<%-entry%>");
    /******/ })
    
    ({"./src/index.js":
    (function(module, exports) {
        eval(\`<%-script%>\`);
        })
     });`;

    let result = ejs.render(template,{
         entry,
         script
     });

     //result 为替换后的结果，最终要写入output 中.
     fs.writeFileSync(out,result);
     console.log("编译成功");

