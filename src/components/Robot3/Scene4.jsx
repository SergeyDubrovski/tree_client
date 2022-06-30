import React from "react";
import classes from "./scene.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import flowerandrobot5 from "../../picture/flowerandrobot5.png";
import flowerandrobot50 from "../../picture/flowerandrobot50.png";
import switchpic from "../../picture/switch.png";
import bitcoin from "../../picture/bitcoin.png";
import { useEffect } from "react";

export default function Scene4() {
  const [margin, setMargin] = useState(0);
  const [switchOn, setSwitchOn] = useState({});
  const [speed, setSpeed] = useState(0);
  const [money, setMoney] = useState(0.0000909);
  const [robot, setRobot] = useState(flowerandrobot50); 
  const navigate = useNavigate();
  let i = 0;
  let k = 0.0000909;
  let n = 0;
  let speedSlow = [0, 0, 0, 0, 21, 22, -2, -7, -8, 0, 0, 0];

  useEffect(() => {
    let timeid = setInterval(() => {
      i++;
      console.log(i);
      if (i < speedSlow.length - 1) setSpeed(speedSlow[i]);
    }, 500);
    setTimeout(() => {
      setMargin(2600);

      setTimeout(() => {
        setMargin(700);
      }, 1300);

      setSpeed(0);
    }, 1200);
    setTimeout(() => {
      clearInterval(timeid);
    }, 5000);
  }, []);

  const changeBitc = () => {
    let moneyId = setInterval(() => {
      n++;
      k = Math.round((k - 0.0000001) * 10000000) / 10000000;
      setMoney(k);
      if (n > 1000) {
        clearInterval(moneyId);
        setTimeout(() => {
          navigate("/scene/scene5");
        }, 2000);
      }
    });
  };

  return (
    <div className={classes.scene4}>
      <div className={classes.pic4}>
        <div className={classes.speed4}>
          <div className={classes.rectangle4}>
            <h3> {speed}km/h</h3>

            <div className={classes.bitcoin}>
              <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
              <h3>{money}</h3>
            </div>
          </div>
        </div>
        <img
          className={classes.switchpic}
          style={switchOn}
          onClick={() => {
            setSwitchOn({ transform: "rotate(180deg)", pointerEvents: "none" });
            changeBitc();
            setRobot(flowerandrobot5)
          }}
          src={switchpic}
          alt="img"
        />
      </div>

      <img
        className={classes.flowerandrobot50}
        style={{ marginLeft: margin + "px" }}
        src={robot}
        alt="img"
      />
    </div>
  );
}
