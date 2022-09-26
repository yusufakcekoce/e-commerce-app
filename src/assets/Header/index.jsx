import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Profile from "../../components/Profile";
import { UserContext } from "../../UserProvider";

//images
import Logo from "../../img/logo.png";
import { MdOutlineShoppingBasket } from "react-icons/md";

import "./style.css";
function Header() {
  const userDetails = useContext(UserContext);
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
          <Link to={"/basket"}>
            <MdOutlineShoppingBasket />
          </Link>
        </li>
        <li>
          {!userDetails.username ? (
            <Link to={"/login"}>Login</Link>
          ) : (
            <Profile />
          )}
        </li>
      </ul>
    </section>
  );
}

export default Header;
