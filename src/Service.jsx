import React from "react";
import {useEffect} from "react";

const Service = (props) => {
    useEffect(() =>{
        document.addEventListener("click", handleClick);

        return function cleanup(){
            document.removeEventListener("click", handleClick);
        };
    });
    function handleClick() {
        console.log("hii i am  called again Service useeffect");
    }

    console.log("Hi I am again  service local");

    return<h1>Hello, I am a{props.name} Page </h1>
    
};

export default Service;