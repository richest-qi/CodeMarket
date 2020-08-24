
import express from "express";
import path from "path";
import webpack from "webpack";
import React from "react";
import {renderToString} from "react-dom/server";
import Helloworld from "../src/Helloworld.js";

const config = require("../webpack.config.js");
const compiler = webpack(config);
const WebpackDevMiddleware = require("webpack-dev-middleware");
const app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../views"));
app.use(WebpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}))
app.use(express.static("./dist"));

app.get("/", (req,res) => {
    const appHTML = renderToString(<Helloworld/>) ;
    res.render("index.ejs",{
        appHTML:appHTML
    })
})

module.exports = app;