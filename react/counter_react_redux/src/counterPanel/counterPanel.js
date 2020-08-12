import React from "react";
import Counter from "../counter/counter.js";
import './counterPanel.css';
import store from "../store.js";
class CounterPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            values:store.getState()
        }
        this.handleChange = () => {
            this.setState({
                values:store.getState()
            })
        }
    }
    componentDidMount(){
        store.subscribe(this.handleChange);
    }
    componentWillUnmount(){
        store.unsubscribe(this.handleChange);
    }
    render(){
        const {values} = this.state;
        const sum = values.reduce((sum,value)=>sum+=value,0);
        return (
        <div className='panel'>
            {
                values.map((value,idx) => (
                    <Counter key={idx} 
                            id={idx} 
                            value={value} 
                    />
                ))
            }
            <div className="sum">{sum}</div>
        </div>
            
        )
    }
}
export default CounterPanel;
