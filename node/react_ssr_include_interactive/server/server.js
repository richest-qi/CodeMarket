
import express from "express";
import path from "path";
import {renderToString} from "react-dom/server";
import React from "react";
import Helloworld from "../src/Helloworld.js";

const app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../views"));
app.use(express.static("./dist"));

app.get("/", (req,res) => {
    const appHTML = renderToString(<Helloworld/>) ;
    res.render("index.ejs",{
        appHTML:appHTML
    })
})

module.exports = app;