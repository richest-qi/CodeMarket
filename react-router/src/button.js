import React,{ Suspense } from "react";
import ReactDOM from "react-dom";
import loadable from "@loadable/component";

const buttonStyle = {
    marginRight:"5px",
    padding:"5px"
}
class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = () => {
            // const self = this;
            // async function getComponent(){
            //     const component = await import(
            //          /*webpackPreload:true */
            //         `./${self.props.dirname}/app.js`);
            //     return component.default || component;
            // }
            // getComponent().then(App => {
            //     ReactDOM.render(
            //         <App/>,
            //         document.querySelector('#root')
            //     )
            // })

            // const self = this;
            // const App = React.lazy(() => import(`./${self.props.dirname}/app.js`));
            // ReactDOM.render(
            //     <Suspense fallback={<div>loading</div>}>
            //         <App/>
            //     </Suspense>,
            //     document.querySelector('#root')
            // )

            const App = loadable(() => import(`./${this.props.dirname}/app.js`));
            ReactDOM.render(
                <App/>,
                document.querySelector('#root')
            )
        }
    }
    render(){
        return <button style={buttonStyle} onClick={this.handleClick}>{this.props.dirname}</button>
    }
}

export default Button;

