import React, { useEffect, useState } from 'react'
import classes from './pages.module.css'
import Poligon from '../picture/Polygon.png'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Camera1 from './techPage/Camera1'

export default function ControlPage(props) {
  const [monitor, setMonitor] = useState(false);
  const [video, setVideo] = useState('none');


  const onClick = () => {
    
    setMonitor(!monitor)
    if (monitor) setVideo('block')
    else setVideo('none')

}
  return (
    
    <div  className={classes.controlPage}>
      <div>
        
        <Camera1 style={video}/>
        
        
       
       <div className={classes.btnLight}>
             <div className={classes.btnStartMaxi}> 
             </div>
      
            <button className={classes.btnStartMini} onClick={onClick}>
              <img className={classes.poligon} src={Poligon} alt="" />
            </button>
          </div>
      </div>

         
    
<p>Light</p>
           <div className={classes.btnLight}>
             <div className={classes.btnStartMaxi}> 
             </div>
      
            <button className={classes.btnStartMini}>
              <img className={classes.poligon} src={Poligon} alt="" />
            </button>
          </div>
          <p>Water</p>
          <div className={classes.btnWater}>
             <div className={classes.btnStartMaxi}>
            </div>
              
               <button className={classes.btnStartMini}>
                 <img className={classes.poligon} src={Poligon} alt="" />
              </button>
        
          </div>
   
          
      </div>
    
    
  )
}
