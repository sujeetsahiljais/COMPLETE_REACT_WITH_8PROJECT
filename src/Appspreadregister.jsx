import React from 'react';
import { useState } from 'react';

const Appspreadregister = () =>{

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        quallification: "",
        password: "",
        confirm_password: "",
    });
    const inputEvent= (event) => {
     //   console.log(event.target.value);
     //   console.log(event.target.name);

        
        const {value,name} = event.target; 
      

     setFullName((preValue) => {
         console.log(preValue);
         return{
             ...preValue,
            [name] : value,  

         }
    
     });  
    };
   
    const onSubmit = (event) =>{
     event.preventDefault();
     alert('Form submitted');
    };
   
  

    return (
   <>
                <div>
                    <form onSubmit={onSubmit}>
                <div>
                    <h1 className="heading_style">SignUp </h1>
                    
                <input 
                type ="text" 
                placeholder="Enter your first name"
                name="fname"
                onChange={inputEvent}
                value={fullName.fname}
                />
                <br/>
                <input 
                type ="text" 
                placeholder="Enter your last name"
                name="lname"
                onChange={inputEvent}
                value={fullName.lname}
                />
                    <input 
                type ="email" 
                placeholder="Enter your email"
                name="email"
                onChange={inputEvent}
                value={fullName.email}
                
                />
                    <input 
                type ="number" 
                placeholder="Enter your phone"
                name="phone"
                onChange={inputEvent}
                value={fullName.phone}
                />
                    <input 
                type ="text" 
                placeholder="Enter your quallification"
                name="quallification"
                onChange={inputEvent}
                value={fullName.quallification}
                />
                <input 
                type ="password" 
                placeholder="Enter your password"
                name="password"
                onChange={inputEvent}
                value={fullName.password}
                />
                <input 
                type ="password" 
                placeholder="Confirm your password"
                name="confirm_password"
                onChange={inputEvent}
                value={fullName.confirm_password}
                />
                <button className="xyz" onClick=" black" >
                    Register here 👍</button>
                </div>
                </form>
                </div>
   </>
  );
}
export default Appspreadregister;