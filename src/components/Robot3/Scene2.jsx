import React from 'react';
import classes from './scene.module.css';
import NavBar from '../NavBar';
import { loadPlayer } from "rtsp-relay/browser"; 
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import desert from '../../picture/desert.png'
import desert2 from '../../picture/desert2.png'
import flowerandrobot2 from '../../picture/flowerandrobot2.png'
import switchpic from '../../picture/switch.png'
import bitcoin from '../../picture/bitcoin.png'

export default function Scene2() {
  
  
  return (

    <div className={classes.scene2}>
      <div className={classes.speed2}>
        <div className={classes.rectangle}>
            <h2>0 km/h</h2>

            <div className={classes.bitcoin}>
               <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
              <h3>0,0000909</h3>
            </div>
            
        </div>
       <Link to="/scene/scene3">
        <img className={classes.switchpic} src={switchpic} alt="img" />
       </Link>
       
      </div>
          
          <img className={classes.flowerandrobot2} src={flowerandrobot2} alt="img" />
   
      
   
    </div>
  )
}
 