import React, { useEffect } from "react";
import classes from "./pages.module.css";
import { Link } from "react-router-dom";
import kolba from "../picture/root/kolbaroot13.png";
import NavBar from "./NavBar";
import picture from "../picture/picture";
import { useState } from "react";
import { useRef } from "react";
import robot1 from "../picture/robot11.png";
import robot2 from "../picture/robot2.png";
import robot3 from "../picture/dino.png";


export default function Roots() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Запускаем интервал
    setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === picture.length - 1 ? 0 : current + 1;
        // Возвращаем индекс
        return res;
      });
    }, 300);
    // Выключаем интервал
    return () => clearInterval();
  }, []);
  // Вычисляем индекс предыдущего слайда

  return (
    <div className={classes.startPage}>
      <NavBar />
      {picture[activeIndex]}
      <div className={classes.robots}>
        <Link to="/monitor">
          <img className={classes.robot1} src={robot1} alt="img" />
        </Link>
        <Link to="/scene/scene1">
          <img className={classes.robot2} src={robot2} alt="img" />
        </Link>
        
        <img className={classes.robot3} src={robot3} alt="img" />
      </div>
    </div>
  );
}
