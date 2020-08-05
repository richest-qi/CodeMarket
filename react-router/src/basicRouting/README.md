## 基础路由
一个`<Router>`通过三个`<Route/>`控制着三个页面，

About页面：`<Route path="/about"><About /></Router>`，

User页面：`<Route path="/users"><Users /></Route>`，

Home页面：`<Route path="/"><Home /></Route>` 。

<br/>

`<Link/>`的`to`属性，`<Route/>`有个`path`属性，用来实现路由匹配。

点击不同的`<Link/>`会渲染出对应的`<Route/>` 。

点击`<Link to="/">Home</Link>`，渲染会Home页面，

点击`<Link to="/about">About</Link>`，会渲染出About页面，

点击`<Link to="/users">Users</Link>`，会渲染出Home页面。


## 主要组件
* `Router`

  * `<BrowserRouter>`
  * `<HashRouter>`

  Router在应用最顶层，形如：
  ```javascript
  ReactDOM.render(
      <BrowserRouter>
      <App/>
      </BrowserRouter>
  )
  ```
* `Route Matcher`

  * `<Switch>`<br/>
  * `<Route>`<br/>
```javascript
function Item(){
    const params = useParams();
    return <div>current id is :{params.id}</div>
}
```
```javascript
function About(){
    return <div>About</div>
}
```
```javascript
function Users(){
    return <div>Users</div>
}
```
```javascript
function Home(){
    return <div>Home</div>
}
```
```javascript
//不用Switch
<Router>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
    </ul>
    <Route path="/home"><Home/></Route>
    <Route path="/about"><About/></Route>
    <Route path="/users"><Users/></Route>
    <Route path="/:id"><Item/></Route>
</Router>
```
当前URL为`/home`时，同时匹配了`/home`和`/:id`，所以`<Home/>`和`<Item/>`这两个组件都渲染出来了。<br/>
用
```javascript
//用Switch
<Router>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
    </ul>
    <Switch>
        <Route path="/home"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/users"><Users/></Route>
        <Route path="/:id"><Item/></Route>
    </Switch>
</Router>
```
这时，当前URL为`/home`时，仅仅匹配了`/home`，所以只有`<Home/>`这个组件渲染出来了。<br/>

`<Switch>`是用来渲染第一个与当前URL匹配的 `<Route>`或`<Redirect>`。
所以，通常我们会把`<Route>`放到`<Switch>`里，即 让`<Route>`成为`<Switch>`的子元素，形如：
  ```javascript
  <Switch>
    <Route path />
    <Route path />
    <Route path />
  </Switch>
  ```
  渲染Switch时，会在其所有子元素中查找与当前URL匹配的Route，一旦找到匹配项，随即渲染该Route，不再往后匹配查找。
  这也意味着，Route的path越详细，应该越往前排。
  如果没有匹配项，则返回null。

  `<Route path="/" />`可以匹配

  `/about`

  `/users`

  `/`
  
  所以，把`<Route path="/" />`放到最后。
  ```javascript
  <Switch>
    <Route path="/about" />
    <Route path="/users" />
    <Route path="/" />
  </Switch>
  ```
  或者
  ```javascript
  <Switch>
    <Route exact path="/" />
    <Route path="/about" />
    <Route path="/users" />
  </Switch>
  ```
  `exact path="/"` 会准确匹配  `/`。<br/>
* `Navigation`

  * `<Link>`<br/> 
    `<Link>`会渲染成带`href`属性的`<a>`，如：   
`<Link to="/about">About</Link>`会渲染成：`<a href="/about">About</a>`；<br/>
`<Link to="/users">Users</Link>`会渲染成：`<a href="/users">Users</a>`；<br/>
`<Link to="/">Home</Link>`会渲染成：`<a href="/">Home</a>`。

  * `<NavLink>`<br/>
 `<NavLink>`是特殊的`<Link>`，当它的`to`属性与当前URL匹配时，它会变成`active`。<br/>
 可以通过`activeClassName`属性设置其激活时的样式：<br/>
 `<NavLink to="/home" activeClassName="highlight">`
  * `<Redirect>`<br/>
  `<Redirect to>`<br/>
    * `to`属性是一个字符串
    ```javascript
    <Router>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            
        </ul>
        <Redirect from="/" to="/home"/>
        <Route path="/about"><About/></Route>
        <Route path="/users"><Users/></Route>
        <Route path="/home"><Home/></Route>
    </Router>
    ```
    * `to`属性是一个对象，保存在跳转到的网页的location对象里
    ```javascript
        <Router>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
                
            </ul>
            <Redirect from="/" 
                    to={{
                        pathname:"/home",
                        state:{
                            from:"/"
                        },
                        a:{
                            b:"hellow world"
                        }
                    }}/>
            <Route path="/about"><About/></Route>
            <Route path="/users"><Users/></Route>
            <Route path="/home"><Home/></Route>
        </Router>
      ```
      ```javascript
      import {useLocation} from "react-router-dom";
      function Home(){
          const location = useLocation();
          console.log(location);
          return <div>Home</div>
      }
      ```