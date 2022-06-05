import React from 'react'
import classes from './pages.module.css' 
import Pic from '../picture/surr-849.png'
import { Link } from 'react-router-dom'
import Poligon from '../picture/Polygon.png'

export default function StartPage() {

  return (
    <div className={classes.startPages}>
      <img className={classes.startPic} src={Pic}/>
      <h1 className={classes.startP}>
      Grow yur plant
      </h1>
          
          <div className={classes.btnStart}>
             <div className={classes.btnStartMaxi}>
            
          </div>
      
            <Link to='/menu'>
               <button className={classes.btnStartMini}>
                 <img className={classes.poligon} src={Poligon} alt="" />
              </button>
            </Link>
          </div>
         
      
      
      
    </div>
  )
}