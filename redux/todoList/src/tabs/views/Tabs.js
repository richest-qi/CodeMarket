import React from "react";
import {ALL,UNDO,DONE} from "../tabIds.js";
import {setTabId} from "../actions/actions.js";
import "./Tabs.css";

// import {connect} from "react-redux";

// function Tabs(props){
//     const {tabId,handleClick} = props;
//     const classNameForAll = "tab all" + (tabId===ALL?" selected":"");
//     const classNameForDone = "tab done"+ (tabId===DONE?" selected":"");
//     const classNameForUndo = "tab undo"+ (tabId===UNDO?" selected":""); 
//     return (
//         <div className="tabs">
//             <a className={classNameForAll} onClick={handleClick.bind(null,ALL)}>全部</a>
//             <a className={classNameForDone} onClick={handleClick.bind(null,DONE)}>已完成</a>
//             <a className={classNameForUndo} onClick={handleClick.bind(null,UNDO)}>未完成</a>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         tabId:state.tabId
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleClick:(id) => {
//             dispatch(setTabId(id));
//         }
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Tabs);

import {useSelector,useDispatch} from "react-redux";

function Tabs(){
    const tabId = useSelector(state => state.tabId);
    const dispatch = useDispatch();
    function handleClick(id){
        dispatch(setTabId(id));
    }

    const classNameForAll = "tab all" + (tabId===ALL?" selected":"");
    const classNameForDone = "tab done"+ (tabId===DONE?" selected":"");
    const classNameForUndo = "tab undo"+ (tabId===UNDO?" selected":""); 
    return (
        <div className="tabs">
            <a className={classNameForAll} onClick={handleClick.bind(null,ALL)}>全部</a>
            <a className={classNameForDone} onClick={handleClick.bind(null,DONE)}>已完成</a>
            <a className={classNameForUndo} onClick={handleClick.bind(null,UNDO)}>未完成</a>
        </div>
    )
}

export default Tabs;


