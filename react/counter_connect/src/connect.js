import React from "react";
import store from './store.js';
const f = () => ({});
const connect = (mapStateToProps=f,mapDispatchToProps=f) => {
    return function(WrappedComponent){
        return  class NewComponent extends React.Component{
            constructor(props){
                super(props);
                this.state = {};
                this.onChange = () => {
                    this.setState({});
                }
            }
            componentDidMount(){
                store.subscribe(this.onChange);
            }
            componentWillUnmount(){
                store.unsubscribe(this.onChange);
            }
            render(){
                const newProps = {
                    ...this.props,
                    ...mapStateToProps(store.getState(),this.props),
                    ...mapDispatchToProps(store.dispatch,this.props)
                }
                return (
                    <WrappedComponent {...newProps}/>
                )
            }
        }
    }

}

export {connect};