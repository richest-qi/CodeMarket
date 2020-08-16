## 父组件CounterPanel
```javascript
import React from "react";
import Counter from "../counter/counter.js";
import {connect} from "react-redux";

function CounterPanel(props){
    const {values} = props;
    const sum = values.reduce((sum,value)=>sum+=value,0);
    return (
        <div className='panel'>
            {
                values.map((value,idx) => (
                    <Counter key={idx} id={idx} value={values[idx]} />
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
```
## 子组件Counter
### 第一种
```javascript
import {increment,decrement} from "../actions/actions.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

function Counter(props){
    const {id,value,handleIncrement,handleDecrement} = props;
    return (
        <div className='counter'>
        <button className='button' onClick={()=>handleIncrement(id)}>+</button>
        <button className='button' onClick={()=>handleDecrement(id)}>-</button>
        <span>{value}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        handleIncrement:increment,
        handleDecrement:decrement
    },dispatch);
}

export default connect(null,mapDispatchToProps)(Counter);
```


### 第二种
```javascript
import {increment,decrement} from "../actions/actions.js";
import {connect} from "react-redux";

function Counter(props){
    const {id,value,handleIncrement,handleDecrement} = props;
    return (
        <div className='counter'>
        <button className='button' onClick={()=>handleIncrement(id)}>+</button>
        <button className='button' onClick={()=>handleDecrement(id)}>-</button>
        <span>{value}</span>
        </div>
    )
}

const mapDispatchToProps = {
    handleIncrement:increment,
    handleDecrement:decrement
}

export default connect(null,mapDispatchToProps)(Counter);
```

但在组件上使用匿名函数并不是一件好事。
函数即对象，每次组件更新，匿名函数都会产生一个新的对象，组件不得不重新渲染，这有损性能。
所以，最好在组件上使用具名函数。

### 第三种
```javascript
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
```
