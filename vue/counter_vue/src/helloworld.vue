<template>
    <div>
        <p>{{message}}</p>
        <p>{{reversedMessage}}</p>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            message:"hello world"
        }
    },
    computed:{
        reversedMessage:function(){
            return this.message.split("").reverse().join("");
        }
    },
    mounted:function(){
        setTimeout(() => {
            this.message = "have a nice day";
        },3000);
    }
}
</script>