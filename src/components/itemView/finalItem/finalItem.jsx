import React from "react";
import styles from "./finalItem.module.css";

const FinalItem = ({ item }) => {
  return (
    <section className={styles.finalItem}>
      <p className={styles.finalItem_name}>{item.name}</p>
      <div className={styles.final_bottom}>
        <div className={styles.amount_change}>
          <button className={styles.minus}>-</button>
          <input
            type="text"
            className={styles.show_amount}
            value={item.amount}
          />
          <button className={styles.plus}>+</button>
        </div>
        <p className={styles.finalPrice}>{`${item.price}원`}</p>
      </div>
    </section>
  );
};

export default FinalItem;
