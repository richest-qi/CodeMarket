const express = require("express");
const server = express();
server.use(express.static(__dirname));
server.get("/data",function(req,res){
    const user = {
        name:"左一",
        address:"上海 "
    }
    res.json(user);
});
server.get("/name",function(req,res){
    const name = "左一";
    res.send(name);
})
server.listen("3030",function(){
    console.log("listening on *:3030");
})