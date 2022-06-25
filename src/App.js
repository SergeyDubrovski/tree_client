import MenuPage from "./components/Camers/TreeM";
import NavBarButton from "./components/NavBarButton";
import StartPage from "./components/StartPage";
import PlantPage from "./components/Camers/SunM";
import ControlPage from "./components/Camers/RainM";
import Camera1 from "./components/techPage/Camera1";
import './App.css' 
import { Switch, NavLink, Router, Routes, Route } from "react-router-dom";
import Monitors from "./components/Monitors";
import TreeM from "./components/Camers/TreeM";

function App() {
  return (
    
     
      <div className="appPage">
      <Routes>  
      
      <Route path="/" element={<StartPage />} />
       <Route path="/menu" element={<Monitors />} />
       <Route path="/monitor/tree" element={<TreeM />} />
      
     </Routes>
      
    </div>
    
    
    
 
  );
}

export default App;
