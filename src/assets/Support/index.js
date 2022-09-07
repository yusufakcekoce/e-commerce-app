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
          <p>Evlere Servis</p>
          <p className={styles.bottom}>İzmir'in her bölgesine ücretsiz kargo</p>
        </li>
        <li>
          <CgArrowsExchangeAlt />
          <p>İade Hakkı</p>
          <p className={styles.bottom}>Koşulsuz şartsız iade imkanı</p>
        </li>
        <li>
          <BsHeadset />
          <p>Destek Hattı</p>
          <p className={styles.bottom}>7/24 iletişim imkanı</p>
        </li>
        <li>
          <BsCash />
          <p>Ödeme Çeşitliliği</p>
          <p className={styles.bottom}>İster online ister kapıda öde</p>
          <p></p>
        </li>
      </ul>
    </div>
  );
}

export default Support;
