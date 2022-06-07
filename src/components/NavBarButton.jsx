import React from 'react'
import classes from './pages.module.css' 
import arrow from '../picture/34-arrow-left-2.png'
import chat from '../picture/47-chat-20.png'
import message from '../picture/76-notification.png'
export default function NavBarButton() {
  return (
    <div className={classes.menuButton}>
       <img className={classes.menuArrow} src={arrow} />
       <img className={classes.menuChat} src={chat} />
       <img className={classes.menuMessage} src={message} />


    </div>
  )
}
