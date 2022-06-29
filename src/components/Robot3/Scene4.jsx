import React from "react";
import classes from "./scene.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import flowerandrobot3 from "../../picture/flowerandrobot3.png";
import switchpic from "../../picture/switch.png";
import bitcoin from "../../picture/bitcoin.png";
import { useEffect } from "react";

let speedSlow = [0, 6, 14, 12, 4, 3, 3, 0,0,0, 0]; 
export default function Scene4() {
  const [margin, setMargin] = useState(0);
  const [switchOn, setSwitchOn] = useState({});
  const [speed, setSpeed] = useState(0); 
  const navigate = useNavigate;

  useEffect(() => {
    setTimeout(() => {
      setMargin(2600);
      setTimeout(() => {
        setMargin(600);
      }, 1300);
    }, 1200);
  }, []);
  

  return (
    <div className={classes.scene4}>
      <div className={classes.pic}>
        <div className={classes.speed4}>
          <div className={classes.rectangle4}>
            <h3> km/h</h3>

            <div className={classes.bitcoin}>
              <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
              <h3>0,0000909</h3>
            </div>
          </div>
        </div>
        <img className={classes.switchpic} src={switchpic} alt="img" />
      </div>

      <img
        className={classes.flowerandrobot3}
        style={{ marginLeft: margin + "px" }}
        src={flowerandrobot3}
        alt="img"
      />
    </div>
  );
}
