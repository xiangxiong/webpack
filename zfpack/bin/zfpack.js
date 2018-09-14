#! /usr/bin/env node

// 这个文件就要描述如何打包.
let entry = './src/index.js'; //入口文件
let out = './dist/main.js'; // 出口文件

let fs = require('fs');
let path = require('path');
let script = fs.readFileSync(entry,'utf-8');
let modules = [];

// 处理多个依赖关系.
script.replace(/require\(['"](.+?)['"]\)/g,function(){
    let name = arguments[1] ; // a.js
    let content = fs.readFileSync(path.join('./src',arguments[1]),'utf-8');
    modules.push({
        name,content
    });
    return `require('${name}')`
});

let ejs = require('ejs');

// 处理依赖关系. 多个文件打包.

// let name = '100';
// ejs.render('<a><%=name%></a>',{name});
// console.log(ejs.render('<a><%=name%></a>',{name}));

let template =`(function(modules) { 
    function require(moduleId) {

        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require("<%-entry%>");
})
({
     "<%-entry%>":
    (function(module, exports, require) {
        eval(\`<%-script%>\`);
     })
     <%for(let i = 0;i<modules.length;i++){
         let module = modules[i];%>,
         "<%-module.name%>":
         (function(module, exports, require) {
             eval(\`<%-module.content%>\`)
          })
     <%}%>
});`;


    let result = ejs.render(template,{
         entry,
         script,
         modules
     });
    
     

     //result 为替换后的结果，最终要写入output 中.
     fs.writeFileSync(out,result);
     console.log("编译成功");