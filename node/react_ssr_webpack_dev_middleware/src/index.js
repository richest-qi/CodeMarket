import React from "react";
import ReactDOM from "react-dom";
import Helloworld from "./Helloworld.js";


// ReactDOM.render(
//     <Helloworld />,
//     document.querySelector("#root")
// )

ReactDOM.hydrate(
    <Helloworld />,
    document.querySelector("#root")
)