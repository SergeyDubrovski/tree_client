import React from 'react';
import classes from './camers.module.css';
import NavBar from '../NavBar';


import { Link } from 'react-router-dom'

export default function SunM() {

  return (

    <div className={classes.treePage}>
      <NavBar /> 
      <div className={classes.treeTV}>
        <div className={classes.text}>
          <p className={classes.score} >
             Score: 10
          </p>
          <p className={classes.account}>
              Account: 10
           </p>
          <p className={classes.air}>
              Air: 10
          </p>
          <p className={classes.water}>
            Water: 10
          </p>
        </div>
      
      </div>
      
    </div>
  )
} 
