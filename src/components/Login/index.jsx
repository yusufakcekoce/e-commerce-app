import React, { useContext, useState } from "react";
import { UserContext, UserDispatchContext } from "../../UserProvider";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

function Login() {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setUserDetails({ username: value });
    console.log(userDetails);
    e.preventDefault();
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.context}>
        <div className={styles.loginCol}>
          <h1 className="title">LOGIN</h1>
          <input
            type="text"
            placeholder="Username"
            value={value}
            onChange={handleChange}
          />
          <input type="password" placeholder="Password" required />
          <div className={styles.btnButton}>
            <button onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
