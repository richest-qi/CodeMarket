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


// const mutations = {
//     increment:function(state,a,b){
//         state.count++;
//         console.log(a,b);
//     },
//     decrement:function(state,a,b,c,d){
//         state.count--;
//         console.log(a,b,c,d);
//     }
// }

// const mutations = {
//     increment:function(state,m){
//         state.count+=m;
//     },
//     decrement:function(state,n){
//         state.count-=n;
//     }
// }

// const mutations = {
//     increment:function(state,payload){
//         state.count+=payload.m;
//     },
//     decrement:function(state,payload){
//         state.count-=payload.n;
//     }
// }


// const actions = {
//     incrementAsync:function({commit},payload){
//         setTimeout(() => {
//             commit("increment",payload.m);
//         },3000);
//     },
//     decrementAsync:function({commit},payload){
//         setTimeout(() => {
//             commit("decrement",payload.n);
//         },1000);
//     }
// }


// const actions = {
//     incrementAsync:function({commit}){
//         setTimeout(() => {
//             commit("increment");
//         },1000);
//     },
//     decrementAsync:function({commit}){
//         setTimeout(() => {
//             commit("decrement");
//         },1000);
//     }
// }


const actions = {
    incrementAsync:function({commit,state}){
        return new Promise(resolve => {
            setTimeout(() => {
                commit("increment");
                console.log(state.count);
                resolve();
            },1000);
        })
    },
    decrementAsync:async function({commit,dispatch,state}){
        dispatch("incrementAsync");
        await setTimeout(() => {
            commit("decrement");
            console.log("decrement:done!")
        },1000);
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});