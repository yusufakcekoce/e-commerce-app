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
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={value} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" required />
        </label>
        <div className={styles.sbmtButton}>
          {userDetails.username ? (
            <div className={styles.way}>
              <input type="submit" value="Login" />

              <Link to={"/shop"}>
                <p className={styles.wayP}>Go Shop</p>
              </Link>
            </div>
          ) : (
            <input type="submit" value="Login" />
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
