import React from "react";
import classes from "./camers.module.css";
import NavBar from "../NavBar";
import { loadPlayer } from "rtsp-relay/browser";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function SunM() {
  const [video, videoSet] = useState("none");
  const canvas = useRef(null);
  useEffect(() => {
    if (!canvas.current) throw new Error("Ref is null");

    loadPlayer({
      url: "ws://91.215.176.34:7012/api/stream2",
      canvas: canvas.current,
    });
  }, []);

  setTimeout(() => {
    videoSet("block");
  }, 5000);

  return (
    <div className={classes.sunPage}>
      <NavBar />
      <div className={classes.treeTV}>
        <canvas style={{ display: video }} ref={canvas} />
        <div className={classes.text}>
          <p className={classes.score}>Score: 10</p>
          <p className={classes.account}>Account: 10</p>
          <p className={classes.air}>Air: 10</p>
          <p className={classes.water}>Water: 10</p>
        </div>
      </div>
    </div>
  );
}
