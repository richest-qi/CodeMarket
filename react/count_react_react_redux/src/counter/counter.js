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

const mapStateToProps = (state,ownProps) => {
    return {
        value:state[ownProps.id]
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onIncrement:() => {
            dispatch(increment(ownProps.id));
        },
        onDecrement:() => {
            dispatch(decrement(ownProps.id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);