var timer;
const worker = self;
worker.onmessage = function(event){
    const {type} = event.data;
    switch(type){
        case "opening timer": openTimer();break;
        case "closing timer":closeTimer();break;
    }
}


function openTimer(){
    timer = setInterval(getDataFromServer,250);
}
function closeTimer(){
    clearInterval(timer);
    worker.postMessage({
        type:"closed"
    });
    worker.close();
}

const createXHR = createXHRCreator();
function getDataFromServer(){
    const xhr = createXHR();
    xhr.open("GET","/getData");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            worker.postMessage({
                type:"datas",
                datas:JSON.parse(xhr.response)
            })  
        }
    }
    xhr.send();
}
function createXHRCreator(){
    if(typeof XMLHttpRequest !== "undefined"){
        return function createXHR(){
            return new XMLHttpRequest();
        }
    }else if("ActiveXObject" in window){
        return function createXHR(){
            if(typeof arguments.callee.activeXString !== "string"){
                var versions = [
                    "MSXML2.XMLHttp.6.0",
                    "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp"];
                for(var i=0;i<versions.length;i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    }catch(e){
                        throw new Error(e);
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        }
    }else{
        return function createXHR(){
            throw new Error("No XHR object supported");
        }
    }
}

