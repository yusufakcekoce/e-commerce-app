import React from "react";
import styles from "./style.module.scss";
import { MdOutlineShoppingBasket } from "react-icons/md";

function Header() {
  return (
    <section class={styles.topNav}>
      <div className={styles.logo}>KARDEŞLER BALIKÇILIK</div>
      <input id={styles.menuToggle} type="checkbox" />
      <label class={styles.menuButtonContainer} for="menu-toggle">
        <div class={styles.menuButton}></div>
      </label>
      <ul class={styles.menu}>
        <li>Anasayfa</li>
        <li>Mağaza</li>
        <li>Hakkımızda</li>
        <li><MdOutlineShoppingBasket /></li>
      </ul>
    </section>
  );
}

export default Header;
