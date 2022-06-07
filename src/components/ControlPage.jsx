import React, { useEffect, useState } from 'react'
import classes from './pages.module.css'
import Poligon from '../picture/Polygon.png'
import NavBar from './NavBar'
import NavBarButton from './NavBarButton'
import { Link } from 'react-router-dom'
import Camera1 from './techPage/Camera1'
import { switchRelay } from '../API/arduinoService'

export default function ControlPage(props) {
  const [monitor, setMonitor] = useState(true);
  const [video, setVideo] = useState('none');
  const [relay, setRelay] = useState({r1: false, r2: false})


  const onClick = () => {
    
    setMonitor(!monitor)
    if (monitor) setVideo('block')
    else setVideo('none')

}

const giveRelay = (e) => {
  relay[e.target.id] = ! relay[e.target.id] 
  setRelay({...relay} );
  
  switchRelay({r1: relay.r1, r2: relay.r2})
} 

  return (
    
    <div  className={classes.controlPage}>
      <div className={classes.controlVideoBlock}>
        <div className={classes.controlVideo}>

           <Camera1  className={classes.controlCamera} style={video}/>
                
        </div>
    
          <div className={classes.btnVideo}>
                   
            <button className={classes.btnVideoMini} onClick={onClick}>
              <img className={classes.poligonVideo} src={Poligon} alt="" />
            </button>
          </div>
      </div>

        <div className={classes.btnLightWater}>
          <div className={classes.light}>
      <p>Light</p>
                 
            <button id='r1' onClick={ giveRelay } className={classes.btnLight}>{relay.r1 ? 'OFF' : 'ON'}
             
            </button>
          
    </div>

    <div className={classes.water}>
       <p>Water</p>
                               
               <button id='r2' onClick={ giveRelay } className={classes.btnWater}>{relay.r2 ? 'OFF' : 'ON' } 
                
              </button>
        
    </div>

          </div> 
    
          <div className={classes.controlText}>
              <div className={classes.indicatorText} >
                <p>Air temperature</p>
               <p>Air humidity</p>
              <p>Soil moisture</p>
              </div>
              <div className={classes.indicatorNumber}>
                 <p>22.5</p>
              <p>22.5</p>
              <p>22.5</p>
              </div>
              
             
 </div>
 <NavBarButton />
          
      </div>
    
    
  )
}
