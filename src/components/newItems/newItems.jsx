import React from "react";
import { useHistory } from "react-router-dom";
import ItemPreview from "../itemPreview/itemPreview";
import styles from "./newItems.module.css";

const NewItems = ({ items, itemList }) => {
  const history = useHistory();
  console.log(items);
  console.log(itemList);

  const itemView = (item) => {
    history.push(`/itemview/${item.id}`);
  };

  return (
    <section className={styles.newItems}>
      <div className={styles.info}>
        <h1 className={styles.title}>NEW</h1>
        <div className={styles.description_box}>
          <div className={styles.divider}></div>
          <p className={styles.description}>꼭! 체크해봐야 할 신상들이에요</p>
          <div className={styles.divider}></div>
        </div>
      </div>
      <div className={styles.list}>
        {itemList.map((key) => (
          <ItemPreview key={key} item={items[key]} itemView={itemView} />
        ))}
      </div>
    </section>
  );
};

export default NewItems;
