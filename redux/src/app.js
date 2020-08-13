import React from "react";
import "./app.css";
import Form from "./list/views/form.js";
import List from "./list/views/list.js";
import Tabs from "./tabs/views/tabs.js";

function App(props){
    return (
        <div className="container">
            <Form/>
            <div className="content">
                <Tabs/>
                <List/>
            </div>

        </div>
    )
}

export default App;