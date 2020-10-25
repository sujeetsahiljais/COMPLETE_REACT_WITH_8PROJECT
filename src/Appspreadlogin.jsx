import React from 'react';
import { useState } from 'react';

const Appspreadlogin = () =>{

    const [fullName, setFullName] = useState({
        email: "",
       
        password: "",
       
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
   <div className= "main_div">
    <form onSubmit={onSubmit}>
   <div>
       <h1>Login {fullName.fname} {fullName.lname}</h1>
      
   <br/>
  
    <input 
   type ="email" 
   placeholder="Enter your email"
   name="email"
   onChange={inputEvent}
   value={fullName.email}
   
   />
   <input 
   type ="password" 
   placeholder="Enter your password"
   name="password"
   onChange={inputEvent}
   value={fullName.password}
   />
   
   <button className="xyz" onClick=" blank" >
       Login here 👍</button>
   </div>
   </form>
   </div>
   </>
  );
}
export default Appspreadlogin;