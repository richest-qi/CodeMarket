import {INCREMENT,DECREMENT} from "./actionTypes.js";

export const increment = (id) => ({
    type:INCREMENT,
    id:id
})


export const decrement = (id) => ({
    type:DECREMENT,
    id:id
})