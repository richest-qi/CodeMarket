import React from "react";
import BaseInput from "../baseInput";
import "./app.css";

class App extends React.Component{
    constructor(props){
        super(props);
        this.onInput = (value) => {
            console.log("input:",value);
        }
        this.onChange = (value) => {
            console.log("change:",value);
        }
    }
    render(){
        return (
            <>
            <div id="logo"></div>
            <BaseInput 
                defaultValue="在Google上搜索，或者输入一个网址"
                onInput={this.onInput}
                onChange={this.onChange}
            />                
            </>
        )
    }
}

export default App;