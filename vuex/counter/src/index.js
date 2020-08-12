import Vue from "vue";
import store from "./store.js";
import Counter from "./Counter.vue";

const vm = new Vue({
    render:function(createElement){
        return createElement(Counter);
    },
    store:store,
    el:"#root"
});