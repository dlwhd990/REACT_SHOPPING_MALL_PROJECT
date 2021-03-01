import React, { useEffect, useState } from "react";
import styles from "./finalItem.module.css";

const FinalItem = ({ item }) => {
  const [updatedAmount, setUpdatedAmount] = useState(item.amount);
  const onMinus = () => {
    setUpdatedAmount(updatedAmount - 1);
    console.log(item.amount);
  };

  const onPlus = () => {
    setUpdatedAmount(updatedAmount + 1);
    console.log(item.amount);
  };

  const amountChange = (e) => {
    setUpdatedAmount(e.tartget.value);
  };

  useEffect(() => {
    item.amount = updatedAmount;
    console.log(`item amount = ${item.amount}`);
  }, [updatedAmount]);
  return (
    <section className={styles.finalItem}>
      <p className={styles.finalItem_name}>{item.name}</p>
      <div className={styles.final_bottom}>
        <div className={styles.amount_change}>
          <button className={styles.minus} onClick={onMinus}>
            -
          </button>
          <input
            type="text"
            className={styles.show_amount}
            value={updatedAmount}
            onChange={amountChange}
          />
          <button className={styles.plus} onClick={onPlus}>
            +
          </button>
        </div>
        <p className={styles.finalPrice}>{`${item.price}원`}</p>
      </div>
    </section>
  );
};

export default FinalItem;
