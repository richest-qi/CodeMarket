import React from "react";
import './counter.css';
import {increment,decrement} from "../actions/actions.js";
import {connect} from "react-redux";
function Counter(props){
    const {value,onIncrement,onDecrement} = props;
    return (
        <div className='counter'>
        <button className='button' onClick={onIncrement}>+</button>
        <button className='button' onClick={onDecrement}>-</button>
        <span>{value}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch,ownProps) => ({
    onIncrement:() => dispatch(increment(ownProps.id)),
    onDecrement:() => dispatch(decrement(ownProps.id))
})

export default connect(null,mapDispatchToProps)(Counter);

// const mapStateToProps = (state,ownProps) => {
//     return {
//         value:state[ownProps.id]
//     }
// }

// const mapDispatchToProps = (dispatch,ownProps) => {
//     return {
//         onIncrement:() => {
//             dispatch(increment(ownProps.id));
//         },
//         onDecrement:() => {
//             dispatch(decrement(ownProps.id));
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);





// import {connect} from "react-redux";

// function Counter(props){
//     const {id,value,handleIncrement,handleDecrement} = props;
//     return (
//         <div className='counter'>
//         <button className='button' onClick={()=>handleIncrement(id)}>+</button>
//         <button className='button' onClick={()=>handleDecrement(id)}>-</button>
//         <span>{value}</span>
//         </div>
//     )
// }

// const mapDispatchToProps = {
//     handleIncrement:increment,
//     handleDecrement:decrement
// }

// export default connect(null,mapDispatchToProps)(Counter);