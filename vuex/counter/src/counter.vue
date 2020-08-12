<template>
    <div>
        <!-- <span>{{$store.state.count}}</span> -->
        <span>{{count}} is {{evenOrOdd}}</span>
        <button v-on:click="handleIncrement">+</button>
        <button v-on:click="handleDecrement">-</button>
    </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";
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
    methods:{
        handleIncrement:function(){
            this.$store.commit("increment");
        },
        handleDecrement:function(){
            this.$store.commit("decrement");
        }
    }
}
</script>

