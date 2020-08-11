import React from "react";
import './counter.css';
// import {increment,decrement} from "../actions/actions.js";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:props.value
        }
        this.onAdd = this.onAdd.bind(this);
        this.onDec = this.onDec.bind(this);
    }
    onAdd(){
        this.setState({
            count:this.state.count+1
        })
        this.props.onClick(1);
    }
    onDec(){
        this.setState({
            count:this.state.count-1
        });
        this.props.onClick(-1);
    }
    render(){
        return (
            <div className='counter'>
            <button className='button' onClick={this.onAdd}>+</button>
            <button className='button' onClick={this.onDec}>-</button>
            <span>{this.state.count}</span>
            </div>
        )
    }

    // constructor(props){
    //     super(props);
    //     this.onIncrement = id => increment(id);
    //     this.onDecrement = id => decrement(id);
    // }
    // render(){
    //     const {id,value} = this.props;
    //     return (
    //         <div className='counter'>
    //         <button className='button' onClick={this.onIncrement.bind(this,id)}>+</button>
    //         <button className='button' onClick={this.onDecrement.bind(this,id)}>-</button>
    //         <span>{value}</span>
    //         </div>
    //     )
    // }
}

export default Counter;