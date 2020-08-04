## 动态导入
### 第一种，`async/await + import()`
```javascript
async function getComponent(){
    const component = await import(
            /*webpackPreload:true */
        `./${self.props.dirname}/app.js`);
    return component.default || component;
}
getComponent().then(App => {
    ReactDOM.render(
        <App/>,
        document.querySelector('#root')
    )
})
```

### 第二种，`React.lazy + import() + <Suspense fallback/>`

```javascript
import React,{Suspense} from "react";
const self = this;
const App = React.lazy(() => import(`./${self.props.dirname}/app.js`));
ReactDOM.render(
    <Suspense fallback={<div>loading</div>}>
        <App/>
    </Suspense>,
    document.querySelector('#root')
)
```

### 第三种，`loadable + import()`
```javascript
npm install --save @loadable/component
```
```javascript
import loadable from "@loadable/component";
const App = loadable(() => import(`./${this.props.dirname}/app.js`));
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
```

## 参考文章
[代码分离|webpack](https://webpack.docschina.org/guides/code-splitting/)<br/>
[代码分割|react](https://react.docschina.org/docs/code-splitting.html)<br/>
[@loadable/component](https://github.com/gregberge/loadable-components)

