/*import { ReactComponent } from "*.svg";
/*import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<h1> hello bhai!! </h1>, 
document.getElementById('root');*/

/*Vimport React from "react";
import ReactDom from "react-dom";
ReactDom.render(React.createElement("h1",null, "hello jaiswal"),
document.getElementById("root"));*/

/*import React from "react";
import ReactDom from "react-dom";
var h1 = document.createElement("h1")
h1.innerHTML = "hello sujeet";
   document.getElementById('root').appendChild(h1);*/


   /*import React from "react";
import ReactDom from "react-dom";
   ReactDom.render(
   <div>
   <h1>Sujeet technical</h1>
    <p>plz like and subscribe</p>,
    <h2>please subscribe my channel</h2>

    </div>,
    document.getElementById("root")
    );
*/


//for multiple element
/*import React from "react";
import ReactDom from "react-dom";
ReactDom.render(
  [
  <h1>Sujeet technical</h1>,
   <p>plz like and subscribe my channel</p>,
   <h2>please subscribe my channel</h2>,

  ],
   document.getElementById("root")
   );*/


   //for fragent
   /*import React from "react";
    import ReactDom from "react-dom";
   ReactDom.render(
    <React.Fragment>
    <h1>Sujeet technical</h1>
     <p>plz like and subscribe my channel</p>
     <h2>please subscribe my channel</h2>
  
     </React.Fragment>,
     document.getElementById("root")
     );
    */

    /*import React from "react";
      import ReactDom from "react-dom";
    ReactDom.render(
      <div>
      <h1>sujeet technology Netflix</h1>
      <p>Here is list of my fev favoutite series</p>
      <ol>
        <li>DARK</li>
        <li>Extra calulator</li>
        <li>Mirjapur</li>
        <li>mr robot</li>
      </ol>
      </div>,
      document.getElementById('root'),
    );*/

    //Javascript Expression

  /*import React from "react";
    import ReactDom from "react-dom";
    const flname = "sujeet jaiswal";

    ReactDom.render(
      <>
      <h1>my name is {flname}</h1>
      <p>my liucky number is {2+3} </p>
       <p>my liucky number is {Math.random()} </p>
      </>,
      document.getElementById("root")
      
    );*/



    /*import React from "react";
    import ReactDom from "react-dom";
    
    const fname= "sujeet";

    const lname= "jaiswal";

    ReactDom.render(
      <>
      <h1> my name is {fname} {lname} </h1>

      <h2> my name is {fname+" "+lname} </h2>
      </>,
      document.getElementById("root")

    );*/

    //templet literals (backtick)
   /*
    import React from "react";
    import ReactDom from "react-dom";
    
    const fname= "sahil";

    const lname= "jaiswal";


    ReactDom.render(
      <>
      <h1>  {`my name is ${fname} ${lname}`} </h1>
      <p>my liucky number is {2+3} </p>
      </>,
      document.getElementById("root")

    );*/


    //challange display current date and time by using js
