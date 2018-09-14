// define 声明模块 通过require 使用一个模块.
let factories = {}
function define(moduleName,dependencies,factory){
    factory.dependencies = dependencies; // 将依赖记到factory上.
    factories[moduleName] = factory;
}

function require(mods,callback){
    let results = mods.map(function(mod){
       let factory = factories[mod];
       let exports;
       let dependencies = factory.dependencies;
       // require(['name','age'],function(){});
       require(dependencies,function(...args){
        exports = factory.apply(null,arguments);
       });
       return exports;
    });
    callback.apply(null,results)
}

define('name',[], function() {
    return '珠峰';
});

define('age',[],function(){
    return 9;
});

define('age',[name],function(name){
    return name+9;
});

require(['name','age'],function(name,age){
    console.log(name,age);
});