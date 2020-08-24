
`npm run start`<br>
```javascript
D:\workspace\CodeMarket\node\react_ssr_webpack_dev_middleware>npm run start

> ssr@1.0.0 start D:\workspace\CodeMarket\node\react_ssr_webpack_dev_middleware
> node ./server/index.js

listening on *:3030
‼ ｢wdm｣: Hash: 904bbd74edfae2e0123a
Version: webpack 4.44.1
Time: 2002ms
Built at: 2020-08-24 9:43:52 ├F10: PM┤
          Asset       Size  Chunks             Chunk Names
index.bundle.js    128 KiB       0  [emitted]  index
  template.html  237 bytes          [emitted]
Entrypoint index = index.bundle.js
[0] ./node_modules/react/index.js 190 bytes {0} [built]
[1] ./node_modules/object-assign/index.js 2.06 KiB {0} [built]
[2] ./node_modules/react-dom/index.js 1.33 KiB {0} [built]
[3] ./node_modules/react/cjs/react.production.min.js 6.52 KiB {0} [built]
[4] ./node_modules/react-dom/cjs/react-dom.production.min.js 116 KiB {0} [built]
[5] ./node_modules/scheduler/index.js 198 bytes {0} [built]
[6] ./node_modules/scheduler/cjs/scheduler.production.min.js 4.92 KiB {0} [built]
[7] ./src/index.js + 1 modules 561 bytes {0} [built]
    | ./src/index.js 205 bytes [built]
    | ./src/Helloworld.js 346 bytes [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
Child HtmlWebpackCompiler:
                          Asset      Size  Chunks  Chunk Names
    __child-HtmlWebpackPlugin_0  4.11 KiB       0  HtmlWebpackPlugin_0
    Entrypoint HtmlWebpackPlugin_0 = __child-HtmlWebpackPlugin_0
    [0] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html 530 bytes {0} [built]
i ｢wdm｣: Compiled with warnings.
```
点击文本"hello world"，控制台打印出"clicked"。

## node+webpack_dev_middleware
```javascript
//webpack.config.js
    output:{
        filename:"[name].bundle.js",
        path:path.join(__dirname,"dist"),
        publicPath:"/"
    }
```
```javascript
//server.js
const config = require("../webpack.config.js");
const compiler = webpack(config);
const WebpackDevMiddleware = require("webpack-dev-middleware");
const app = express();
app.use(WebpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}))
```
## 问题
* 服务端渲染<br>
`renderToString(<Helloworld/>)` 的结果是，产生如下字符串：<br>
`<div>Hello world</div><div>have a nice day</div>`。<br>
该内容在服务端完成渲染后被发送至浏览器端。

* 浏览器端渲染<br>
`<script src="index.bundle.js"></script>`则是浏览器端的渲染过程。
<br>

浏览器打开地址栏`localhost://3000`，先服务端渲染，后浏览器端渲染。<br>
由于服务器端渲染的内容与浏览器端渲染的内容不一致，因此页面有跳动。<br>
浏览器端的渲染多了一个点击事件。


## 参考文档
[node+webpack_dev_middleware](https://webpack.docschina.org/guides/development/)