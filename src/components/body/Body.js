import "./Body.css";
import image from './chicago.jpg';
function Body() {

    return(
       <div className="body">
       <div className="body-container">
       <div className="body-container-title">
       <h1>The Society which we are going to <span>SERVE</span></h1>
       </div>
       <div className="body-container-image">
       <img src= {image } alt="no image"/>
       </div>
       </div>
       </div>
      
    );
}
export default Body