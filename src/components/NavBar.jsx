import React from 'react'
import classes from './pages.module.css' 
import home from '../../src/picture/1-home-2.png'
import photo from '../../src/picture/photo.png'
export default function NavBar() {
  return (
    <div className={classes.menuTop}>
       <img className={classes.menuHome} src={home} />
       <h3>Hello, Julia</h3>
       <img className={classes.menuPhoto} src={photo} />


    </div>
  )
}
