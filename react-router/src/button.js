import React from "react";
import ReactDOM from "react-dom";

const buttonStyle = {
    marginRight:"5px",
    padding:"5px"
}
class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = () => {
            const self = this;
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
        }
    }
    render(){
        return <button style={buttonStyle} onClick={this.handleClick}>{this.props.dirname}</button>
    }
}

export default Button;