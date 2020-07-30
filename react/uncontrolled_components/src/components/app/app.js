import React from "react";
import BaseInput from "../baseInput";
import "./app.css";

class App extends React.Component{
    constructor(props){
        super(props);
        this.onInput = (value) => {
            console.log(value);
        }
    }
    render(){
        return (
            <>
            <div id="logo"></div>
            <BaseInput 
                defaultValue="在Google上搜索，或者输入一个网址"
                onInput={this.onInput}
            />                
            </>
        )
    }
}

export default App;