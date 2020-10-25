import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import Appspreadregister from "./Appspreadregister";
import Appspreadlogin from "./Appspreadlogin";
import Service from "./Service"; 
import Error from "./Error";
import Menu from "./Menu";

const Approuter = () =>{
    const Name = () => {
       return<h1> Hello, I am a Name Page</h1>;
    };
    
    return (
        <>
        <Menu />
        <Switch>
            <Route exact path='/' component={()=> <Appspreadregister name= "Appspreadregister" />} />
            <Route exact path="/login" component={Appspreadlogin} />
            <Route exact path="/service" component={()=> <Service name= "Service" />} />
            <Route path="/login/Name" component={Name} />
            <Route component={Error} />
        </Switch>
        
        </>
    );
};
export default Approuter;