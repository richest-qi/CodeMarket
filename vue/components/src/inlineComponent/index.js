import Vue from "vue";
import App from "./app.vue";

Vue.component("AnchoredHeading4ic",{
    template:"#anchoredHeading4icTemplate",
    props:{
        level:{
            type:Number,
            required:true
        }
    }
})

const vm = new Vue({
    render:createElement => createElement(App)
}).$mount('#root4ic');