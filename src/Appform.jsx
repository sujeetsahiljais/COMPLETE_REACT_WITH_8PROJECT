import React from 'react';
import { useState } from 'react';

const Appform = () =>{

    const [name, setName] = useState("");

    const[lastName, setLastName] = useState("");

    const [fullName, setFullName]= useState("");

    const [lastNamenew, setLastNameNew]= useState("");

    const onSubmit = (event) =>{
     event.preventDefault();
     setFullName(name);
     setLastNameNew(lastName);
    };
   
    const inputEvent= (event) => {
        console.log(event.target.value);
        setName(event.target.value);
        
    };

    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    }

    return (
   <>
   <div className= "main_div">
    <form onSubmit={onSubmit}>
   <div>
       <h1>Hello {fullName} {lastNamenew} </h1>
   <input 
   type ="text" 
   placeholder="Enter your first name"
   onChange={inputEvent}
   value={name}
   />
   <br/>
   <input 
   type ="text" 
   placeholder="Enter your last name"
   onChange={inputEventTwo}
   value={lastName}
   />
   <button className="xyz" >
       Submit me 👍</button>
   </div>
   </form>
   </div>
   </>
  );
}
export default Appform;