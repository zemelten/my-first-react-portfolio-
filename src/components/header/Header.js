import "./Header.css";

import image from './ny.jpg'
import spotify from './spotify.svg';
import hackerrank from './hackerrank.svg';
import amazon from './amazon.svg';


function Header() {

    return(
       <div className="header">
       <div className="header-title">
       <h1>Fuck Society</h1>
       </div>
          <div className="header-contents">
          <div className="header-contents-image">
       
          <input name="search" placeholder="Search your favorites" type="text"/>
             <h1 for="search">
          Search</h1>
          </div>
          <div className="header-contents-input">
         <img src={image } alt=""/>
          </div>
    
     
       </div>
             <div className="header-paragraph">
       
                <div className="header-contents-brands">
          <img src={spotify} alt="amazon"/>
          <img src={hackerrank} alt="hacker"/>
          <img src={amazon} alt="google"/>
          </div>
                 <div className =" header-contents-what">
                <h1>The the tjrjej
              rkktk rkr rkrkr rkfkrr rkrkr rkelker 
              fjdrjjr rjrjrjr fjrj
                </h1>
          </div>
          </div>
   
 
       </div>
      
    );
}
export default Header