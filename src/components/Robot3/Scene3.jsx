import React from "react";
import classes from "./scene.module.css";
import { loadPlayer } from "rtsp-relay/browser";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import flowerandrobot3 from "../../picture/flowerandrobot3.png";
import bitcoin from "../../picture/bitcoin.png";
import bath from "../../picture/scene3/bath.jpg";
import earth from "../../picture/scene3/earth.jpg";
import forest from "../../picture/scene3/forest.jpg";
import image from "../../picture/scene3/image.jpg";
import piramid from "../../picture/scene3/piramid.jpg";
import sky from "../../picture/scene3/sky.jpg";

const speedArr = [2000, 2000, 10000, 20000, 40000, "......", "^^^^^", "(((((("];
let i = 0;
export default function Scene3() {
  const [speed, setSpeed] = useState(40);

  setTimeout(() => {
    if (i <= speedArr.length - 1) {
      setSpeed(speedArr[i]);
      i++;
    } else setSpeed("E=mc2");
    return;
  }, 1000);
  
  return (
    <div className={classes.scene3} >
      <div className={classes.speed3}>
        <div className={classes.rectangle}>
          <h3>{speed} km/h</h3>

          <div className={classes.bitcoin}>
            <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
            <h3>0,0000909</h3>
          </div>
        </div>
        

        <div className={classes.pic}  >
          <div className={classes.bath} style={{marginLeft:'0'}}></div>
          <div className={classes.earth}></div>
          <div className={classes.forest}></div>
          <div className={classes.image}></div>
          <div  className={classes.piramid}></div>
          <div className={classes.sky}></div>
        </div>

      </div>
      <img
        className={classes.flowerandrobot3}
        src={flowerandrobot3}
        alt="img"
      />
    </div>
  );
}
