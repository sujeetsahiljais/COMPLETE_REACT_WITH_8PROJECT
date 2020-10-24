import React from 'react';
import {add, sub, mult, div} from "./Calc";

function Appcalc(){
    return(
        <>
        <ul>
          <li>The sum of two no is {add (40,4)}</li>
          <li>The subtract of two no is {sub (40,4)}</li>
          <li>The multiple of two no is {mult (40,4)}</li>
          <li>The divide of two no is {div (40,3)}</li>
        </ul>
        </>
    );
}

export default Appcalc;