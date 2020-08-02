## 嵌套路由

* Home`(localhost:3000/)`
* About`(localhost:3000/about)`
* Topics`(localhost:3000/topics)`
    * Topic1`(localhost:3000/topics/topic1)`
    * Topic2`(localhost:3000/topics/topic2)`


### useRouteMatch()
```javascript
const match = useRouteMatch();
console.log(match.url,match.path);
```
### useParams()
```javascript
//path/:topicId
const {topicId} = useParams();

//path/topic1,topicId则等于"topic1"
//path/topic2,topicId则等于"topic2"

```