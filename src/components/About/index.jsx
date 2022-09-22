import React from "react";
// import styles from "./style.module.scss"
import styles from "./style.module.scss";
import Logo from "../../img/logo.png";
import Vector1 from "../../img/vectors/vector1.png";
import DropDown from "../__delete__";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <DropDown/>
      <div className="logoImg">
        <img src={Logo} alt="" width="400px" />
      </div>
      <div className={styles.details}>
        <h2>
          Hello 👋, since you came here, I think you are very curious about us.
        </h2>
        <h2>So let's get started</h2>
        <h3>
          We were established on August 5, 2017 in Izmir. Our first mission on
          this path was to provide our customers with a quality and safe
          shopping environment. Together with our qualified and knowledgeable
          colleagues, we have come a long way in this regard.
        </h3>
      </div>
      <img src={Vector1} alt="" width="300px" />
      {/* <img src={Vector2} alt="" width="200px" /> */}
    </div>
  );
}

export default About;
