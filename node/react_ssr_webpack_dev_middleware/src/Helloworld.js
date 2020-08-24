import React from "react";
export default function Helloworld(){
    function handleClick(){
        console.log("clicked");
    }
    return (
        <>
        <div onClick={handleClick}>Hello world</div>
        <div>have a nice day</div>
        </>
    );
}