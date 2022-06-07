import React, { useRef, useEffect, useState } from "react";
import { loadPlayer } from "rtsp-relay/browser";

const Camera1 = (props) => {
  const canvas = useRef(HTMLCanvasElement);
  
  useEffect(() => {
    if (!canvas.current) throw new Error("Ref is null");

    loadPlayer({
      url: "ws://91.215.176.34:7003/api/stream",
      canvas: canvas.current,
    });
  }, []);


  return (
    <div>
      <canvas  height={props.height} style={{display:props.style }} ref={canvas} />
    
    </div>
  );
};
export default Camera1;
