import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import CounterPanel from "./counterPanel/counterPanel.js";
import store from "./store.js";

ReactDOM.render(
    <Provider store={store}>  
        <CounterPanel/>
    </Provider>,
    document.getElementById("root")
    )