import React from "react";
import Button from "./button.js";

function ButtonGroup(){
    return (
        <>
        <Button dirname="basicRouting"/>
        <Button dirname="nestedRouting"/>
        <Button dirname="redirectRouting"/>
        <Button dirname="customLink"/>
        <Button dirname="preventTransitions"/>
        <Button dirname="nomatch"/>
        <Button dirname="recursivePath"/>
        <Button dirname="sidebar"/>
        <Button dirname="modelGallery"/>
        <Button dirname="queryParams"/>
        </>
    )
}

export default ButtonGroup;