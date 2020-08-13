import React from "react";
import {connect} from "react-redux";
import {ALL,UNDO,DONE} from "../../tabs/tabIds.js";
import ListItem from "./listItem.js";
import "./list.css";
function List(props){
    return (
        <ul>
            {
                props.list.map(item => <ListItem key={item.id} {...item}/>)
            }
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        list:getList(state)
    }
}
function getList({list,tabId}){
    switch(tabId){
        case ALL:return list;
        case UNDO:return list.filter(item => !item.isDone);
        case DONE:return list.filter(item => item.isDone);
    }
}


export default connect(mapStateToProps)(List);