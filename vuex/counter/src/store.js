import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    count:0
}
const getters = {
    evenOrOdd:function(state){
        return state.count%2===0 ? "even" : "odd";
    }
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
    mutations,
    getters
});