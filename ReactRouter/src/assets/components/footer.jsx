import { Link } from "react-router-dom";
const footer = () => {
    return (  
        <>
        <div id="footer">
        <Link to="/home" className="homeBar">HOME</Link>
        <Link to="/blue" className="blueBar">BLUE</Link>
        <Link to="/red" className="redBar">RED</Link>
        <p>coded by Maui Bautista. © {new Date().getFullYear()}</p>
      </div> 
      </>
    );
}
 
export default footer;