import React from 'react'
import classes from './pages.module.css' 
import flower from '../picture/surr-8491.png'
import sun from '../picture/surr-sun.png'
import cloud from '../picture/Group 2.png'
import task from '../picture/surr-573.png'
import Attention from '../picture/Group 7.png'
import NavBar from './NavBar'
import NavBarButton from './NavBarButton'
import { Link } from 'react-router-dom'
export default function MenuPage() {
  
  return (

    <div className={classes.menuPage}>
      <NavBar />

      <div className={classes.blocks}>
        <Link to='/plant'>
         <div className={classes.block1}>
           <img className={classes.attention} src={Attention} alt="" />
      <img className={classes.flower} src={flower} alt="" />
      <div className={classes.blockAttention}>
      
      </div>
      </div>
        </Link>
     
      <div className={classes.block2}>
      <img className={classes.sun} src={sun} alt="" />
      </div>
      <div className={classes.block3}>
      <img className={classes.cloud} src={cloud} alt="" />
      </div>
      <div className={classes.block4}>
      <img className={classes.task} src={task} alt="" />
      </div>
      </div>

   <NavBarButton />
    </div>
  )
}
