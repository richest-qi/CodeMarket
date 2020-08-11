<template>
    <div class="counter">
        <button class="button" v-on:click="onIncrement">+</button>
        <button class="button" v-on:click="onDecrement">-</button>
        <span>{{value}}</span>
    </div>
</template>

<script>
export default {
    props:["value"],
    methods:{
        onIncrement:function(){
            this.$emit("increment");
        },
        onDecrement:function(){
            this.$emit("decrement");
        }
    }
}
</script>

<style>
.button{
    background-color: lavender;
    border: 5px solid transparent;
    margin: 10px;
}
.button:hover{
    cursor:pointer;
}
.button:focus{
    outline:none;
}
.counter{
    font-size:0.75em;
}
</style>