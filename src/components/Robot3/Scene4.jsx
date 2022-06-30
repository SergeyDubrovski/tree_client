import React from "react";
import classes from "./scene.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import flowerandrobot5 from "../../picture/flowerandrobot5.png";
import switchpic from "../../picture/switch.png";
import bitcoin from "../../picture/bitcoin.png";
import { useEffect } from "react";


export default function Scene4() {
  const [margin, setMargin] = useState(0);
  const [switchOn, setSwitchOn] = useState({});
  const [speed, setSpeed] = useState(0);
  const navigate = useNavigate;
  let i = 0;
  let speedSlow = [0, 21, 22, 31, 20, 6, 0 ,-2, -7, -8, 0, 0, 0];
  useEffect(() => {
    let id1 = setInterval(() => {
      i++;
      setSpeed(speedSlow[i]);
    }, 400);

    setTimeout(() => {
      setMargin(2600);

      setTimeout(() => {
        setMargin(700);
        clearInterval(id1) 
      }, 1300);
      setSpeed(0); 
    }, 1200);
    
  }, []);

  return (
    <div className={classes.scene4}>
      <div className={classes.pic4}>
        <div className={classes.speed4}>
          <div className={classes.rectangle4}>
            <h3> {speed}km/h</h3>

            <div className={classes.bitcoin}>
              <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
              <h3>0,0000909</h3>
            </div>
          </div>
        </div>
  <img
          className={classes.switchpic}
          style={switchOn}
          onClick={() => {
            setSwitchOn({ transform: "rotate(180deg)", pointerEvents: "none" });
          }}
          src={switchpic}
          alt="img"
        />
      </div>

      <img
        className={classes.flowerandrobot5}
        style={{ marginLeft: margin + "px" }}
        src={flowerandrobot5}
        alt="img"
      />
    </div>
  );
}
