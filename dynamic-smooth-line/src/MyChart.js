(function(win){
    function MyChart(elm){
        this.elm = elm;
        this.chart = echarts.init(elm); 
        this.chart.gap = 40;
    }
    MyChart.prototype.init = function(){
        const times = [];
        const values = [];
        const gap = this.chart.gap;
        const option = {
            grid:{
                bottom:60,
                top:gap,
                left:gap,
                right:gap,                
            },
            xAxis: {
                type: 'category',
                data:times,
                axisLabel:{
                    rotate:45
                },
                axisTick: {
                    alignWithLabel: true
                },
                name:"时间"
                
            },
            yAxis: {
                type: 'value',
                min:0,
                max:1,
                name:"带宽利用率"
            },
            series: [{
                data:values,
                type: 'line',
                smooth: true
            }],
            tooltip: {
                trigger: 'axis',
                axisPointer: {       
                    type:"line"      
                }
            }
        };
        this.chart.setOption(option);
    }
    MyChart.prototype.update = function(data){
        const {times,values} = data;
        const formatedTimes = times.map(t => formatTime(new Date(t)));
        console.log(formatedTimes);
        this.chart.setOption({
            xAxis:{
                data:formatedTimes
            },
            series:[{
                data:values
            }]
        });  
    }

    function formatTime(time){
        const hour = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const h = hour<10 ? "0"+hour : hour;
        const m = min<10  ? "0"+min : min;
        const s = sec<10 ? "0"+sec : sec;
        return h+":"+m+":"+s;
    }

    win.MyChart = MyChart;
}(window))