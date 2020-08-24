
* npm run build<br>
```javascript
          Asset       Size  Chunks             Chunk Names
index.bundle.js    128 KiB       0  [emitted]  index
  template.html  236 bytes          [emitted]
```
* npm run start
```javascript
> node ./server/index.js

listening on *:3030
```
点击文本"hello world"，控制台打印出"clicked"。

## 说明
```javascript
app.use(express.static("./dist"));

app.get("/", (req,res) => {
    const appHTML = renderToString(<Helloworld/>) ;
    res.render("index.ejs",{
        appHTML:appHTML
    })
})
```
 `app.use(express.static("./dist"))`，将`dist`目录作为静态目录。<br>
Express Web服务器启动后，`/dist/index.html`将作为入口文件。<br>
此时，后面的`app.get("/",(req,res) => {})`不会被路由到。<br>
为此，将`/dist/index.html`重命名为`/dist/template.html`<br>
```javascript
//webpack.config.js
new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename:"template.html"
})
```

## 参考文档
[react ssr 初体验](https://www.jianshu.com/p/1ff3632056e1)<br>
[Serve static files and app.get conflict using Express.js](https://stackoverflow.com/questions/16088824/serve-static-files-and-app-get-conflict-using-express-js)