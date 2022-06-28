import React from "react";
import classes from "./scene.module.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import flower from "../../picture/flowerandrobot.png";
import switchpic from "../../picture/switch.png";

export default function Scene1() {
  const navigate = useNavigate();
  const [switchOn, setSwitchOn] = useState({});
 
  const onClick = () => {
    setSwitchOn({ transform: "rotate(180deg)" });
    setTimeout(() => {
      navigate("/scene/scene2");
    }, 500);
  };

  return (
    <div className={classes.scene1}>
      <img className={classes.flower} src={flower} alt="img" />

      <div className={classes.speed}>
        <img
          className={classes.switch}
          onClick={onClick}
          style={switchOn}
          src={switchpic}
          alt="img"
        />
      </div>
    </div>
  );
}
