import React, { useRef, useEffect, useState } from "react";
import { loadPlayer } from "rtsp-relay/browser";

const Camera1 = (props) => {
  const canvas = useRef(HTMLCanvasElement);
  const [video, setVideo] = useState('none')

  useEffect(() => {
    if (!canvas.current) throw new Error("Ref is null");

    loadPlayer({
      url: "ws://localhost:5000/api/stream",
      canvas: canvas.current,
    });
  }, []);
  const onClick = () => {
      setVideo('block')
  }

  return (
    <div>
      <canvas style={{ display: video }} ref={canvas} />
    <button onClick = {onClick}>JJJJ</button>
    </div>
  );
};
export default Camera1;
