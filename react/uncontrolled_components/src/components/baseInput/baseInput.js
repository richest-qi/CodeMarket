import React from "react";
import "./baseInput.css";
import $ from "jquery";

class BaseInput extends React.Component{
    constructor(props){
        super(props);

        // this.ref = React.createRef();
        // this.handleFocus = () => {
        //     this.ref.current.value="";
        // }
        // this.handleBlur = () => {
        //     this.ref.current.value=this.props.defaultValue;
        // }
        // this.handleInput = (e) => {
        //     this.props.onInput(e.target.value);
        // }

        this.ref = (el) => {
            this.el = el;
        }
        this.handleFocus = () => {
            this.el.value="";
        }
        this.handleBlur = () => {
            this.el.value=this.props.defaultValue;
        }
        this.handleInput = (e) => {
            this.props.onInput(e.target.value);
        }
        this.handleChange = (e) => {
            this.props.onChange(e.target.value);
        }
        this.handleTextInput = (e) => {
            this.props.onTextInput(e.target.value);
        }
    }
    componentDidMount(){
        document.querySelector('#searchText').addEventListener('change',this.handleChange);
        $('#searchText').on("textInput",this.handleTextInput);
    }
    componentWillUnmount(){
        document.querySelector('#searchText').removeEventListener('change',this.handleChange);
        $('#searchText').off('textInput',this.handleTextInput);
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