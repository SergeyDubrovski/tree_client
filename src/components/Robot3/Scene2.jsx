import React from "react";
import classes from "./scene.module.css";
import NavBar from "../NavBar";
import { loadPlayer } from "rtsp-relay/browser";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import desert from "../../picture/desert.png";
import desert2 from "../../picture/desert2.png";
import flowerandrobot2 from "../../picture/flowerandrobot2.png";
import switchpic from "../../picture/switch.png";
import bitcoin from "../../picture/bitcoin.png";
let i = 0;
let k = 0;
let speedSlow = [0, 6, 14, 12, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0];

export default function Scene2() {
  const [margin, setMargin] = useState(0);
  const [switchOn, setSwitchOn] = useState({});
  const [speed, setSpeed] = useState(0);
  const navigate = useNavigate();

  const changeFon = () => {
    i++;
    k = 0;
    let intID = setInterval(() => {
      setSpeed(speedSlow[k]);
      k++;
    }, 150);
    setSwitchOn({ transform: "rotate(180deg)", pointerEvents: "none" });
    setTimeout(() => {
      setSwitchOn({});
      if (i > 4) {
        setSwitchOn({
          transform: "rotate(180deg)",
          pointerEvents: "none",
          marginTop: "-2000px",
          transition: "all 1s",
        });
        setTimeout(() => {
          navigate("/scene/scene3");
        }, 200);
      }
      clearInterval(intID);
      setSpeed(0);
      k = 0;
    }, 2000);

    setMargin(margin - 500);
  };

  console.log(speed);
  return (
    <div className={classes.scene21}>
      <div className={classes.scene2} style={{ marginLeft: margin + "px" }}>
        <div className={classes.speed2}>
          <div className={classes.rectangle}>
            <h3>{speed} km/h</h3>

            <div className={classes.bitcoin}>
              <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
              <h3>0,0000909</h3>
            </div>
          </div>
        </div>
        <img
          className={classes.switchpic}
          onClick={changeFon}
          style={switchOn}
          src={switchpic}
          alt="img"
        />
      </div>

      <img
        className={classes.flowerandrobot2}
        src={flowerandrobot2}
        alt="img"
      />
    </div>
  );
}
