import { Routes, Route, Link } from "react-router-dom";
import Blue from "./assets/components/blue";
import Red from "./assets/components/red";
import Home from "./assets/components/Home";

const App = () => {
  return ( 
    <div id="container">
      <div id="navbar">
        <Link  to="/Home">HOME</Link>
        <Link to="/blue">BLUE</Link>
        <Link  to="/red">RED</Link>
        </div>
      <div id="main-section"><Routes>
      <Route path="/blue" element={<Blue/>} />
      <Route path="/red" element={<Red/>} />
      <Route path="/home" element={<Home/>} />
  </Routes></div>
    </div>

 
   );
}
 
export default App;

