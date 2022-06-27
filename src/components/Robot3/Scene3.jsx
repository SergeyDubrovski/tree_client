import React from 'react';
import classes from './scene.module.css';
import { loadPlayer } from "rtsp-relay/browser"; 
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import flowerandrobot3 from '../../picture/flowerandrobot3.png'
import bitcoin from '../../picture/bitcoin.png'
import bath from '../../picture/scene3/bath.jpg'
import earth from '../../picture/scene3/earth.jpg'
import forest from '../../picture/scene3/forest.jpg'
import image from '../../picture/scene3/image.jpg'
import piramid from '../../picture/scene3/piramid.jpg'
import sky from '../../picture/scene3/sky.jpg'



export default function Scene3() {
    
  return (

    <div className={classes.scene3}>


      <div className={classes.speed3}>
       <div className={classes.rectangle}>
            <h2>0 km/h</h2>
        
           <div className={classes.bitcoin}>
               <img className={classes.bitcoinPic} src={bitcoin} alt="img" />
              <h3>0,0000909</h3>
        </div>


        </div>
     <div className={classes.pic}>
<img className={classes.bath} src={bath} alt="img" />
<img className={classes.earth} src={earth} alt="img" />
<img className={classes.forest} src={forest} alt="img" />
<img className={classes.image} src={image} alt="img" />
<img className={classes.piramid} src={piramid} alt="img" />
<img className={classes.sky} src={sky} alt="img" />

</div>

       

      </div>
 <img className={classes.flowerandrobot3} src={flowerandrobot3} alt="img" />
      
        
      

      
   
        

        
    </div>
  )
}
 