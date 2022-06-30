import React from "react";
import classes from "./scene.module.css";
import { useEffect } from "react";
import { useState } from "react";
import flowerandrobot3 from "../../picture/flowerandrobot3.png";
import bitcoin from "../../picture/bitcoin.png";
import { useNavigate } from "react-router-dom";

const speedArr = [2000, 2000, 10000, 20000, 40000, "......", "^^^^^", "(((((("];
let i = 0;
export default function Scene3() {
  const [speed, setSpeed] = useState(40);
  const [margin, setMargin] = useState(0);
  const navigate = useNavigate() ; 
  let j = 0;
  useEffect(() => {
    getSky();
  }, []);

  let a = 0;
  let b = 0;
  function getSky() {
    i = 0;
    let timer = setInterval(function () {
      setMargin(a);

      if (a > -7680) a = a - 1280;
      else a = 0;
    });

    setTimeout(() => {
      if (b > -6400) b = b - 1280;
      else b = 0;
      clearInterval(timer);
      setMargin(b);
    }, 300);

    j++;

    if (j < 20) {
      setTimeout(function () {
        getSky();
      }, 1000);
    } else {navigate('/scene/scene4')  ;}
  }

  setTimeout(() => {
    if (i <= speedArr.length - 1) {
      setSpeed(speedArr[i]);
      i++;
    } else setSpeed("E=mc2");
  }, 500);

  return (
    <div className={classes.scene3}>
      <div className={classes.speed3}>
        <div className={classes.rectangle}>
          <h3>{speed} km/h</h3>

          <div className={classes.bitcoin}>
            <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
            <h3>0,0000909</h3>
          </div>
        </div>

        <div className={classes.pic}>
          <div className={classes.bath} style={{ marginLeft: margin }}></div>
          <div className={classes.earth}></div>
          <div className={classes.forest}></div>
          <div className={classes.image}></div>
          <div className={classes.piramid}></div>
          <div className={classes.sky}></div>
        </div>
      </div>
      <img
        className={classes.flowerandrobot3}
        src={flowerandrobot3}
        alt="img"
      />
    </div>
  );
}
