function DataCreator(){
    this.dotNum = 10;
    this.interval = 1000;
    this.lastStartTime = undefined;
    this.lastValues = [];
    this.times = [];
    this.values = [];
}
DataCreator.prototype.createTimes = function(){
    let {lastStartTime,dotNum,interval} = this;
    let startTime = lastStartTime?lastStartTime:new Date().getTime();
    this.lastStartTime = startTime + interval;

    let times = [];        
    for(var i=0;i<dotNum;++i){
        var time = new Date(startTime+i*interval);
        times.push(time);
    }
    return times;   
}
DataCreator.prototype.createValues = function(){
    let {lastValues,dotNum} = this;
    let values;
    if(lastValues.length === 0){
        values = [];
        for(var i=0;i<dotNum;++i){
            var value = parseFloat(Math.random().toFixed(2));
            values.push(value);
        }
    }else {
        values = lastValues.slice(1);
        values.push(parseFloat(Math.random().toFixed(2)));
    }
    this.lastValues = values.slice();
    return values;
}
DataCreator.prototype.initData = function(){
    var startTime = new Date().getTime();
    this.times = this.createTimes();
    this.values = this.createValues();   
}
DataCreator.prototype.startTimer = function(){
    this.initData();
    const self = this;
    const {interval} = self;
    const fn = function(){
        self.times = self.createTimes();
        self.values = self.createValues();  
        timer = setTimeout(fn,interval); 
    };
    fn();
}

module.exports = DataCreator;