/*
    import React from 'react';
    import ReactDom from 'react-dom';

    const name = "sujeet";
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();

    ReactDom.render(

      <>
      <h1> Hello , My name is {name}</h1>
      <p>Current Date is ={currDate}</p>
      <p>Current Time is ={currTime}</p>
      </>,

      document.getElementById("root")
    );*/





    //JSX attributes in ReactJs
    /*
    import React from 'react';
    import ReactDom from 'react-dom';

    const name = "Sujeet";
    const img1 = "https://picsum.photos/150/300";
    const img2 = "https://picsum.photos/200/300";
    const img3 = "https://picsum.photos/250/300";
    const img4 = "https://picsum.photos/300/300";
    const links = "https://ptecindia.com";
    
    ReactDom.render(
      <>
      <h1 contentEditable="true">My name is {name} </h1>,

      <img src= {img1} alt= "randomImage"/>
      <img src= {img2} alt= "randomImage"/>
      <img src= {img3} alt= "randomImage"/>

      <a href={links} target="sujeet">
      <img src= {img4} alt= "randomImage"/>
      </a>
      </>,

      document.getElementById("root")
    ); */


    
  

    //css styling and importing css file in reactjs
    /*
    import React from 'react';
    import ReactDom from 'react-dom';
    import "./index.css";

    const name = "Sujeet";
    const img1 = "https://picsum.photos/150/300";
    const img2 = "https://picsum.photos/200/300";
    const img3 = "https://picsum.photos/250/300";
    const img4 = "https://picsum.photos/300/300";
    const links = "https://ptecindia.com";
    
    ReactDom.render(
      <>
      <h1 className="heading">My name is {name} </h1>,
     
      <div className="img_div">
      <img src= {img1} alt= "randomImage"/>
      <img src= {img2} alt= "randomImage"/>
      <img src= {img3} alt= "randomImage"/>

      <a href={links} target="sujeet">
      <img src= {img4} alt= "randomImage"/>
      </a>
      </div>
      </>,

      document.getElementById("root")
    );*/



    //how to use google font in reactjs
   /*
    import React from 'react';
    import ReactDom from 'react-dom';
    import "./index.css";

    const name = "Sujeet";
    const img1 = "https://picsum.photos/150/300";
    const img2 = "https://picsum.photos/200/300";
    const img3 = "https://picsum.photos/250/300";
    const img4 = "https://picsum.photos/300/300";
    const links = "https://ptecindia.com";
    
    ReactDom.render(
      <>
      <h1 className="heading">My name is {name} </h1>,
     
      <div className="img_div">
      <img src= {img1} alt= "randomImage"/>
      <img src= {img2} alt= "randomImage"/>
      <img src= {img3} alt= "randomImage"/>

      <a href={links} target="sujeet">
      <img src= {img4} alt= "randomImage"/>
      </a>
      </div>
      </>,

      document.getElementById("root")
    );*/


    //internal css& inline css styling in react js
   /* import React from 'react';
    import ReactDom from 'react-dom';
    import "./index.css";

    const name = "Sujeet";
    const img1 = "https://picsum.photos/150/300";
    const img2 = "https://picsum.photos/200/300";
    const img3 = "https://picsum.photos/250/300";
    const img4 = "https://picsum.photos/300/300";
    const links = "https://ptecindia.com";
*/

/*    .heading{
      color: #fa9191;
      text-align: center;
      text-transform: capitalize;
      font-weight: bold;
      text-shadow: 0px 2px 4px #ffe9c5;
      margin: 60px 0;
      font-family: 'Josefin Sans', sans-serif;

    }*/
    

   /* const heading ={
      color: "#fa9191",
      textTransform: "capitalize",
      textAlign : "center",
      fontWeight: 'bold',
      textShadow: '0px 2px 4px #ffe9c5',
      margin: '70px 0',
      fontFamily: '"Josefin Sans", sans-serif',
    };
    
    ReactDom.render(
      <>
      <h1 style= {heading}>
       My name is {name}
       </h1>,
     
      <div className="img_div">
      <img src= {img1} alt= "randomImage"/>
      <img src= {img2} alt= "randomImage"/>
      <img src= {img3} alt= "randomImage"/>

      <a href={links} target="sujeet">
      <img src= {img4} alt= "randomImage"/>
      </a>
      </div>
      </>,

      document.getElementById("root")
    );*/


    // mini project using reactjs for good morning , afternoon, goodnight according to time
  /*
    import React from 'react';
    import ReactDom from 'react-dom';
    import "./index.css";

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
    ReactDom.render(
     <>
      <div>
       <h1>
        Hello sir,<span style = {cssStyle}> {greeting} </span> 
       </h1>,
     </div>
     </>,
      document.getElementById("root")
    );
    */


//React Components /functional Component in reactjs
/*
    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";
    ReactDOM.render(<App />, document.getElementById("root"));
*/ 


//Rewrite our React Project into Component in react js
/*
import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import Appmini from "./Appmini";


ReactDom.render(
 
  <Appmini />,
  document.getElementById("root")
);*/




