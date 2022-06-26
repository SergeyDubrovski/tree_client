import React from "react";
import classes from "./pages.module.css";
import spruce from "../picture/spruce.png";
import { useNavigate } from "react-router-dom"; 
export default function NavBar() {
  const navigate = useNavigate(); 
  return (
    <div className={classes.navBar}>
      <div className={classes.lineOne}></div>
      <div className={classes.spruce}>
        <img className={classes.spruceLeft} onClick={() => {navigate(-1)}} src={spruce} alt="img" />
      
      </div>

      <div className={classes.lineTwo}></div>
    </div>
  );
}
