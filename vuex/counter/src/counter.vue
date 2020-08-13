<template>
    <div>
        <!-- <span>{{$store.state.count}}</span> -->
        <span>{{count}} is {{evenOrOdd}}</span>
        <!-- <button v-on:click="handleIncrement">+</button>
        <button v-on:click="handleDecrement">-</button> -->
        <!-- <button v-on:click="incrementAsync">+</button>
        <button v-on:click="decrementAsync">-</button> -->
        <button v-on:click="handleIncrementAsync">++</button>
        <button v-on:click="handleDecrementAsync">--</button>
        <!-- <button v-on:click="increment">+</button>
        <button v-on:click="decrement">-</button> -->
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex";
export default {
    // data:function(){
    //     return {
    //         count:this.$store.state.count
    //     }
    // },

    // computed:{
    //     count:function(){
    //         return this.$store.state.count
    //     }
    // },

    // computed:mapState({
    //     count:state => state.count
    // }),

    // computed:mapState(['count']),

    // computed:{
    //     count:function(){
    //         return this.$store.state.count;
    //     },
    //     evenOrOdd:function(){
    //         return this.$store.getters.evenOrOdd;
    //     }
    // },

    computed:{
        ...mapState(['count']),
        ...mapGetters(['evenOrOdd'])
    },


    // methods:{
    //     handleIncrement:function(){
    //         this.$store.commit("increment","hello","world");
    //     },
    //     handleDecrement:function(){
    //         this.$store.commit("decrement","have","a","nice","day");
    //     },
    //     // handleIncrementAsync:function(){
    //     //     this.$store.dispatch("incrementAsync");
    //     // },
    //     // handleDecrementAsync:function(){
    //     //     this.$store.dispatch("decrementAsync");
    //     // }
    //     // handleIncrementAsync:function(){
    //     //     this.$store.dispatch("incrementAsync",{
    //     //         m:10
    //     //     });
    //     // },
    //     // handleDecrementAsync:function(){
    //     //     this.$store.dispatch("decrementAsync",{
    //     //         n:5
    //     //     })
    //     // }
    //     // handleIncrementAsync:function(){
    //     //     this.$store.dispatch({
    //     //         type:"incrementAsync",
    //     //         m:10
    //     //     })
    //     // },
    //     // handleDecrementAsync:function(){
    //     //     this.$store.dispatch({
    //     //         type:"decrementAsync",
    //     //         n:5
    //     //     })
    //     // }
    // }

    // methods:mapMutations([
    //     "increment",
    //     "decrement"
    // ]),

    // methods:{
    //     handleIncrement:function(){
    //         this.$store.commit("increment",{
    //             m:10
    //         });
    //     },
    //     handleDecrement:function(){
    //         this.$store.commit("decrement",{
    //             n:5
    //         });
    //     }
    // }

    // methods:{
    //     handleIncrement:function(){
    //         this.$store.commit({
    //             type:"increment",
    //             m:10
    //         })
    //     },
    //     handleDecrement:function(){
    //         this.$store.commit({
    //             type:"decrement",
    //             n:5
    //         })
    //     }
    // }
    // methods:mapActions([
    //     "incrementAsync",
    //     "decrmentAsync"
    // ])
    // methods:mapActions({
    //     handleIncrementAsync:"incrementAsync",
    //     handleDecrementAsync:"decrementAsync"
    // })
    methods:{
        handleIncrementAsync:function(){
            this.$store.dispatch("incrementAsync").then(() => {
                console.log("increment:done!");
            })
        },
        handleDecrementAsync:function(){
            this.$store.dispatch("decrementAsync");
        }
    }
}
</script>

