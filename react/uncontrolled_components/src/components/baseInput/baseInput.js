import React from "react";
import "./baseInput.css";

class BaseInput extends React.Component{
    constructor(props){
        super(props);
        this.ref = React.createRef();
        this.handleFocus = () => {
            this.ref.current.value="";
        }
        this.handleBlur = () => {
            this.ref.current.value=this.props.defaultValue;
        }
        this.handleInput = (e) => {
            this.props.onInput(e.target.value);
        }
    }
    render(){
        return (
            <div id="content">
                <label className="label" htmlFor="searchText">search</label>
                
                <input 
                    id="searchText"
                    defaultValue={this.props.defaultValue}
                    ref={this.ref}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onInput={this.handleInput}
                    autoComplete="off"
                />
                <span className="search_icon"></span>
                <span className="audio_icon"></span>
            </div>
        )
    }
}

export default BaseInput;