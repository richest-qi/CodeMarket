import React from "react";
import Counter from "../counter/counter.js";
// import Store from "../store.js";
import './counterPanel.css';

class CounterPanel extends React.Component{
    constructor(props){
        super(props);
        this.values = [1,10];
        this.state = {
            sum:this.values.reduce((accum,value) => accum+value,0)
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(diff){
        this.setState({
            sum:this.state.sum+diff
        })
    }
    render(){
        return (
        <div className='panel'>
            {
                this.values.map((value,idx) => (
                    <Counter value={value} key={idx} id={idx} onClick={(diff) => this.handleClick(diff)}/>
                ))
            }
            <div className="sum">{this.state.sum}</div>
        </div>
            
        )
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         values:Store.values
    //     }
    //     this.handleChange = () => {
    //         this.setState({
    //             values:Store.values
    //         })
    //     }
    // }
    // componentDidMount(){
    //     Store.on("changed",this.handleChange);
    // }
    // componentWillUnmount(){
    //     Store.off("changed",this.handleChange);
    // }
    // render(){
    //     const {values} = this.state;
    //     const sum = values.reduce((sum,value)=>sum+=value,0);
    //     return (
    //     <div className='panel'>
    //         {
    //             values.map((value,idx) => (
    //                 <Counter key={idx} 
    //                         id={idx} 
    //                         value={value} 
    //                         handleChange={this.handleChange}
    //                 />
    //             ))
    //         }
    //         <div className="sum">{sum}</div>
    //     </div>
            
    //     )
    // }
}
export default CounterPanel;
