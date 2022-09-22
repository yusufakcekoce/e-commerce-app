import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";
import { Link } from "react-router-dom";

import EmptyBasket from "../../img/vectors/basket.png";

import styles from "./style.module.scss";

function Basket() {
  const userDetails = useContext(UserContext);

  return (
    <div>
      {userDetails.basket.length === 0 ? (
        <div className={styles.emptyBasket}>
          <img src={EmptyBasket} alt="" width="300px" />
          <h1>Your basket is empty</h1>
          <Link to={"/shop"}>
            <button>Shop Now</button>
          </Link>
          <p>Please login and add items to your cart</p>
        </div>
      ) : (
        <div className={styles.bsktContainer}>
          <div className={styles.bsktContext}>
            <div className={styles.bsktTotal}>
              <ul className={styles.bsktList}>
                <li>Product</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
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
              <div className={styles.completeBtn}>
                <Link to={"/finish"}>Complete Order</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
