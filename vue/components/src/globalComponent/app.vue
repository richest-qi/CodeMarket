<template>
    <div class="container4gc">
        <div>global component</div>
        <AnchoredHeading4gc v-bind:level="1">hello</AnchoredHeading4gc>        
        <AnchoredHeading4gc v-bind:level="2">world</AnchoredHeading4gc>    
        <AnchoredHeading4gc v-bind:level="3">have</AnchoredHeading4gc>    
        <AnchoredHeading4gc v-bind:level="4">a</AnchoredHeading4gc>    
        <AnchoredHeading4gc v-bind:level="5">nice</AnchoredHeading4gc>    
        <AnchoredHeading4gc v-bind:level="6">day</AnchoredHeading4gc> 
    </div>
</template>


<style>
.container4gc{
    color:lightpink;
}
</style>