import React, { useContext, useState } from "react";
import { UserContext, UserDispatchContext } from "../../UserProvider";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import LoginPic from "../../img/vectors/vector2.jpg";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import styles from "./style.module.scss";
import Shop from "../Shop";

function Login() {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setUserDetails({ username: value });
    e.preventDefault();
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.loginHeader}>Login</h1>
          <label className={styles.inputTag}>
            <i>
              <BiUser /> Username:
            </i>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              pattern="[A-Z a-z]*"
              title="please enter only letter"
              minLength="2"
              maxLength="10"
              required
            />
          </label>
          <label className={styles.inputTag}>
            <i>
              <RiLockPasswordLine /> Password:
            </i>
            <input type="password" minLength="4" maxLength="10" required />
          </label>
          <div className={styles.sbmtButton}>
            <div className={styles.way}>
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
        <div className={styles.loginPic}>
          <img src={LoginPic} alt="" width="400px" />
        </div>
      </div>
    </div>
  );
}

export default Login;
