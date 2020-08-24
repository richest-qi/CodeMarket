
## babel
将es2017、es2016、es2015新语法转化为es5，让低端运行环境，如浏览器、node，能够识别并运行。<br>
babel本身不具备任何转化功能，它的转化功能被分解到一个个plugin里。
### .babelrc
在项目根目录下，配置转码规则和插件。
```javascript
{
    "presets":[],
    "plugins":[]
}
```
### 语法转译器
* @babel/preset-env<br>
将es2017、es2016、es2015的新语法转化为es5，但不负责转译全局对象和API。
### 全局对象/API转译器
转译全局对象、定义在全局对象上的方法。<br>
全局对象，如Promise，Iterator，Generator，Set，Map，Proxy，Symbol等。<br>
API，如Object.assign()、Array.from()。<br>
此类转译器主要有以下三种。<br>
* @babel/polyfill<br>
会对很多类的原型链进行修改，因此会污染全局变量。<br>
可转译实例方法，如Array.includes(item)。<br>
实际使用中，更倾向@babel/plugin-transform-runtime。<br>
* @babel/plugin-transform-runtime<br>
全自动，不会污染全局。<br>
但不能转译实例方法，如Array.includes(item)，如果必须转译实例方法，就得用@babel/polyfill。<br>
* es6-promise<br>
转译Promise相关API。<br>
### jsx/ts等插件转译器
* @babel/preset-react
* @babel/preset-typescript


### @babel/register
node对es6的支持不好，es6的class、import、react的jsx都无在node中使用，但@babel/register能够将es6转译成es5。<br>
@babel/register会改写`require`命令，所以遇到 用`require`加载`.js`、`.jsx`等文件时 就会先用babel转译。<br>
使用时，必须先`require("@babel/register")`。<br>
@babel/register只会对`require`加载的文件进行转译，不会对当前文件进行转译。因此，在使用`require("@babel/register")`的地方，不能出现es6语法，如import、class等。<br>
@babel/register是实时转译，所以仅适用于开发环境。<br>

## 遇到过的坑
没有 @babel/preset-env 或 @babel/register，则报错：

import express from "express";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:1053:16)
    at Module._compile (internal/modules/cjs/loader.js:1101:27)
    at Module._compile (D:\workspace\CodeMarket\node\react_ssr\node_modules\pirates\lib\index.js:99:24)
    at Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Object.newLoader [as .js] (D:\workspace\CodeMarket\node\react_ssr\node_modules\pirates\lib\index.js:104:7)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Module.require (internal/modules/cjs/loader.js:1025:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (D:\workspace\CodeMarket\node\react_ssr\index.js:2:13)

## 参考文章
[通过babel-register在nodejs端使用es6](https://blog.csdn.net/shidaping/article/details/71403374?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)