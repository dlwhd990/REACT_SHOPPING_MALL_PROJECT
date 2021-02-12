import React from "react";
import { useHistory } from "react-router-dom";
import ItemPreview from "../itemPreview/itemPreview";
import styles from "./newItems.module.css";

const NewItems = ({ items }) => {
  const history = useHistory();

  const itemView = (item) => {
    history.push(`/itemview/${item.id}`);
  };

  return (
    <section className={styles.newItems}>
      <div className={styles.info}>
        <h1 className={styles.title}>🎉New</h1>
        <p className={styles.description}>꼭! 체크해봐야할 신상들이에요</p>
      </div>
      <div className={styles.list}>
        {Object.keys(items).map((key) => (
          <ItemPreview key={key} item={items[key]} itemView={itemView} />
        ))}
      </div>
    </section>
  );
};

export default NewItems;
