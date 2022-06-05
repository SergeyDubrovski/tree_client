import React from 'react'
import classes from './pages.module.css'
import Poligon from '../picture/Polygon.png'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

export default function ControlPage(props) {
  return (
    <div className={classes.controlPage}>

       <video className={classes.controlVideo} src=""></video>
         
    
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
