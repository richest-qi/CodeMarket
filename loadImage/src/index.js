import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import logo from "../assets/imgs/logo-qq.svg";
ReactDOM.render(
    <>
    {/* <img src="../assets/imgs/logo-qq.svg" alt="here is a logo"/> */}
    {/* <span id="logo"></span> */}
    <img src={logo} alt="here is a logo"/> 
    </>,
    document.querySelector("#root")
)