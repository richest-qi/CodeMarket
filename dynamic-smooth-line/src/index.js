var startBtn=null,endBtn = null;
initButtons();
const myChart = new MyChart(document.getElementById("myChart"));
myChart.init();

const worker = new Worker("./worker.js");
worker.onmessage = function(event){
    const {type,datas} = event.data;
    switch(type){
        case "datas":myChart.update(datas);break;
        case "closed":
            startBtn.enable();
            worker.terminate();
            break;
    }
}
function startTimer(){
    worker.postMessage({
        type:"opening timer"
    });
}
function closeTimer(timer){
    worker.postMessage({
        type:"closing timer"
    });
}
function initButtons(){
    startBtn = new MyButton(document.querySelector("#start"));
    startBtn.addEventListener("click",function(){
        startTimer();
        startBtn.disable();
    });
    
    endBtn = new MyButton(document.querySelector("#end"));
    endBtn.addEventListener("click",function(){
        closeTimer();   
    });
}

