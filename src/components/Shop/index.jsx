import React, { useState } from "react";
import styles from "./style.module.scss";
import Categories from "./Categories";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Shop() {
  const [data, setData] = useState(Categories);
  const [query, setQuery] = useState("");

  const notify = () => {
    toast.warn('Please login!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const filterResult = (catItem) => {
    const result = Categories.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  };

  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <div className={styles.col}>
          <h1 className="title">SHOP</h1>
          <br />

          <input
            type="text"
            placeholder="Write the name of the product you want..."
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
                        <img src={image} alt={title} />
                      </div>
                      <div className={styles.cardBody}>
                        <h2 className={styles.titleProduct}>{title}</h2>
                        <span className={styles.price}>${price}</span>
                        <button className={styles.basket} onClick={notify}>
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
