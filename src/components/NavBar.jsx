import React from 'react'
import classes from './pages.module.css' 
import home from '../../src/picture/1-home-2.png'
export default function NavBar() {
  return (
    <div className={classes.menuTop}>
       <img src={home} />

    </div>
  )
}
