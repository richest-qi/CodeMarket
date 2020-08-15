import {SET_TAB_ID} from "./actions/actionTypes.js";
import {ALL} from "./tabIds.js";
export default (state=ALL,action) => {
    const {type,tabId} = action;
    if(type === SET_TAB_ID){
        return tabId;
    }else{
        return state;
    }
}