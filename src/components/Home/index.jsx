import styles from "./style.module.scss";

import React from "react";
import Support from "../../assets/Support";
import HomeBg from "../../img/home.jpg";
import Promotion from "../Promotion";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <img src={HomeBg} alt="" />
      <Promotion/>
      <Support />
    </div>
  );
}

export default Home;
