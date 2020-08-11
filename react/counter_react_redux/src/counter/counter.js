import React from "react";
import './counter.css';
import {increment,decrement} from "../actions/actions.js";
import store from "../store.js";
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.onIncrement = id => {
            store.dispatch(increment(id));
        }
        this.onDecrement = id => {
            store.dispatch(decrement(id));
        }
    }
    render(){
        const {id,value} = this.props;
        return (
            <div className='counter'>
            <button className='button' onClick={this.onIncrement.bind(this,id)}>+</button>
            <button className='button' onClick={this.onDecrement.bind(this,id)}>-</button>
            <span>{value}</span>
            </div>
        )
    }
}

export default Counter;