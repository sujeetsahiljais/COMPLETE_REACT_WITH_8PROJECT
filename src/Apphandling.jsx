import React from "react";
import { useState } from "react";

const Apphandling = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");

    const bgChange = () => {
     // console.log("clicked");
      let newBg = '#34495e';
      setBg(newBg);
      setName (' welcome to sujeet world 👨‍🦳');  
    };

    const bgBack = () => {
        setBg(purple);
        setName('sujeet is busy now please wait 🤝');

    };

    return (
    <>
    <div style={{ backgroundColor: bg }}>
        <button  onMouseEnter={bgChange} onMouseLeave={bgBack}>
            {name}
            </button>
    </div>
    </>
    );
}
export default Apphandling;