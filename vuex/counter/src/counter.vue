<template>
    <div>
        <span>{{$store.state.count}}</span>
        <button v-on:click="handleIncrement">+</button>
        <button v-on:click="handleDecrement">-</button>
    </div>
</template>

<script>
export default {
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