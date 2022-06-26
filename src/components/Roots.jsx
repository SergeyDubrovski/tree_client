import React from "react";
import classes from "./pages.module.css";
import { Link } from "react-router-dom";
import kolba13 from '../picture/root/kolbaroot13.png'

import NavBar from './NavBar'

export default function Roots() {
  return (
    <div className={classes.startPage}>
<NavBar />
   
        <div>
          <img className={classes.kolba13} src={kolba13} alt="" />
        </div>
      
   
    </div>
  );
}
