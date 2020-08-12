import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    count:0
}

const mutations = {
    increment:function(state){
        state.count++;
    },
    decrement:function(state){
        state.count--;
    }
}

export default new Vuex.Store({
    state,
    mutations
});