import {INCREMENT,DECREMENT} from "./actions/actionTypes.js";

export default (state,action) => {
    const {type,id} = action;
    var newState = state.slice();
    if(type===INCREMENT){
        newState[id]++;
    }else if(type===DECREMENT){
        newState[id]--;
    }
    return newState;
}