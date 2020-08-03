import Vue from "vue";
import App from "./app.vue";

const getChildrenTextContent = children => {
    return children.map(node => {
        return node.children ?
                getChildrenTextContent:
                node.text;
    }).join("");
}
Vue.component("AnchoredHeading",{
    render:function(createElement){
        console.log(this.$slots.default);
        var headingId = getChildrenTextContent(this.$slots.default)
                    .toLowerCase()
                    .replace(/\W+/g,'-')
                    .replace(/^-|-$/g,'');
        return createElement(
            'h'+this.level,
            [
                createElement(
                    'a',
                    {
                        attrs:{
                            id:headingId,
                            href:'#'+headingId
                        }
                    },
                    this.$slots.default
                )
            ]
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