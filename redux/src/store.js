import {createStore,combineReducers} from "redux";
import listReducer from "./list/reducer.js";
import tabIdReducer from "./tabs/reducer.js";
import {ALL} from "./tabs/tabIds.js";
const reducer = combineReducers({
    list:listReducer,
    tabId:tabIdReducer
})

// const initialState = {
//     list: [],
//     tabId:ALL
// }
// export default createStore(reducer,initialState);
export default createStore(reducer);