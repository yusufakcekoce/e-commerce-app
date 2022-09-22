import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import Categories from "./Categories";

// icons
import { FaShoppingCart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext, UserDispatchContext } from "../../UserProvider";
import DropDown from "../__delete__";

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
    <>
      {/* <div className={styles.context}>
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
            onClick={() => filterResult("Sport")}
          >
            Football
          </button>
        </div>
      </div> */}
      <div className={styles.search}>
      <div className={styles.wrapper}>
        <div className={styles.searchBox}>
            <div className={styles.dropdown}>
                <div className={styles.defaultOption}>All</div>
                <ul>
                    <li>All</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sport</li>
                </ul>
            </div>
            <div className={styles.searchField}>
                <input type="text" className={styles.input} placeholder='Search...' 
                onChange={(e) => setQuery(e.target.value)}/>
            </div>
        </div>
    </div>
        
      </div>
      <div className={styles.proContainer}>
        <div className={styles.products}>
          {data
            .filter((values) => values.title.toLowerCase().includes(query))
            .map((values) => {
              const { id, title, price, image, brand } = values;
              return (
                <div className={styles.card} key={id}>
                  <img src={image} alt="" />
                  <div className={styles.des}>
                    <span className={styles.brand}>{brand}</span>
                    <h5>{title}</h5>
                    <div className={styles.star}>
                      <i>
                        <AiFillStar />
                      </i>
                      <i>
                        <AiFillStar />
                      </i>
                      <i>
                        <AiFillStar />
                      </i>
                      <i>
                        <AiFillStar />
                      </i>
                      <i>
                        <AiFillStar />
                      </i>
                    </div>
                    <h4>${price}</h4>
                  </div>
                  <div className={styles.add}>
                    <button
                      className={styles.btnAdd}
                      onClick={() => handleAddBasketClick(title, image, price)}
                    >
                      <FaShoppingCart />
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Shop;
