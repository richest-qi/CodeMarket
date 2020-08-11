import {createStore} from "redux";
import reducer from "./reducer.js";

const values = [1,10];
export default createStore(reducer,values);