//import and export in react js.
/*
import React from 'react';
import ReactDOM from 'react-dom';
import youtuber, {favprog, myName, myTitle} from './Appexp';

ReactDOM.render(
  <>
  <ol>
    <li>Sujeet </li>
    <li> {youtuber}</li>
    <li>{favprog}</li>
     <li>{myName ()}</li>
     <li>{myTitle ()}</li>
  </ol>
  </>,
  document.getElementById("root")
);
*/


//challange to create caculator
/*
import React from 'react';
import ReactDom from 'react-dom';
import Appcalc from './Appcalc';


ReactDom.render( <Appcalc />,

  document.getElementById("root")
);
*/


//list of top 6 news channel
 /*
import React from 'react';
import ReactDom from 'react-dom';
import './news.css';
import Appnews from "./Appnews";

ReactDom.render( 
 <Appnews />,
  document.getElementById("root")

);
*/
//list of top 6 news channel using if-else-ternarray operators
/*
import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import './news.css';
import Appnetflix from "./Appnetflix";

ReactDom.render( 
 <Appnetflix />,
  document.getElementById("root")

);
*/
//create slot machine gameimport React from 'react';
/*
import React from 'react';
import ReactDom from 'react-dom';
import './slotgame.css';
import Appgame from "./Appgame";

ReactDom.render( 
 <Appgame />,
  document.getElementById("root")

);*/

//Array Distructuring
/*
const myproglang = ['js', 'php', 'c','python','java'];
let top1, top2;
console.log('my fav prog lang is'${top1} 'and second fav is'${top2});
</script>;*/



//React Hooks increment / decrement
/*
import React from 'react';
import ReactDom from 'react-dom';
import './hooks.css';
import Apphooks from "./Apphooks";

ReactDom.render( 
 <Apphooks />,
  document.getElementById("root")

);*/


//React hooks show time 
/*
import React from 'react';
import ReactDom from 'react-dom';
import './hooks.css';
import Apphookstime from "./Apphookstime";

ReactDom.render( 
 <Apphookstime />,
  document.getElementById("root")

);
*/

// React hooks show digital time
/*
import React from 'react';
import ReactDom from 'react-dom';
import './hooks.css';
import Apphooksdigitalt from "./Apphooksdigitalt";

ReactDom.render( 
 <Apphooksdigitalt />,
  document.getElementById("root")

);*/


//React hooks show date month year
/*
import React from 'react';
import ReactDom from 'react-dom';
import './hooks.css';
import Apphooksdate from './Apphooksdate';

ReactDom.render( 
 <Apphooksdate />,
  document.getElementById("root")

);*/


//Event handling in react
/*
import React from 'react';
import ReactDom from 'react-dom';
import './hooks.css';
import Apphandling from './Apphandling';

ReactDom.render( 
 <Apphandling />,
  document.getElementById("root")

);
*/

//Creating From in ReactJs
/*
import React from 'react';
import ReactDom from 'react-dom';
import './eventhandle.css';
import Appform from './Appform';

ReactDom.render( 
 <Appform />,
  document.getElementById("root")

);*/

//creating multiple input form using hooks
/*
import React from 'react';
import ReactDom from 'react-dom';
import './eventhandle.css';
import Appmultform from './Appmultform';

ReactDom.render( 
 <Appmultform />,
  document.getElementById("root")
);
*/

//create register form using spread operator
/*
import React from 'react';
import ReactDom from 'react-dom';
import './eventhandle.css';
import Appspreadregister from './Appspreadregister';

ReactDom.render( 
 <Appspreadregister />,
  document.getElementById("root")
);
const fullname = ["sujeet" , "jaiswal"];

const biodata = [1, 26, "male", ...fullname];

var shooterGames = ['call of duty', 'far city', 'resident evil'];
var racingGames = ['need for speed ', 'shdjdjjhds', 'sjdjjkwkw'];
var games = [...shooterGames, ...racingGames];

console.log(games); 
console.log(fullname);
console.log(biodata);*/


