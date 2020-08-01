<template>
    <div class="container4ic">
        <div>inline component</div>
        <AnchoredHeading4ic v-bind:level="1">hello</AnchoredHeading4ic>        
        <AnchoredHeading4ic v-bind:level="2">world</AnchoredHeading4ic>    
        <AnchoredHeading4ic v-bind:level="3">have</AnchoredHeading4ic>    
        <AnchoredHeading4ic v-bind:level="4">a</AnchoredHeading4ic>    
        <AnchoredHeading4ic v-bind:level="5">nice</AnchoredHeading4ic>    
        <AnchoredHeading4ic v-bind:level="6">day</AnchoredHeading4ic> 
    </div>
</template>


<style>
.container4ic{
    color:lightgray;
}
</style>