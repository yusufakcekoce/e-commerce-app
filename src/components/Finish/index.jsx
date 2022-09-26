import React from "react";
import styles from "./style.module.scss";

//images
import Tick from "../../img/vectors/tick.png";

function Finish() {
  return (
    <div className={styles.finishContainer}>
      <div className={styles.tickClass}>
        <img src={Tick} alt="" width="300px" />
      </div>
      <div className={styles.dtls}>
        <h3>Your order has been received</h3>
        <p>Feel happy while using it</p>
        <em>Order number: 1969421907</em>
      </div>
    </div>
  );
}

export default Finish;
