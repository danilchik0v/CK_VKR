import React, { Component } from "react";
import vk from "./svg-path 1.svg";
import { Link, NavLink } from "react-router-dom";
import Registration from "../Registration/Registration";
import burger from "./menu-line.svg";
import { useState } from "react";
import "./Header.css";

export default function Header(props) {

  const [flag, setFlag] = useState(false);
  function menu() {
    setFlag(!flag);
  }



  return (
    <div className="layer layer-header">

      <div className="social">
        <a href="https://vk.com/levshelopaev">
          <img style={{ objectFit: "fill", width: "24px", height: "24px" }} src={vk} />
        </a>
      </div>
      <div className={flag ? "menus menus_active" : "menus"}>
        <NavLink style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "unset" })} to="/">
          <span>
            Главная
          </span>
        </NavLink>
        <NavLink style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "unset" })} to="/contacts">
          <span>
            Контакты
          </span>
        </NavLink>
        <span onClick={props.registerer} >
          Запись
        </span>
      </div>
      <div className="burger_header">
        <img src={burger} className="" onClick={menu} />
      </div>

    </div>
  );
}



