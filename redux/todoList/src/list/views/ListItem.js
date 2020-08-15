import React,{useState} from "react";
import {connect} from "react-redux";
import {toggle,remove} from "../actions/actions.js";
function ListItem(props){
    const {isDone,text,handleChange,handleClick} = props;
    const [isShowDelBtn,setIsShowDelBtn] = useState(false);
    // const [isShowDelBtn,setIsShowDelBtn] = useState(true);
    function handleMouseEnter (){
        setIsShowDelBtn(true);
    }
    function handleMouseMove(){
        setIsShowDelBtn(true);
    }
    function handleMouseLeave(){
        setIsShowDelBtn(false);
    }
    return (
        <li 
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}  
        >
        <input type="checkbox" 
                htmlFor="text"
                checked={isDone}    
                onChange={handleChange}
                />
        <span id="text">{text}</span>
        {
            isShowDelBtn?<a className="delBtn" onClick={handleClick}></a>:null
        }
        </li>
    );
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        handleChange:() => {
            dispatch(toggle(ownProps.id));
        },
        handleClick:() =>{
            dispatch(remove(ownProps.id));
        }
    }
}

export default connect(null,mapDispatchToProps)(ListItem);
