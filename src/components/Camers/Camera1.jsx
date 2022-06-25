import React, { useRef, useEffect } from "react";
import { loadPlayer } from "rtsp-relay/browser";

const Camera1 = (props) => {
  const canvas = useRef(null);
  let urlCam;

  switch (props.cam) {
    case "1":
      urlCam = "ws://localhost:7010/api/stream1";
      break;
    case "2":
      urlCam = "ws://localhost:7012/api/stream2";
      break;
    case "3":
      urlCam = "ws://localhost:7010/api/stream1";
      break;
    default:
      urlCam = "ws://localhost:7010/api/stream1";
      break;
  }

  useEffect(() => {
    if (!canvas.current) throw new Error("Ref is null");
    
    loadPlayer({
      url: urlCam,
      canvas: canvas.current,
    });
  }, []);

  console.log(urlCam);
  return (
    <div>
      <canvas  style={{ display: props.style }} ref={canvas} />
    </div>
  );
};
export default Camera1;
