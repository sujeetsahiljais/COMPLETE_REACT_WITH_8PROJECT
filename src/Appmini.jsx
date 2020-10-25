import React from 'react';


function Appmini(){
    let currDate = new Date();
currDate = currDate.getHours();
let greeting = '';
const cssStyle = { 
  color : 'green'

};
 
if(currDate>= 1 && currDate <12){
  greeting ='Good Morning';
  cssStyle.color = 'green';
}
else if(currDate>=12 && currDate<19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}
else{
  greeting = 'Good Night';
  cssStyle.color = 'black';
}
  return(
      <>
  <div>
   <h1>
    Hello sir,<span style = {cssStyle}> {greeting} </span> 
   </h1>,
  </div>
 </>
  );

}
export default Appmini;