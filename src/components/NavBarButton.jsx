import React from "react";
import classes from "./pages.module.css";
import arrow from "../picture/34-arrow-left-2.png";
import chat from "../picture/47-chat-20.png";
import message from "../picture/76-notification.png";
import { useNavigate } from "react-router-dom";
export default function NavBarButton() {
  const navigate = useNavigate();
  return (
    <div className={classes.menuButton}>
      <img
        onClick={() => {
          navigate(-1);
        }}
        className={classes.menuArrow}
        src={arrow}
        alt=""
      />
      <img className={classes.menuChat} src={chat} alt="" />
      <img className={classes.menuMessage} src={message} alt="" />
    </div>
  );
}