//create ToDo List App
/*
import React from 'react';
import ReactDom from 'react-dom';
import './hooks.css';
import Apptodo from "./Apptodo";

ReactDom.render( 
 <Apptodo />,
  document.getElementById("root")

);*/


//create login and signup page
/*
 import React from "react";
 import ReactDOM from "react-dom";
 import './register.css';

 class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoginOpen: true, isRegisterOpen: false };
  }
  showLoginbox(){
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox(){
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
  
  render(){
    return (
    <div className="root-container">
    <div className= "box-controller">
      <div className= "box-container" onClick={this.showLoginbox.bind(this)}>
        Login  
        </div>
        <div className="box-controller" onClick={this.showRegisterBox.bind(this)}>
          Register
      </div>
      </div>

      <div className="box-container">

        {this.state.isLoginOpen && <LoginBox/>}
        {this.state.isRegisterOpen && <RegisterBox/>}

      </div>

    </div>
    );
  }
 }

  class LoginBox extends React.Component {
    constructor(props){
      super(props);
      this.state={ };
   }

   submitLogin(e){}

 render(){
   return(

  <div className="inner-container">
   <div className= "header">
    Register
   </div>
    <div className="box"> 

    <div className="inner-group">
    <label htmlFor="username">Username</label>
    <input type="text" name="username" className="login-input" placeholder="Username"/>
    </div>

    <div className="inner-group">
    <label htmlFor="password">password</label>
    <input type="password" name="password" className="login-input"  placeholder="Password"/>
    </div>

    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>



    </div>

  </div>
   );
  }  
}

class RegisterBox extends  React.Component {
  constructor(props){
    super(props);
    this.state={ };
 }

 submitRegister(e){

 }

render(){
  return(

<div className="inner-container">
  <div className= "header">
  Register
  </div>
  <div className="box"> 

  <div className="inner-group">
  <label htmlFor="username">Username</label>
  <input type="text" name="username" className="register-input" placeholder="Username"/>
  </div>

  <div className="inner-group">
  <label htmlFor="password">password</label>
  <input type="password" name="password" className="register-input"  placeholder="Password"/>
  </div>

  <button type="button" className="register-btn" onClick={this.submitRegister.bind(this)}>Register</button>



  </div>

</div>
  );
}  
}
 ReactDOM.render(
   <App/>, document.getElementById("root")
 );*/


 //login-register
/*
 import React from 'react';
import ReactDom from 'react-dom';
import './login.css';
import Apploginregister from './Apploginregister';


ReactDom.render( 
 <Apploginregister />,
  document.getElementById("root")
);*/
 
 //create login page
/*
import React from 'react';
import ReactDom from 'react-dom';
import './eventhandle.css';
import Applogin from './Applogin';

ReactDom.render( 
 <Applogin />,
  document.getElementById("root")
);*/

//create signup
/*
import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import './eventhandle.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Logins from './component/Logins';

class Logintr extends Component{
  render(){
    return(
      <Router>
        <div className ="Logins">
        
          <Route path="/logins" component={Logins}> </Route>

        </div>
      </Router>
    );
  }
}
export default Logins;
*/


//ROUTING
/*
import React from 'react';
import ReactDom from 'react-dom';
import './eventhandle.css';
import Approuter from './Approuter';
import {BrowserRouter} from "react-router-dom";

ReactDom.render( 
  <BrowserRouter>
 <Approuter />
 </BrowserRouter>,
  document.getElementById("root")
);*/

//Firebase-authentication

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fire from './Fire';
import Home from './Home';
import Login from './Login';

// import "./loginFire.css";
 
class App extends Component{

  constructor(props){
    super(props);

    this.state ={
      user: {}
    }
  }
  authListener(){
    Fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }

  componentDidMount(){
    this.authListener()
  }
  render(){

  return (
    <div>
     {this.state.user ? (<Home />): (<Login />)}
    </div>
  )
}
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement);

 