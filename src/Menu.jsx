import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <>
        <br/>

        <div className= "menu_style">
        <NavLink exact activeClassName="active_class" to="/" > 
         SignUp 
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/service">
         Service
         </NavLink>
         <NavLink exact activeClassName="active_class" to="/login">
         Login 
         </NavLink>

        

        </div>

        </> 
    )
};

export default Menu;