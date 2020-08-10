## 嵌套路由

* Home`(localhost:3000/)`
* About`(localhost:3000/about)`
* Topics`(localhost:3000/topics)`
    * Topic1`(localhost:3000/topics/topic1)`
    * Topic2`(localhost:3000/topics/topic2)`


### useRouteMatch()
`useRouteMatch()`会尝试匹配当前URL。<br/>
不匹配，则返回null；<br/>
匹配，则返回一个对象，此时可以在不实际渲染Route的情况下，访问匹配数据。
```javascript
const match = useRouteMatch();
console.log(match.url,match.path);
```
![useRouteMatch](https://github.com/richest-qi/CodeMarket/blob/master/react-router/assets/imgs/useRouteMatch.png)
### useParams()
```javascript
//path/:topicId
const {topicId} = useParams();

//path/topic1,topicId则等于"topic1"
//path/topic2,topicId则等于"topic2"
```
![useParams](https://github.com/richest-qi/CodeMarket/blob/master/react-router/assets/imgs/useParams.png)