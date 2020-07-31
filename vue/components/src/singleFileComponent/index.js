import Vue from "vue";
import App from "./app.vue";

const vm = new Vue({
    render:createElement => createElement(App)
}).$mount('#root4sfc');