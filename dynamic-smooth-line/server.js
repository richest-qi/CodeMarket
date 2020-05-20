const DataCreator = require("./DataCreator.js");
const dc = new DataCreator();
dc.startTimer();
const express = require("express");
const server = express();
const path = require("path");
server.use(express.static(path.join(__dirname,"src")));
server.get("/getData",function(req,res){
    res.writeHead(200,{"Content-Type":"application/json"});
    const {times,values} = dc;
    res.end(JSON.stringify({
        times,
        values
    }));
});
server.listen(3000,function(){
    console.log("listening on*:3000");
})
