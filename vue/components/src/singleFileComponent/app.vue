<template>
    <div class="container4sfc">
        <div>single file component</div>
        <AnchoredHeading v-bind:level="1">hello</AnchoredHeading>        
        <AnchoredHeading v-bind:level="2">world</AnchoredHeading>    
        <AnchoredHeading v-bind:level="3">have</AnchoredHeading>    
        <AnchoredHeading v-bind:level="4">a</AnchoredHeading>    
        <AnchoredHeading v-bind:level="5">nice</AnchoredHeading>    
        <AnchoredHeading v-bind:level="6">day</AnchoredHeading>    
    </div>
</template>

<script>
import AnchoredHeading from "./anchoredHeading.vue";
export default {
    components:{
        AnchoredHeading
    }
}
</script>

<style>
.container4sfc{
    color:lightblue;
}
</style>