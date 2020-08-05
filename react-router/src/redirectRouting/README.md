## Route渲染
有四种方式。
### 第一种：子组件
```javascript
<Router>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
    </ul>
    <Switch>
        <Route path="/about"><About/></Route>
        <Route path="/users"><Users/></Route>
        <Route path="/"><Home/></Route>
    </Switch>
</Router>
```
```javascript
function About(props){
    console.log("props in About:",props);
    return <div>About</div>
}
```
```javascript
function Users(props){
    console.log("props in Users:",props);
    return <div>Users</div>
}
```
```javascript
function Home(props){
    console.log("props in Home:",props);
    return <div>Home</div>
}
```
Route `path`属性与当前URL匹配时，渲染该Route。<br/>
### 第二种：`<Route component/>`
```javascript
<Router>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
    </ul>
    <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/" component={Home}></Route>
    </Switch>
</Router>
```
```javascript
function About(props){
    console.log("props in About:",props);
    return <div>About</div>
}
```
```javascript
function Users(props){
    console.log("props in Users:",props);
    return <div>Users</div>
}
```
```javascript
function Home(props){
    console.log("props in Home:",props);
    return <div>Home</div>
}
```
Route `path`属性与当前URL匹配时，渲染该Route。<br/>
`<Route component/>`渲染Route时，可以访问所有的路由属性:history、location、match。<br/>
每次更新都会重新渲染，也就是说，每次更新都会经历旧组件卸载和新组件的转载过程。<br/>
所以，从性能角度来讲，不推荐使用`<Route component/>`。
### 第三种：`<Route render=func />`
```javascript
<Router>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
    </ul>
    <Switch>
        <Route path="/about" render={() => <div>About</div>}></Route>
        <Route path="/users" render={() => <div>Users</div>} ></Route>
        <Route path="/" render={() => <div>Home</div>}></Route>
    </Switch>
</Router>
```
Route `path`属性与当前URL匹配时，渲染该Route。<br/>
`<Route render=func />`渲染Route时，可以访问所有的Route属性：location、history和match。
<br/>
#### `<Route render=func />`用来组合组件
```javascript
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
```
```javascript
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
### 第四种：`<Route children=func />`
不论Route `path`属性与当前URL匹配时，该Route都会被渲染。<br/>
```javascript
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
```
```javascript
function Users(){
    return <div>Users</div>;
}
```
```javascript
function Home(){
    return <div>Home</div>;
}
```
```javascript
function About(){
    return <div>About</div>;
}
```
