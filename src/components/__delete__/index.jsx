import React, {useState} from 'react'
import styles from "./style.module.scss"

function DropDown() {
    const [query, setQuery] = useState("");
  return (
    <div className={styles.wrapper}>
        <div className={styles.searchBox}>
            <div className={styles.dropdown}>
                <div className={styles.defaultOption}>All</div>
                <ul>
                    <li>All</li>
                    <li>Recent</li>
                    <li>Popular</li>
                </ul>
            </div>
            <div className={styles.searchField}>
                <input type="text" className={styles.input} placeholder='Search...' 
                onChange={(e) => setQuery(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default DropDown