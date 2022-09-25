import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import Categories from "./Categories";
import { BsFillCaretDownFill } from "react-icons/bs";

// icons
import { FaShoppingCart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext, UserDispatchContext } from "../../UserProvider";

function Shop() {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState("Choose One");

  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const [data, setData] = useState(Categories);
  const [query, setQuery] = useState("");

  const handleAddBasketClick = (title, image, price) => {
    if (!userDetails.username) {
      toast.warn("Please login!", {
        position: "top-center",
        autoClose: 2000,
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
        autoClose: 2000,
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
      <div className={styles.search}>
        <div className={styles.dropdown}>
          <div className={styles.dropdownBtn} onClick={(e) => setOpen(!isOpen)}>
            {selected}{" "}
            <i>
              <BsFillCaretDownFill />
            </i>
          </div>
          {isOpen && (
            <div
              className={styles.dropdownContent}
              onClick={(e) => {
                setOpen(false);
                setSelected(e.target.innerText);
                filterResult(e.target.innerText);

                if (e.target.innerText === "All") {
                  setData(Categories);
                }
              }}
            >
              <div
                className={styles.dropdownItem}
                onClick={() => setData(Categories)}
              >
                All
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => filterResult("Men")}
              >
                Men
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => filterResult("Women")}
              >
                Women
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => filterResult("Kids")}
              >
                Kids
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => filterResult("Sport")}
              >
                Sport
              </div>
            </div>
          )}
        </div>
        <div className={styles.searchField}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
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
