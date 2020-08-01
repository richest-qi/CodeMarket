import Vue from "vue";
import App from "./app.vue";

Vue.component("AnchoredHeading",{
    render:function(createElement){
        return createElement(
            "h"+this.level,
            this.$slots.default
        )
    },
    props:{
        level:{
            type:Number,
            required:true
        }
    }
});

const vm = new Vue({
    render:createElement => createElement(App)
}).$mount('#root');