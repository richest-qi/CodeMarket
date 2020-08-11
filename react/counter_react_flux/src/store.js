import {EventEmitter} from "events";
import Dispatcher from "./dispatcher.js";

const Store = Object.assign({},EventEmitter.prototype,{
    values:[1,10]
    // emit:function(eventName){
    //     this.emit(eventName);
    // },
    // on:function(eventName,callback){
    //     this.on(eventName,callback);
    // },
    // off:function(eventName,callback){
    //     this.off(eventName,callback);
    // }
});

Dispatcher.register(({type,id}) => {
    if(type==="increment"){
        Store.values[id]++;
    }else if(type==="decrement"){
        Store.values[id]--;
    }
    Store.emit("changed");
})

export default Store;