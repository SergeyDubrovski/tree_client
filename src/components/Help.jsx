import React, { useState } from "react";
import classes from "./pages.module.css";
import flowerandrobot6 from "../picture/flowerandrobot6.png";
import spruce from "../picture/spruce.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Help() {
  const [margin, setMargin] = useState(1280);
  let i = 1280;
  useEffect(() => {
    setInterval(() => {
      i--;
      setMargin(i);

      if (i < -3000) {
        i = 2500;
        setMargin(i);
      }
    });
  }, []);
  return (
    <div className={classes.help}>
      <div className={classes.helpH} style={{ marginLeft: margin + "px" }}>
        Help the Robot raise a dinosaur!
      </div>
      <div className={classes.helpBlock}>
        <img className={classes.flowerandrobot6} src={flowerandrobot6} alt="" />
        <Link to="/start">
          <img className={classes.spruceLeft2} src={spruce} alt="img" />
        </Link>
      </div>
    </div>
  );
}
