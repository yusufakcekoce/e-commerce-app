import React, { useContext, useState } from "react";
import { UserContext, UserDispatchContext } from "../../UserProvider";
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
    <div className={styles.container}>
      <div className={styles.context}>
        <div className={styles.col}>
          <h1 className="title">LOGIN</h1>
          <br />
          <input
            type="text"
            placeholder="Username"
            value={value}
            onChange={handleChange}
          />
          <input type="password" placeholder="Password" required />
          <br />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
