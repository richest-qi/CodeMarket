const express = require("express");
const server = express();
server.use(express.static(__dirname));

const {createProxyMiddleware} = require("http-proxy-middleware") ;
server.use("/data",createProxyMiddleware({
    target:"http://localhost:3030",
    changeOrigin:true,
}));


server.listen(3000,() => {
    console.log("listenning on *:3000");
})