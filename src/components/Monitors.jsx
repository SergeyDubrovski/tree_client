import React from "react";
import classes from "./pages.module.css";
import NavBar from "./NavBar";
import monitorone from "../picture/monitor1.png";
import monitortwo from "../picture/monitor2.png";
import monitorthree from "../picture/monitor3.png";
import { Link } from "react-router-dom";

export default function Monitors() {
  return (
    <div className={classes.monitors}>
      <NavBar />
      <div className={classes.monitorList}>
        <Link to="/monitor/sun">
          <img className={classes.monitor1} src={monitorone} alt="" />
        </Link>
        <Link to="/monitor/tree">
          <img className={classes.monitor2} src={monitortwo} alt="" />
        </Link>
        <Link to="/monitor/rain">
          <img className={classes.monitor3} src={monitorthree} alt="" />
        </Link>
      </div>
    </div>
  );
}
