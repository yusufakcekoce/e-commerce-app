import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";
import {Link} from "react-router-dom"

import styles from "./style.module.scss";

function Basket() {
  const userDetails = useContext(UserContext);

  return (
    <div>
      <div className={styles.bsktContainer}>
        <div className={styles.bsktContext}>
          <div className={styles.bsktCol}>
            <h1 className="title">BASKET</h1>
            <br />
            <div className={styles.basket}>
              {userDetails.basket &&
                userDetails.basket.map((item, index) => {
                  return (
                    <div className={styles.basketItem} key={index}>
                      <img src={item.image} alt={item.title} className={styles.itemImg} width="120px"/>
                      <div className={styles.basketItemInfo}>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
                <div className={styles.completeBtn}>
                   <Link to={"/finish"}>Complete Order</Link>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
