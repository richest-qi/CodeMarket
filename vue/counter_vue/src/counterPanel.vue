<template>
    <div class="panel">
        {
            values.map((value,idx) => <Counter 
                v-bind:key="idx"
                v-bind:value="value"
                v-on:increment="handleIncrement(idx)"
                v-on:decrement="handleDecrement(idx)"
            />)
        }
        <!-- <Counter v-for="(value,idx) in values" 
                v-bind:key="idx"
                v-bind:value="value"
                v-on:increment="handleIncrement(idx)"
                v-on:decrement="handleDecrement(idx)"
        /> -->
        <div class="sum">{{sum}}</div>
    </div>
</template>

<script>
import Counter from "./counter.vue";
export default {
    data:function(){
        return {
            values:[1,10]
        }
    },
    computed:{
        sum:function(){
            return this.computeSum()
        }
    },
    methods:{
        computeSum:function(){
            return this.values.reduce((sum,value) => sum+=value,0)
        },
        handleIncrement:function(idx){
            this.values[idx]++;
            // this.values.splice(idx,1,this.values[idx]+1);
            // this.$set(this.values,idx,this.values[idx]+1);
        },
        handleDecrement:function(idx){
            this.values[idx]--;
            // this.values.splice(idx,1,this.values[idx]-1);
            // this.$set(this.values,idx,this.values[idx]-1);
        }
    },
    components:{
        Counter
    }
}
</script>

<style>
.panel{
    font-size:0.75em;
    font-weight:bold;
    margin:10px;
}
.sum{
    border-top:2px solid ;
    padding-left:95px;
    width:20px;
}
</style>