import React from 'react'
import classes from "./pages.module.css"; 
export default function RootPic(props) {
  return (
    <div>
    <img className={classes.kolba13} src={props.pic} alt="" />
  </div> 
  )
}
