import React from "react";
import "./App.css";


import {Form,List} from "./list";
import {Tabs} from "./tabs";

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