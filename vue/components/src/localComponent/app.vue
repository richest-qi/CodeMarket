<template>
    <div class="container4lc">
        <div>local component</div>
        <AnchoredHeading4lc v-bind:level="1">hello</AnchoredHeading4lc>        
        <AnchoredHeading4lc v-bind:level="2">world</AnchoredHeading4lc>    
        <AnchoredHeading4lc v-bind:level="3">have</AnchoredHeading4lc>    
        <AnchoredHeading4lc v-bind:level="4">a</AnchoredHeading4lc>    
        <AnchoredHeading4lc v-bind:level="5">nice</AnchoredHeading4lc>    
        <AnchoredHeading4lc v-bind:level="6">day</AnchoredHeading4lc>   
    </div>
</template>

<script>

export default {
    components:{
        AnchoredHeading4lc:{
            template:
                '<h1 v-if="level===1">\
                        <slot></slot>\
                    </h1>\
                    <h2 v-else-if="level===2">\
                        <slot></slot>\
                    </h2>\
                    <h3 v-else-if="level===3">\
                        <slot></slot>\
                    </h3>\
                    <h4 v-else-if="level===4">\
                        <slot></slot>\
                    </h4>\
                    <h5 v-else-if="level===5">\
                        <slot></slot>\
                    </h5>\
                    <h6 v-else-if="level===6">\
                        <slot></slot>\
                    </h6>',
            props:{
                level:{
                    type:Number,
                    required:true
                }
            }
        }
    }
}
</script>

<style>
.container4lc{
    color:lightgreen;
}
</style>