import express from "express";
import {renderToString} from "react-dom/server";
import React from "react";
import Helloworld from "../components/Helloworld.js";

const app = express();
app.use((req,res) => {
    res.send(renderToString(<Helloworld/>)) ;
})

module.exports = app;