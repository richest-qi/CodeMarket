import {INCREMENT,DECREMENT} from "./actionTypes.js";
import Dispatcher from "../dispatcher.js";

export const increment = (id) => {
    Dispatcher.dispatch({
        type:INCREMENT,
        id:id
    })
}

export const decrement = (id) => {
    Dispatcher.dispatch({
        type:DECREMENT,
        id:id
    })
}