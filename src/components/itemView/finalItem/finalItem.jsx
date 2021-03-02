import React, { useEffect, useState } from "react";
import styles from "./finalItem.module.css";

const FinalItem = ({ item, priceChangedByButton }) => {
  const [updatedAmount, setUpdatedAmount] = useState(item.amount);
  const [updatedPrice, setUpdatedPrice] = useState(item.price);
  const [originalPrice, setOriginalPrice] = useState(item.price);
  const onMinus = () => {
    if (updatedAmount >= 2) {
      setUpdatedAmount(updatedAmount - 1);
      console.log(item.amount);
    }
  };

  const onPlus = () => {
    setUpdatedAmount(updatedAmount + 1);
    console.log(item.amount);
  };

  useEffect(() => {
    item.amount = updatedAmount;
    item.price = originalPrice * updatedAmount;
    setUpdatedPrice(item.price);
    priceChangedByButton();
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
          />
          <button className={styles.plus} onClick={onPlus}>
            +
          </button>
        </div>
        <p className={styles.finalPrice}>{`${updatedPrice}원`}</p>
      </div>
    </section>
  );
};

export default FinalItem;
