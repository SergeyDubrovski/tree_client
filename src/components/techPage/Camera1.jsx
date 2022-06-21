import React, { useRef, useEffect } from "react";
import { loadPlayer } from "rtsp-relay/browser";

const Camera1 = (props) => {
  const canvas = useRef(null);

  useEffect(() => {
    
    if (!canvas.current) throw new Error("Ref is null");
     console.log(canvas.current );
    loadPlayer({
      url: "ws://91.215.176.34:7010/api/stream",
      canvas: canvas.current,
      
    });
     
    }, []);
    const onData = (e) => {
      
      const ctx = e.getContext('2d'); 
     console.log(ctx   );
    }  
    
  return (
    <div>
        <canvas
      onClick={onData} 
        height={100}
        width= {100} 
        style={{ display: props.style, marginTop:'100px'  }}
        ref={canvas}
      />
     
    </div>
    
    
  );
};
export default Camera1;
