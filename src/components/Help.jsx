import React from 'react'
import classes from "./pages.module.css";
import flowerandrobot6 from "../picture/flowerandrobot6.png";

export default function Help() {
  return (
    <div className={classes.help}>
      <div className={classes.helpH}>Help the robot raise a dinosaur!</div>
      <img className={classes.flowerandrobot6} src={flowerandrobot6} alt="" />
      
    </div>
  )
}
