<template>
    <div class="container4sfc">
        <div>single file component</div>
        <AnchoredHeading4sfc v-bind:level="1">hello</AnchoredHeading4sfc>        
        <AnchoredHeading4sfc v-bind:level="2">world</AnchoredHeading4sfc>    
        <AnchoredHeading4sfc v-bind:level="3">have</AnchoredHeading4sfc>    
        <AnchoredHeading4sfc v-bind:level="4">a</AnchoredHeading4sfc>    
        <AnchoredHeading4sfc v-bind:level="5">nice</AnchoredHeading4sfc>    
        <AnchoredHeading4sfc v-bind:level="6">day</AnchoredHeading4sfc>    
    </div>
</template>

<script>
import AnchoredHeading4sfc from "./anchoredHeading4sfc.vue";
export default {
    components:{
        AnchoredHeading4sfc
    }
}
</script>

<style>
.container4sfc{
    color:lightblue;
}
</style>