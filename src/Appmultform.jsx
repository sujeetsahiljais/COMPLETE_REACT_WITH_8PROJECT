import React from 'react';
import { useState } from 'react';

const Appmultform = () =>{

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });
    const inputEvent= (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        
        const {value,name} = event.target; 
      

     setFullName((preValue) => {
      if (name=="fname"){
          return{
              fname: value,
              lname: preValue.lname,
              email: preValue.email,
              phone: preValue.phone,
          };
      }else if (name== "lName"){
          return {
              fname: preValue.fname,
              lname: value,
              email: preValue.email,
              phone: preValue.phone,
          };
      }else if (name== "email"){
        return {
            fname: preValue.fname,
            lname: preValue.lname,
            email: value,
            phone: preValue.phone,
            
            
        };
      }else if (name== "phone"){
        return {
            fname: preValue.fname,
            lname: preValue.lname,
            email: preValue.email,
            phone: value,
        };
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
       <h1>Hello {fullName.fname} {fullName.lname}</h1>
       <p>{fullName.email}</p>
       <p>{fullName.phone}</p> 
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
   name="lName"
   onChange={inputEvent}
   value={fullName.lname}
   />
    <input 
   type ="email" 
   placeholder="Enter your email"
   name="email"
   onChange={inputEvent}
   value={fullName.email}
   autoComplete= "off"
   />
    <input 
   type ="number" 
   placeholder="Enter your phone"
   name="phone"
   onChange={inputEvent}
   value={fullName.phone}
   />
    
   <button className="xyz" >
       Submit me 👍</button>
   </div>
   </form>
   </div>
   </>
  );
}
export default Appmultform;