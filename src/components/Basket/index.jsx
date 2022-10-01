import React, { useContext, useState } from "react";
import { UserContext } from "../../UserProvider";
import { Link } from "react-router-dom";

import EmptyBasket from "../../img/vectors/basket.png";
import styles from "./style.module.scss";

function Basket() {
  const userDetails = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);

  console.log(userDetails);
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

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
        <div className={styles.basketContainer}>
          <div className={styles.basketHeader}>
            <ul>
              <li>Product</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </div>
          <div className={styles.basketItems}>
            {userDetails.basket &&
              userDetails.basket.map((item, index) => {
                const subtotal = item.price * quantity;
                return (
                  <div className={styles.basketItem} key={index}>
                    <div className={styles.basketItemImg}>
                      <img src={item.image} alt="" width="100px" />
                      <p className={styles.itemP}>{item.title}</p>
                      <p className={styles.itemP}>${item.price}</p>
                    </div>

                    <div className={styles.basketItemQuantity}>
                      <select
                        name="quantity"
                        id="quantity"
                        onChange={handleQuantity}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                    <div className={styles.basketItemSubtotal}>
                      <p>
                        <b>${subtotal}</b>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={styles.basketTotal}>
            Total ={" "}
            <b>
              {" "}
              $
              {userDetails.basket.reduce(
                (acc, item) => acc + item.price * quantity,
                0
              )}{" "}
            </b>
          </div>
          <div className={styles.completeBtn}>
            <Link to={"/finish"}>Complete Order</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
