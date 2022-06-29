import React from "react";
import classes from "./scene.module.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import flowerandrobot3 from "../../picture/flowerandrobot3.png";
import switchpic from "../../picture/switch.png";
import bitcoin from "../../picture/bitcoin.png";

export default function Scene4() {
 

  return (
    <div className={classes.scene4}>


      <div className={classes.pic} >
       
       <div className={classes.speed4}>
          <div className={classes.rectangle4}>
            <h3> km/h</h3>

            <div className={classes.bitcoin}>
              <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
              <h3>0,0000909</h3>
            </div>
          </div>
        </div>
        <img
          className={classes.switchpic}
              
          src={switchpic}
          alt="img"
        />
      </div>

      <img
        className={classes.flowerandrobot3}
        src={flowerandrobot3}
        alt="img"
      />
    </div>
   
  );
}
