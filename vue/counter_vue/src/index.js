import Vue from "vue";


import CounterPanel from "./counterPanel.vue";
const vm = new Vue({
    render:function(createElement){
        return createElement(CounterPanel);
    }
}).$mount('#root');


// import Helloworld from "./helloworld.vue";
// const vm = new Vue({
//     render:function(createElement){
//         return createElement(Helloworld);
//     }
// }).$mount('#root');