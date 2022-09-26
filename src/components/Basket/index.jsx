import React, { useContext, useState } from "react";
import { UserContext } from "../../UserProvider";
import { Link } from "react-router-dom";

import EmptyBasket from "../../img/vectors/basket.png";
import styles from "./style.module.scss";

function Basket() {
  const userDetails = useContext(UserContext);

  return (
    <div>
      {!userDetails.basket?.[0] ? (
        <div className={styles.emptyBasket}>
          <img src={EmptyBasket} alt="" width="300px" />
          <div className={styles.emptyBasketText}>
            <h1>Your basket is empty</h1>
            <p>Please login and add items to your cart</p>
            <Link to={"/shop"}>
              <p className={styles.wayP}>Go Shop</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.bsktContainer}>
          <div className={styles.bsktContext}>
            <div className={styles.bsktCol}>
              <div className={styles.basket}>
                {userDetails.basket &&
                  userDetails.basket.map((item, index) => {
                    return (
                      <div className={styles.basketItem} key={index}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={styles.itemImg}
                          width="120px"
                        />
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
      )}
    </div>
  );
}

export default Basket;
