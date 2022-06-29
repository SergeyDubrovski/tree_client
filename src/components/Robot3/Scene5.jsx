import React from "react";
import classes from "./scene.module.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import flower2 from "../../picture/flowerandrobot4.png";


export default function Scene5() {
  
  return (
    <div className={classes.scene5}>
      <img className={classes.flower2} src={flower2} alt="img" />
      
    </div>
  );
}
