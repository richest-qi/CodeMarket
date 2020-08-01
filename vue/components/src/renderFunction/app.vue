<template>
    <div class="container">
        <div>render function</div>
        <AnchoredHeading v-bind:level="1">hello</AnchoredHeading>        
        <AnchoredHeading v-bind:level="2">world</AnchoredHeading>    
        <AnchoredHeading v-bind:level="3">have</AnchoredHeading>    
        <AnchoredHeading v-bind:level="4">a</AnchoredHeading>    
        <AnchoredHeading v-bind:level="5">nice</AnchoredHeading>    
        <AnchoredHeading v-bind:level="6">day</AnchoredHeading>    
    </div>
</template>


<style>
.container{
    color:#000;
}
</style>