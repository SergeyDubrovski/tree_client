import React, { useEffect } from "react";
import classes from "./pages.module.css";
import { Link } from "react-router-dom";
import kolba from "../picture/root/kolbaroot13.png";
import NavBar from "./NavBar";
import { picture } from "../picture/picture";
import { useState } from "react";
import RootPic from "./RootPic";
import { useRef } from "react";
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
    </div>
  );
}
