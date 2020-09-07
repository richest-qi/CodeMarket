const express = require("express");
const server = express();
server.use(express.static(__dirname));

// const bodyPraser = require("body-parser");
// server.use(bodyPraser.json());
const test = require("./test.js");
server.use(test());

const fs = require("fs");
const jsonPath = "./data/list.json";
const encoding = "utf8";
const readJsonFile = function(){
    return new Promise((resolve,reject) => {
        fs.readFile(jsonPath,encoding,function(err,data){
            if(err) reject(err);
            resolve(JSON.parse(data));
        })
    })
}
const getUserList = async function(){
    const users = await readJsonFile();
    return users;
}

const updateUserList = function(data,callback){
    fs.writeFile(jsonPath,data,encoding,callback);
}
server.get("/userlist",function(req,res){
    getUserList().then(function(users){
        res.set("Content-Type","application/json");
        res.status(200).json(users);
    })
});
server.get("/getuser/:id",function(req,res){
    const id = req.params.id;
    getUserList().then(function(users){
        const user = users[id];
        res.json(user);
    })    
})
server.get("/getuser",function(req,res){
    const id = req.query.id;
    getUserList().then(function(users){
        const user = users[id];
        res.json(user);
    })
});

server.post("/adduser",function(req,res){
    getUserList().then(function(users){
        const obj = req.body;
        const {id,...rest} = obj;
        if(users[id]) {
            res.send("user has existed");
            return;
        }
        users[id] = rest;
        const data = JSON.stringify(users,null,4);
        updateUserList(data,function(){
            res.status(200).send("add success");
        })
    })
})

server.put("/updateuser",function(req,res){
    const {id,name,email,address} = req.body;
    getUserList().then(function(users){
        if(!users[id]) {
            res.send("No such user");
            return;
        }
        email && (users[id].email = email);
        name && (users[id].name = name);
        address && (users[id].address = address);
        const data = JSON.stringify(users,null,4);
        updateUserList(data,function(){
            res.status(200).send("update success");
        });
    })
})

server.delete("/deleteuser",function(req,res){
    const {id} = req.query;
    getUserList().then(function(users){
        if(!users[id]) {
            res.send("No such user");
            return;
        }
        delete users[id];
        const data = JSON.stringify(users,null,4);
        updateUserList(data,function(){
            res.status(200).send("delete success");
        })
    })
})
server.listen(3000,function(){
    console.log("listening on *:3000");
})