

## 1.模块化
模块化是指把一个复杂的系统分解到多个模块以方便编码.

## 1.1 命名空间
开发网页要通过命名空间的方式来组织代码.
- 命名空间冲突，两个库可能会使用同一个名称.
- 无法合理地管理项目的依赖和版本.
- 无法方便地控制依赖的加载循序.

### 1.2.CommonJs 规范.
CommonJS 是一种广泛的`Javascript` 模块化规范, 核心思想是通过`require`方法来同步地加载依赖的其他模块，通过
module.exports 导出需要暴露的接口.

#### 1.2.1 用法
采用 CommonJs 导入及导出时的代码如下:

// 导入
const moduleA = require('./moduleA');

// 导出
module.exports.

## 1.3 AMD
AMD 也是一种Javascript 模块化规范,与 CommonJs 最大的不同在于它采用异步的方式去加载依赖的模块.
AMD 规范主要是为了解决针对浏览器环境的模块化问题，
最具代表性的实现是requirejs.

AMD的优点:
- 可在不转换代码的情况下直接在浏览器中运行.
- 可加载多个依赖。
- 代码可运行在浏览器环境和node.js 环境下.

AMD 的缺点:

## 2. 自动化构建
构建就是做这件事情,把源代码转换成发布到线上可执行 Javascirpt、css、html代码,包括如下内容:

- 代码转换：ECMASCRIPT 6 编译成ECMASCRIPTS5,LESS 编译成CSS等
- 文件优化：压缩JAVASCRIPT、CSS、HTML代码,压缩合并图片等.
- 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载.
- 模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件.
- 自动刷新：监听本地源代码的变化, 自动重新构建, 刷新浏览器.
- 代码校验：在代码被提交到仓库前需要校验是否符合规范,以及单元测试是否通过.
- 自动发布：更新代码后, 自动构建出线上发布代码并传输给发布系统.

## 3.webpack（style-loader）
webpack 是一个打包模块化 Javascript 的工具, 在webpack里 一切文件皆模块, 通过loader 转换文件，通过Plugin 注入钩子,
最后输出多个模块组合成的文件. webpack 专注于构建模块化项目.

一切文件: Javascript、css、scss、图片、模板、在webpack眼中都是一个模块, 这样的好处是能清晰的描述出各个模块之间的依赖关系,
以方便webpack 对模块进行组合和打包,经过webpack 的处理，最终会输出浏览器能使用的静态资源.

// npm init -y
// 全局安装 npm install webpack -g
// npx webpack
// npx webpack --mode development

## 4.手写webpack
- 读取文件分析模块依赖
- 对模块进行解析执行(深度遍历)
- 针对不同的模块使用相应的loader
- 编译模块，生成抽象语法树AST。
- 循环遍历AST树，拼接输出js。

## 4.1 如何编写一个webpack loader
- loader 本质上是一个函数.
- 创建loader的目录及模块文件.
- 在 webpack 中配置 rule 及 loader 的解析路径.
- 遵循原则设计和开发 loader.

```js
html-minify-loader.js
var Minimize = require('minimize');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    console.log("source",source);
    var callback = this.async();
    if (this.cacheable) {
        this.cacheable();
    }
    var opts = loaderUtils.getOptions(this) || {};
    console.log("opts",opts);
    var minimize = new Minimize(opts);
    minimize.parse(source, callback);
};

```


