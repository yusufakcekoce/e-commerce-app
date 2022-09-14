import React, { useState } from "react";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import Profile from "../../components/Profile";
import Logo from "../../img/logo.png";

import "./style.css";
function Header() {

  return (
    <section className="top-nav">
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="" width="225px" />
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/finish"}>
            <MdOutlineShoppingBasket />
          </Link>
        </li>
        <li>
          <Link to={"/login"}><Profile/></Link>
        </li>
      </ul>
    </section>
  );
}

export default Header;
