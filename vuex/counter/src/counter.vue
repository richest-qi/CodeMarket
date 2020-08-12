<template>
    <div>
        <!-- <span>{{$store.state.count}}</span> -->
        <span>{{count}}</span>
        <button v-on:click="handleIncrement">+</button>
        <button v-on:click="handleDecrement">-</button>
    </div>
</template>

<script>
export default {
    // data:function(){
    //     return {
    //         count:this.$store.state.count
    //     }
    // },
    computed:{
        count:function(){
            return this.$store.state.count
        }
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