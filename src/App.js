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
import Roots from "./components/Roots";
import Scene1 from "./components/Robot3/Scene1";
import Scene2 from "./components/Robot3/Scene2";
import Scene3 from "./components/Robot3/Scene3";

function App() {
  return (
    
     
      <div >
      <Routes>    
      <Route path="/" element={<StartPage />} />
      <Route path="/Start" element={<Roots />} />
       <Route path="/monitor" element={<Monitors />} />
       <Route path="/monitor/tree" element={<TreeM />} />
       <Route path="/monitor/sun" element={<SunM />} /> 
       <Route path="/monitor/rain" element={<RainM />} /> 
       <Route path="/scene/scene1" element={<Scene1 />}/>
       <Route path="/scene/scene2" element={<Scene2 />}/>
      <Route path="/scene/scene3" element={<Scene3/>} />
     </Routes>
      
    </div>
    
    
    
 
  );
}

export default App;
