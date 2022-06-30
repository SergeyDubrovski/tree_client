import React from "react";
import classes from "./scene.module.css";
import {  Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import flower2 from "../../picture/flowerandrobot4.png";
import spruce  from "../../picture/spruce.png"; 

export default function Scene5() {
  
  return (
    <div className={classes.scene5}>
      <img className={classes.flower2} src={flower2} alt="img" />
      <Link to="/start">
          <img className={classes.spruceLeft2} src={spruce} alt="img" />
        </Link> 
    </div>
  );
}
