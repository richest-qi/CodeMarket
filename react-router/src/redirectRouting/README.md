```javascript
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Route,
  Switch,
  useParams,
  useLocation,
  useRouteMatch
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
            <Route path="/about"><About/></Route>
            <Route path="/users"><Users/></Route>
            <Route path="/home"><Home/></Route>
        </Router>
    );
}

function About(props){
    console.log("props in About:",props);
    return <div>About</div>
}

function Users(props){
    console.log("props in Users:",props);
    return <div>Users</div>
}

function Home(props){
    console.log("props in Home:",props);
    return <div>Home</div>
}
```

Route组件的渲染方式有以下四种，

 #### 第一种：Route
```javascript
<Route path="/about"><About/></Route>
<Route path="/users"><Users/></Route>
<Route path="/home"><Home/></Route>
```

##### Route path属性与当前路径匹配时，才会渲染该Route
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200809095803270.gif)
 ##### 不能访问路由属性
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200809100654357.png)

 #### 第二种：Route component
 每次更新都会重新渲染，也就是说，每次更新都会经历旧组件卸载和新组件的转载过程。
所以，从性能角度来讲，不推荐使用`<Route component/>`。
```javascript
<Route path="/about" component={About}></Route>
<Route path="/users" component={Users}></Route>
<Route path="/home" component={Home}></Route>
```

##### Route path属性与当前路径匹配时，才会渲染该Route
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200809095803270.gif)
##### 可以访问路由属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200809100827368.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3F6dzc1Mjg5MDkxMw==,size_16,color_FFFFFF,t_70)

##### component属性可以是一个函数

```javascript
<Route path="/about" component={() => <About/>}></Route>
<Route path="/users" component={() => <Users/>}></Route>
<Route path="/home" component={() => <Home/>}></Route>
```
```javascript
<Route path="/about" component={(props) => {console.log(props);return <About/>}}></Route>
<Route path="/users" component={(props) => {console.log(props);return <Users/>}}></Route>
<Route path="/home" component={(props) => {console.log(props);return <Home/>}}></Route>
```
```javascript
<Route path="/about" component={({location,history,match}) => {console.log(location,history,match);return <About/>}}></Route>
<Route path="/users" component={({location,history,match}) => {console.log(location,history,match);return <Users/>}}></Route>
<Route path="/home" component={({location,history,match}) => {console.log(location,history,match);return <Home/>}}></Route>
```
 #### 第三种：Route render
```javascript
<Route path="/about" render={About}></Route>
<Route path="/users" render={Users}></Route>
<Route path="/home" render={Home}></Route>
```
##### Route path属性与当前路径匹配时，才会渲染该Route
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200809095803270.gif)
##### 可以访问路由属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200809101000139.png)
#####  render属性可以是一个函数
```javascript
<Route path="/about" render={() => <About/>}></Route>
<Route path="/users" render={() => <Users/>}></Route>
<Route path="/home" render={() => <Home/>}></Route>
```
```javascript
<Route path="/about" render={(props) => {console.log(props);return <About/>}}></Route>
<Route path="/users" render={(props) => {console.log(props);return <Users/>}}></Route>
<Route path="/home" render={(props) => {console.log(props);return <Home/>}}></Route>
```
```javascript
<Route path="/about" render={({location,history,match}) => {console.log(location,history,match);return <About/>}}></Route>
<Route path="/users" render={({location,history,match}) => {console.log(location,history,match);return <Users/>}}></Route>
<Route path="/home" render={({location,history,match}) => {console.log(location,history,match);return <Home/>}}></Route>
```
##### Route render 来组合组件

```javascript
export default function App() {
    return (
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
            <Switch>
                <Route path="/about" render={() => <div>About</div>}></Route>
                <PrivateRoute path="/users">
                    <Users/>
                </PrivateRoute>
                <Route path="/" render={() => <div>Home</div>}></Route>
            </Switch>
        </Router>
    );
}

// let isVIP = true;
let isVIP = false;
function PrivateRoute(props){
    console.log("props in PrivateRoute:",props);
    const {children,...rest} = props;
    return <Route {...rest}
            render={
                (props) => {
                    console.log("props in Route:",props);
                    return isVIP ? children : <div>抱歉，您没有权限访问！</div>
                }
            }
            />
}
function Users(){
    return <div>Users</div>
}
```

 #### 第四种：Route children
```javascript
<Route path="/about" children={About}></Route>
<Route path="/users" children={Users}></Route>
<Route path="/home" children={Home}></Route>
```

##### 不论Route path属性与当前路径是否匹配时，都会渲染该Route
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200809095821619.gif)
##### 可以访问路由属性
```javascript
export default function App() {
    return (
        <Router>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <Redirect from="/" to="/home"></Redirect>
            </ul>
            <Switch>
            <Route path="/:id" children={
                ({match}) => {
                    const {id} = match.params;
                    if(id==="home") return <Home/>;
                    else if(id==="about") return <About/>;
                    else if(id==="users") return <Users/>;
                    else return <div>Hello world</div>;
                }
            }></Route>
            </Switch>

        </Router>
    );
}

function About(props){
    return <div>About</div>
}

function Users(props){
    return <div>Users</div>
}

function Home(props){
    return <div>Home</div>
}
```
