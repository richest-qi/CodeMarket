## express
```javascript
var express = require('express')
var app = express()
```
* `app.set(name, value)`<br>
    * 可以存储任意值
    ```javascript
    app.set("foo","bar");
    const res = app.get("foo");
    console.log(res); //输出"bar"
    ```

    *  `app.set(name,true)`同`app.enable(name)`<br>
    `app.set(name,false)`同`app.disable(name)`
    ```javascript
    app.set("foo",true);
    //app.enable("foo");
    const res = app.get("foo");
    console.log(res); //输出true
    ```
    ```javascript
    app.set("foo",false);
    //app.disable("foo");
    const res = app.get("foo");
    console.log(res);//输出false
    ````
    * 某些值是用来配置服务器的<br>
        * view engine<br>
        模板引擎，默认值是undefined。<br>
        ```javascript
        app.set("view engine","pug")
        ```
        * views<br>
        视图目录，即模板文件所在目录，默认值是`process.cwd() + '/views'`
        ```javascript
        app.set("views",path.join(__dirname,"views"))
        ```
        * jsonp callback name<br>
        jsonp回调函数名，默认是"callback"。
* `res.render(view [, locals] [, callback])`<br>
渲染视图，并将渲染得到的HTML字符串发送给客户端。<br>
`view`：是一个字符串，被渲染的视图，其模板文件所在路径；<br>
`locals`：可选，是一个对象，对象属性都是模板文件要用到的参数；<br>
`callback`：可选，回调函数。

    * `res.render("index.pug")`<br>
    ```javascript
    doctype html
    html
        title testDemo
        body
            h1 hello world
    ```
    ```javascript
    const express = require("express");
    const app = express();
    app.get("/",res => {
        res.render("index.pug");
    })
    ```
    * `res.render("index.pug",locals)`<br>
    ```javascript
    doctype html
    html
        title=title
        body
            h1=msg
    ```
    ```javascript
    const express = require("express");
    const app = express();
    app.get("/",res => {
        res.render("index.pug",{
            title:"testDemo",
            msg:"hello world"
        });
    })
    ```
    * `res.render("index.pug",locals,callback)`<br>
    ```javascript
    doctype html
    html
        title=title
        body
            h1=msg
    ```
    ```javascript
    const express = require("express");
    const app = express();
    app.get("/",res => {
        res.render("index.pug",{
            title:"testDemo",
            msg:"hello world"
        },(err,html) => {
            if(err) throw new Error("An error occurred!");
            res.send(html);
        });
    })
