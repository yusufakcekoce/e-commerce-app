import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import Categories from "./Categories";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext, UserDispatchContext } from "../../UserProvider";

function Shop() {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const [data, setData] = useState(Categories);
  const [query, setQuery] = useState("");

  const handleAddBasketClick = (title, image, price) => {
    if (!userDetails.username) {
      toast.warn("Please login!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setUserDetails({
        ...userDetails,
        basket: userDetails.basket
          ? [...userDetails.basket, { title, image, price }]
          : [{ title, image, price }],
      });
      console.log(userDetails);
      toast.success("Added to basket", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };

  return (
    <div className={styles.shopContainer}>
      <div className={styles.context}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Enter product name"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.context}>
        <div className={styles.col}>
          <button className={styles.btn} onClick={() => setData(Categories)}>
            All
          </button>
          <button className={styles.btn} onClick={() => filterResult("Men")}>
            Men
          </button>
          <button className={styles.btn} onClick={() => filterResult("Women")}>
            Women
          </button>
          <button className={styles.btn} onClick={() => filterResult("Kids")}>
            Kids
          </button>
          <button
            className={styles.btn}
            onClick={() => filterResult("Football")}
          >
            Football
          </button>
        </div>

        <div className={styles.col}>
          <div className={styles.cards}>
            {data
              .filter((values) => values.title.toLowerCase().includes(query))
              .map((values) => {
                const { id, title, price, image } = values;
                return (
                  <>
                    <div className={styles.card} key={id}>
                      <div className={styles.cardHeader}>
                        <img src={image} alt={title} height={"300px"} />
                      </div>
                      <div className={styles.cardBody}>
                        <h2 className={styles.titleProduct}>{title}</h2>
                        <span className={styles.price}>${price}</span>
                        <button
                          className={styles.basket}
                          onClick={() =>
                            handleAddBasketClick(title, image, price)
                          }
                        >
                          ADD TO BASKET
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
