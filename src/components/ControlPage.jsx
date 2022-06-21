import React, { useState } from "react";
import classes from "./pages.module.css";
import Poligon from "../picture/Polygon.png";
import NavBarButton from "./NavBarButton";
import Camera1 from "./techPage/Camera1";
import { switchRelay } from "../API/arduinoService";

export default function ControlPage(props) {
  const [monitor, setMonitor] = useState(true);
  const [video, setVideo] = useState("none");
  const [relay, setRelay] = useState({ r1: false, r2: false });
  const [delay, setDelay] = useState(true);

  setTimeout(() => {
    setDelay(false);
  }, 3000);

  const onClick = () => {
    setMonitor(!monitor);
    if (monitor) setVideo("block");
    else setVideo("none");
  };

  const giveRelay = (e) => {
    relay[e.target.id] = !relay[e.target.id];
    setRelay({ ...relay });

    switchRelay({ r1: relay.r1, r2: relay.r2 });
  };

  return (
    <div className={classes.controlPage}>
      <div className={classes.controlVideoBlock}>
        <div className={classes.controlVideo}>
          <Camera1 className={classes.controlCamera} height={100} width={200} style={video}  />
        </div>
      {delay ? (
          <h2>WAIT...</h2>
        ) : (
          <div className={classes.btnVideo}>
            <button style={{marginLeft:'20px'}} className={classes.btnVideoMini} onClick={onClick}>
              <img className={classes.poligonVideo} src={Poligon} alt="" />
            </button>
          </div>
        )}
     
      </div>

      <div className={classes.btnLightWater}>
        <div className={classes.light}>
          <p>Light</p>

          <button id="r1" onClick={giveRelay} className={classes.btnLight}>
            {relay.r1 ? "OFF" : "ON"}
          </button>
        </div>

        <div className={classes.water}>
          <p>Water</p>

          <button id="r2" onClick={giveRelay} className={classes.btnWater}>
            {relay.r2 ? "OFF" : "ON"}
          </button>
        </div>
      </div>

      <div className={classes.controlText}>
        <div className={classes.indicatorText}>
          <p>Air temperature</p>
          <p>Air humidity</p>
          <p>Soil moisture</p>
        </div>
        <div className={classes.indicatorNumber}>
          <p>22.5</p>
          <p>22.5</p>
          <p>22.5</p>
        </div>
      </div>
      <NavBarButton />
    </div>
  );
}
