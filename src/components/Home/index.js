import styles from "./style.module.scss";

import React from "react";
import Support from "../../assets/Support";
import Fish from "../../img/fishingg.jpg";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <img src={Fish} alt="" />
      <Support />
    </div>
  );
}

export default Home;
