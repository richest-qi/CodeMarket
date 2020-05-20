import React,{Component} from "react";
import "./counter.css";

class Counter extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            count:0
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    onIncrement(){
        this.setState({
            count:this.state.count+1
        });
    }
    onDecrement(){
        this.setState({
            count:this.state.count-1
        });
    }
    render(){
        return (<div>
            <span className="btn" onClick={this.onIncrement}>+</span>
            <span className="btn" onClick={this.onDecrement}>-</span>
            <span className="digit">{this.state.count}</span>
        </div>);
    }
}

export default Counter;