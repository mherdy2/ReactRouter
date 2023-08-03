import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/home" className="homeBar">HOME</Link>
      <Link to="/blue" className="blueBar">BLUE</Link>
      <Link to="/red" className="redBar">RED</Link>
    </div>
  );
};

export default Navbar;
