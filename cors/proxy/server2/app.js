const express = require("express");
const server = express();
server.use(express.static(__dirname));
server.get("/data",function(req,res){
    res.end("hello world");
})
server.listen(3030,() => {
    console.log("listenning on *:3030");
})

