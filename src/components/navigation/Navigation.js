import "./Navigation.css";
import * as React from 'react';

import { useState } from 'react';

import close  from './window-close.svg';
import open from './align-justify.svg';
import logo from './blogger.svg'



function Navigation() {
  
  const [toogglemenu , setToggleMenu] = useState(false);

    return(
       <div className="navbar">
       <div className="navbar-links">
        
          <div className="navbar-links-logo">
          <img src= {logo} alt="loogo"/>
          
       </div>
       <div className="navbar-links-container">
       <p> <a href="#home">Home</a></p>
       <p> <a href="#whoe">Who am I</a></p>
       <p> <a href="#feae">Feature</a></p>
       <p> <a href="#contactme">Contacts</a></p>
       <p> <a href="#aboutme">About</a></p>
       
       </div>
       
       <div className="navbar-links-sign">
       <p> Sign in </p>
       <button type="button">Sign Up</button>
       </div>
       </div>
       <div className="navbar-menu">
      {toogglemenu ?(
      <div>
                <img src={close} alt="" className="logo" onClick={() => setToggleMenu(false)} />
      </div>
      ):(
      <div>
                      <img src={open} alt="" className="logo" onClick={() => setToggleMenu(true)} />
    
      </div>
      )
      }
      { toogglemenu && (
      <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-links-container scale-up-center">
       <p> <a href="#home">Home</a></p>
       <p> <a href="#whoe">Who am I</a></p>
       <p> <a href="#feae">Feature</a></p>
       <p> <a href="#contactme">Contacts</a></p>
       <p> <a href="#aboutme">About</a></p>
       
       </div>
      </div>
      )}
   </div>
   </div>
    );
}
export default Navigation