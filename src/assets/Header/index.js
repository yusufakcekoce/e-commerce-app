import React from "react";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png"

import "./style.css";
function Header() {
  return (
    <section class="top-nav">
      <div className="logo">
        <img src={Logo} alt="" width="225px"/>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
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
          <Link to={"/"}>
            <MdOutlineShoppingBasket />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Header;
