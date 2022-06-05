import MenuPage from "./components/MenuPage";
import NavBarButton from "./components/NavBarButton";
import StartPage from "./components/StartPage";
import PlantPage from "./components/PlantPage";
import ControlPage from "./components/ControlPage";
import Camera1 from "./components/techPage/Camera1";
import './App.css' 
import { Switch, NavLink, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
     
      <div className="appPage">
      <Routes>  
      
         <Route path="/" element={<StartPage />} />
       <Route path="menu" element={<MenuPage />} />
       <Route path="plant" element={<PlantPage />} />
       <Route path="control" element={<ControlPage />} />
     </Routes>
      
    </div>
    
    
    
 
  );
}

export default App;
