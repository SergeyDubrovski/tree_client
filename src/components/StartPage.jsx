import React from "react";
import classes from "./pages.module.css";
import { Link } from "react-router-dom";
import kolba from '../picture/kolba.png'
import spruce from '../picture/spruce.png'

export default function StartPage() {
  return (
    <div className={classes.startPage}>
 <div className={classes.navBar}>
      <div className={classes.lineOne}></div>
      <div className={classes.spruce}>
      <Link to="/start">
        <img className={classes.spruceBottom}  src={spruce} alt="img" />
        </Link>
      </div>

      <div className={classes.lineTwo}></div>
    </div>

      <h1 >Grow your plant</h1>

      <div >
        <div>
          <img className={classes.kolbaPic} src={kolba} alt="" />
        </div>
        <div>
      

        </div>
        

       
      </div>
    </div>
  );
}
