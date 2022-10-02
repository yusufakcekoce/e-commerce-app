import React from "react";
import styles from "./style.module.scss";

import Photo1 from "../../img/promotion/photo1.jpg";
import Photo2 from "../../img/promotion/photo2.jpg";

function Promotion() {
  return (
    <>
    <div className={styles.promotion}>
      <div className={styles.promotionContent}>
        <h2 className={styles.promotionTitle}>Promotion</h2>
        <p className={styles.promotionDesc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi ratione voluptatibus veritatis quas excepturi quasi! Nulla, necessitatibus, quia sequi ad alias, corporis eum voluptatem perspiciatis aliquid cupiditate modi officiis.
          Laborum non obcaecati pariatur repellendus, fuga distinctio ipsum consectetur eos, soluta fugiat cumque numquam error nemo doloremque ipsam nam vero repudiandae vel magnam voluptatibus perspiciatis incidunt? Voluptas, sequi id. Repudiandae!
          Libero sunt ullam laborum quam aspernatur ipsa nam soluta perferendis, eius iure? Numquam, alias temporibus. Voluptatum sequi est nulla dolorum ipsa nihil rerum harum magnam et deserunt, sit facilis numquam.
          Nobis exercitationem blanditiis, iusto eos, accusamus molestiae voluptate iure dolore libero quidem similique ducimus necessitatibus, eaque perferendis omnis recusandae? Beatae animi repellat fuga, quod dolorem provident sint earum iusto! Tempora!
          Enim cum, animi quo nemo quod recusandae libero! Adipisci, provident eaque voluptatum voluptatibus necessitatibus eos animi est rem ex quia totam. Incidunt quia dolores numquam molestiae perferendis inventore, tempora reprehenderit!
        </p>
      </div>
      <div className={styles.promotionImg}>
        <img src={Photo1} alt="" width="700px" />
      </div>
    </div>

    <div className={styles.promotion2}>
      <div className={styles.promotionContent2}>
        <h2 className={styles.promotionTitle2}>Promotion</h2>
        <p className={styles.promotionDesc2}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi ratione voluptatibus veritatis quas excepturi quasi! Nulla, necessitatibus, quia sequi ad alias, corporis eum voluptatem perspiciatis aliquid cupiditate modi officiis.
          Laborum non obcaecati pariatur repellendus, fuga distinctio ipsum consectetur eos, soluta fugiat cumque numquam error nemo doloremque ipsam nam vero repudiandae vel magnam voluptatibus perspiciatis incidunt? Voluptas, sequi id. Repudiandae!
          Libero sunt ullam laborum quam aspernatur ipsa nam soluta perferendis, eius iure? Numquam, alias temporibus. Voluptatum sequi est nulla dolorum ipsa nihil rerum harum magnam et deserunt, sit facilis numquam.
          Nobis exercitationem blanditiis, iusto eos, accusamus molestiae voluptate iure dolore libero quidem similique ducimus necessitatibus, eaque perferendis omnis recusandae? Beatae animi repellat fuga, quod dolorem provident sint earum iusto! Tempora!
          Enim cum, animi quo nemo quod recusandae libero! Adipisci, provident eaque voluptatum voluptatibus necessitatibus eos animi est rem ex quia totam. Incidunt quia dolores numquam molestiae perferendis inventore, tempora reprehenderit!
        </p>
      </div>
      <div className={styles.promotionImg2}>
        <img src={Photo2} alt="" width="700px" />
      </div>
    </div>

    </>
  );
}

export default Promotion;
