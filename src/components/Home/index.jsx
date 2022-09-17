import styles from "./style.module.scss";

import React from "react";
import Support from "../../assets/Support";
import HomeBg from "../../img/home.jpg";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <img src={HomeBg} alt="" />
      <Support />
    </div>
  );
}

export default Home;
