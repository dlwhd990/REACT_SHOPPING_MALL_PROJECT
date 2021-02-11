import React from "react";
import ItemPreview from "../itemPreview/itemPreview";
import styles from "./popular.module.css";

const Popular = ({ items }) => {
  return (
    <section className={styles.popular}>
      <div className={styles.info}>
        <h1 className={styles.title}>👍BEST</h1>
        <p className={styles.description}>Con's의 인기상품들이에요.</p>
      </div>
      <div className={styles.list}>
        {Object.keys(items).map((key) => (
          <ItemPreview key={key} item={items[key]} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
