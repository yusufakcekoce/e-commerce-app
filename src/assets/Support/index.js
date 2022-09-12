import React from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { BsTruck } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsCash } from "react-icons/bs";
import styles from "./style.module.scss";

function Support() {
  return (
    <div className={styles.supportContainer}>
      <ul className={styles.supUl}>
        <li>
          <BsTruck />
          <p>Delivery by Cargo</p>
          <p className={styles.bottom}>
            Free shipping to all regions of Turkey
          </p>
        </li>
        <li>
          <CgArrowsExchangeAlt />
          <p>Right of Return</p>
          <p className={styles.bottom}>Unconditional return opportunity</p>
        </li>
        <li>
          <BsHeadset />
          <p>Support Line</p>
          <p className={styles.bottom}>7/24 communication opportunity</p>
        </li>
        <li>
          <BsCash />
          <p>Payment Variety</p>
          <p className={styles.bottom}>By card, cash, and soon by phone</p>
          <p></p>
        </li>
      </ul>
    </div>
  );
}

export default Support;
