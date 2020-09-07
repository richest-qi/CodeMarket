module.exports = function(){
    return function(req,res,next){
        var body = "";
        req.on("data",function(chunk){
            body+=chunk;
        });
        req.on("end",function(){
            if(body) {
                req.body = JSON.parse(body); 
            }
            next();
        })
    }
}