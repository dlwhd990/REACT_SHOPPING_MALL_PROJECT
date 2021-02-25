import React from "react";
import { useHistory } from "react-router-dom";
import ItemPreview from "../itemPreview/itemPreview";
import styles from "./popular.module.css";

const Popular = ({ items, itemList }) => {
  const history = useHistory();
  const itemView = (item) => {
    history.push(`/itemview/${item.id}`);
  };

  return (
    <section className={styles.popular}>
      <div className={styles.info}>
        <h1 className={styles.title}>👍BEST</h1>
        <p className={styles.description}>Con's의 인기상품들이에요.</p>
      </div>
      <div className={styles.list}>
        {itemList.map((key) => (
          <ItemPreview key={key} item={items[key]} itemView={itemView} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
