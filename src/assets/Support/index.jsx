import React from "react";
import styles from "./style.module.scss";

//images
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { BsTruck } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsCash } from "react-icons/bs";

function Support() {
  return (
    <div className={styles.products}>
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>Delivery by Cargo</h3>
            </div>
            <div className={styles.cardBody}>
              <p>
              Free shipping to all regions of Turkey
              </p>
            </div>
          </div>
          <div className={styles.imageContainer}>
          <BsTruck />
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>Right of Return</h3>
            </div>
            <div className={styles.cardBody}>
              <p>
              Unconditional return opportunity
              </p>
            </div>
          </div>
          <div className={styles.imageContainer}>
          <CgArrowsExchangeAlt />
          </div>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>Support Line</h3>
            </div>
            <div className={styles.cardBody}>
              <p>
              7/24 communication opportunity
              </p>
            </div>
          </div>
          <div className={styles.imageContainer}>
          <BsHeadset />
          </div>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>Payment Variety</h3>
            </div>
            <div className={styles.cardBody}>
              <p>
              Buy card, cash, and soon by phone
              </p>
            </div>
          </div>
          <div className={styles.imageContainer}>
          <BsCash />
          </div>
        </div>
    </div>
  );
}

export default Support;
