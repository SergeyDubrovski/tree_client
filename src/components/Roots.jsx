import React, { useEffect } from "react";
import classes from "./pages.module.css";
import { Link } from "react-router-dom";
import kolba from "../picture/root/kolbaroot13.png";
import NavBar from "./NavBar";
import { picture } from "../picture/picture";
import { useState } from "react";
import RootPic from "./RootPic";
import { useRef } from "react";
import robot1 from '../picture/robot1.png'
import robot2 from '../picture/robot2.png'
import robot3 from '../picture/dino.png'
import spruce from '../picture/spruce.png'

let i = 0;
export default function Roots() {
  const [pic, setPic] = useState(picture[0]);
const ref = useRef();



  picture.forEach((value, index) => {
 
  });
   setTimeout(() => {
    if(i<13)
    {setPic(picture[i]);
      }
      i++
    }, 1000);
   console.log(i);
  return (
    <div ref={ref}  className={classes.startPage}>
      <NavBar />

    <RootPic   pic={pic}/>
    
    <div className={classes.robots}>
    <img className={classes.robot1}  src={robot1} alt="img" />
    <img className={classes.robot2}  src={robot2} alt="img" />
    <img className={classes.robot3}  src={robot3} alt="img" />
    
    </div>
     <img className={classes.spruceTop} src={spruce} alt="img" />
     
      
      
    </div>
  );
}
