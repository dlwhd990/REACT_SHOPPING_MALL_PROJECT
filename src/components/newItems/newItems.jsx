import React from "react";
import ItemPreview from "../itemPreview/itemPreview";
import styles from "./newItems.module.css";

const NewItems = ({ items }) => {
  return (
    <section className={styles.newItems}>
      <div className={styles.info}>
        <h1 className={styles.title}>🎉New</h1>
        <p className={styles.description}>꼭! 체크해봐야할 신상들이에요</p>
      </div>
      <div className={styles.list}>
        {Object.keys(items).map((key) => (
          <ItemPreview key={key} item={items[key]} />
        ))}
      </div>
    </section>
  );
};

export default NewItems;
