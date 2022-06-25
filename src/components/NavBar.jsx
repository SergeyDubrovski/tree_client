import React from 'react'
import classes from './pages.module.css' 
import spruce from '../picture/spruce.png';
export default function NavBar() {
  return (
    <div className={classes.navBar} >
        <div className={classes.lineOne}>

        </div>
        <div className={classes.spruce}>
            <img className={classes.spruceLeft} src={spruce} alt="img" />
      <img className={classes.spruceRight} src={spruce} alt="img" />
        </div>
    
      <div className={classes.lineTwo}>
          
        </div>


    </div>
  )
}
