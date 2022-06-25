import MenuPage from "./components/Camers/TreeM";
import NavBarButton from "./components/NavBarButton";
import StartPage from "./components/StartPage";
import PlantPage from "./components/Camers/SunM";
import ControlPage from "./components/Camers/RainM";
import './App.css' 
import { Switch, NavLink, Router, Routes, Route } from "react-router-dom";
import Monitors from "./components/Monitors";
import TreeM from "./components/Camers/TreeM";
import SunM from "./components/Camers/SunM";
import RainM from "./components/Camers/RainM";

function App() {
  return (
    
     
      <div className="appPage">
      <Routes>  
      
      <Route path="/" element={<StartPage />} />
       <Route path="/monitor" element={<Monitors />} />
       <Route path="/monitor/tree" element={<TreeM />} />
       <Route path="/monitor/sun" element={<SunM />} /> 
       <Route path="/monitor/rain" element={<RainM />} /> 
     </Routes>
      
    </div>
    
    
    
 
  );
}

export default App;
