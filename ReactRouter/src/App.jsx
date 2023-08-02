import { Routes, Route } from "react-router-dom";
import Blue from "./assets/components/blue";
import Red from "./assets/components/red";
import Home from "./assets/components/Home";


const App = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
