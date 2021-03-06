import React from "react";
import Counter from "../counter/counter.js";
import './counterPanel.css';
import {connect} from "../connect.js";

function CounterPanel(props){
    const {values} = props;
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

const mapStateToProps = state => {
    return {
        values:state
    }
}

export default connect(mapStateToProps)(CounterPanel);