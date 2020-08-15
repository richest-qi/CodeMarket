import React from "react";
import {ALL,UNDO,DONE} from "../../tabs/tabIds.js";
import ListItem from "./listItem.js";
import "./List.css";

// import {connect} from "react-redux";

// function List(props){
//     return (
//         <ul>
//             {
//                 props.list.map(item => <ListItem key={item.id} {...item}/>)
//             }
//         </ul>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         list:getList(state)
//     }
// }
// function getList({list,tabId}){
//     switch(tabId){
//         case ALL:return list;
//         case UNDO:return list.filter(item => !item.isDone);
//         case DONE:return list.filter(item => item.isDone);
//     }
// }


// export default connect(mapStateToProps)(List);


import {useSelector} from "react-redux";

function List(){
    const list = useSelector(state=>state.list);
    const tabId = useSelector(state => state.tabId);
    const res = getRes(list,tabId);
    return (
        <ul>
            {
                res.map(item => <ListItem key={item.id} {...item}/>)
            }
        </ul>
    )
}

function getRes(list,tabId){
    switch(tabId){
        case ALL:return list;
        case UNDO:return list.filter(item => !item.isDone);
        case DONE:return list.filter(item => item.isDone);
    }
}

export default List;

