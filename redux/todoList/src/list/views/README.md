### 第一种
```javascript
import {connect} from "react-redux";

function List(props){
    return (
        <ul>
            {
                props.list.map(item => <ListItem key={item.id} {...item}/>)
            }
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        list:getList(state)
    }
}
function getList({list,tabId}){
    switch(tabId){
        case ALL:return list;
        case UNDO:return list.filter(item => !item.isDone);
        case DONE:return list.filter(item => item.isDone);
    }
}


export default connect(mapStateToProps)(List);
```

### 第二种，使用react-redux的hook：useSelector
```javascript
import {useSelector} from "react-redux";

function List(){
    const list = useSelector(state=>state.list);
    const tabId = useSelector(state => state.tabId);
    const res = getRes(list,tabId);
    return (
        <ul>
            {
                res.map(item => <ListItem key={item.id} {...item}/>)
            }
        </ul>
    )
}

function getRes(list,tabId){
    switch(tabId){
        case ALL:return list;
        case UNDO:return list.filter(item => !item.isDone);
        case DONE:return list.filter(item => item.isDone);
    }
}

export default List;
```
### 第三种，使用react-redux的Hook：useSelector、reselect库的createSelector
```javascript
import {useSelector} from "react-redux";
import {createSelector} from "reselect";
const getRes = createSelector(
    state => state.list,
    state => state.tabId,
    (list,tabId) => {
        switch(tabId){
            case ALL:return list;
            case UNDO:return list.filter(item => !item.isDone);
            case DONE:return list.filter(item => item.isDone);
        }        
    }
)

function List(){
    // const res = useSelector(state => getRes(state));
    const res = useSelector(getRes);
    return (
        <ul>
            {
                res.map(item => <ListItem key={item.id} {...item}/>)
            }
        </ul>
    )
}

export default List;
```

```javascript
createSelector(
    state => state.list,
    state => state.tabId,
    (list,tabId) => {
        switch(tabId){
            case ALL:return list;
            case UNDO:return list.filter(item => !item.isDone);
            case DONE:return list.filter(item => item.isDone);
        }        
    }
)
```
reselect，只要状态没有变，就是用上一次的缓存结果。<br>
`createSelector`，它接受了三个参数：<br>
第一个参数，是一个匿名函数，`state => state.list`，暂且记作函数fn1；<br>
第二个参数，是一个匿名函数，`state => state.tabId`，暂且记作函数fn2；<br>
第三个参数，是一个匿名函数，`(list,tabId) => { return }`，暂且记作函数fn3。<br>
fn1返回的结果 是 fn3的第一个参数；<br>
fn2返回的结果 是 fn3的第二个参数。