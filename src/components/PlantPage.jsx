import React from 'react'
import classes from './pages.module.css'
import NavBar from './NavBar'
import NavBarButton from './NavBarButton'
import Video from '../picture/surr-543.png'
import Indicators from '../picture/Frame 4.png'
import { Link } from 'react-router-dom'

export default function PlantPage() {

  return (
    <div className={classes.plantPages}>
 <NavBar />

   <Link className={classes.plantVideoIndicators} to='/control'>
 <img className={classes.video} src={Video} alt="" />
 <img className={classes.indicators} src={Indicators} alt="" />
 </Link>



 
 <div className={classes.text}>
    <p>Air temperature</p>
    <p>Air humidity</p>
    <p>Soil moisture</p>

 </div>
 
 <NavBarButton />
    </div>
  )
}
