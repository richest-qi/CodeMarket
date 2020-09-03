const express = require("express");
const server = express();
server.use(express.static(__dirname));
server.get("/getData",function(req,res){
    res.set('Access-Control-Allow-Origin',"http://localhost:3000");
    const callback = req.query.callback;
    res.end(callback+"('Nicholas')");
})
server.listen(3030,() => {
    console.log("listenning on *:3030");
})

// const express = require("express");
// const server = express();
// const cors = require("cors");
// server.use(cors());
// server.use(express.static(__dirname));
// server.get("/getData",function(req,res){
//     const callback = req.query.callback;
//     res.end(callback+"(Nicholas)");
// })
// server.listen(3030,() => {
//     console.log("listenning on *:3030");
// })