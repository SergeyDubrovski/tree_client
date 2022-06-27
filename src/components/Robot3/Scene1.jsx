import React from 'react';
import classes from './scene.module.css';
import NavBar from '../NavBar';
import { loadPlayer } from "rtsp-relay/browser";
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import flower from '../../picture/flowerandrobot.png'
import switchpic from '../../picture/switch.png'

export default function Scene1() {


  return (

    <div className={classes.scene1}>

      
        <img className={classes.flower} src={flower} alt="img" />
      

      <div className={classes.speed}>

        <div className={classes.rectangle}>
          <h2>0 km/h</h2>
        </div>
        <Link to="/scene/scene2">
        <img className={classes.switch} src={switchpic} alt="img" />
        </Link>
      </div>



    </div>
  )
}
