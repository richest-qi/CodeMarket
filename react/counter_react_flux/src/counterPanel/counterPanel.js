import React from "react";
import Counter from "../counter/counter.js";
import Store from "../store.js";
import './counterPanel.css';

class CounterPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            values:Store.values
        }
        this.handleChange = () => {
            this.setState({
                values:Store.values
            })
        }
    }
    componentDidMount(){
        Store.on("changed",this.handleChange);
    }
    componentWillUnmount(){
        Store.off("changed",this.handleChange);
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
                            handleChange={this.handleChange}
                    />
                ))
            }
            <div className="sum">{sum}</div>
        </div>
            
        )
    }
}
export default CounterPanel;
