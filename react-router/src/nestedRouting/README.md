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
![useRouteMatch](https://img-blog.csdnimg.cn/2020080310341582.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3F6dzc1Mjg5MDkxMw==,size_16,color_FFFFFF,t_70)
### useParams()
```javascript
//path/:topicId
const {topicId} = useParams();

//path/topic1,topicId则等于"topic1"
//path/topic2,topicId则等于"topic2"
```
![useParams](https://img-blog.csdnimg.cn/20200803103927158.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3F6dzc1Mjg5MDkxMw==,size_16,color_FFFFFF,t_70)