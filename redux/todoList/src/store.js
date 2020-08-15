import {createStore,combineReducers} from "redux";

import {listReducer} from "./list";
import {tabIdReducer,ALL} from "./tabs";
const reducer = combineReducers({
    list:listReducer,
    tabId:tabIdReducer
})

export default createStore(reducer);