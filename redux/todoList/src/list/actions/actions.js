import {ADD,REMOVE,TOGGLE} from "./actionTypes.js";

let id = 99;

export const add = text => ({
    type:ADD,
    text:text,
    id:id++,
    isDone:false
})

export const remove = id => ({
    type:REMOVE,
    id:id
})

export const toggle = id => ({
    type:TOGGLE,
    id:id
})