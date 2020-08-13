import React,{useState} from "react";
import {connect} from "react-redux";
import "./form.css";
import {add} from "../actions/actions.js";

function Form(props){
    const [text,setText] = useState("");
    function handleChange(e){
        setText(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        var textVal = text.trim();
        if(!textVal) return;
        props.addTodo(textVal);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" 
                placeholder="请输入待办事项" 
                value={text}
                onChange={handleChange}
                />
        <input type="submit" value="添加" />
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo:(text) => {
            dispatch(add(text));
        }
    }
}
export default connect(null,mapDispatchToProps)(Form);