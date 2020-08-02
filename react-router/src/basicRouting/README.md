## 基础路由
一个`<Router>`通过三个`<Route/>`控制着三个页面，且这些`<Route/>`都放在`<Switch/>`里。

About页面：`<Route path="/about"><About /></Router>`，

User页面：`<Route path="/users"><Users /></Route>`，

Home页面：`<Route path="/"><Home /></Route>` 。

<br/>

`<Link/>`的`to`属性，`<Route/>`有个`path`属性，用来实现路由匹配。

点击不同的`<Link/>`会渲染出对应的`<Route/>` 。

点击`<Link to="/">Home</Link>`，渲染会Home页面，

点击`<Link to="/about">About</Link>`，会渲染出About页面，

点击`<Link to="/users">Users</Link>`，会渲染出Home页面。

<br/>

每个`<Link/>`会渲染成带`herf` 属性的`<a></a>`，

`<Link to="/">Home</Link>`会渲染成：`<a href="/">Home</a>`，

`<Link to="/about">About</Link>`会渲染成：`<a href="/about">About</a>`，

`<Link to="/users">Users</Link>`会渲染成：`<a href="/users">Users</a>`。
