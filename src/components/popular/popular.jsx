import React from "react";
import ItemPreview from "../itemPreview/itemPreview";
import styles from "./popular.module.css";

const Popular = ({ items }) => {
  return (
    <section className={styles.popular}>
      <h1 className={styles.title}>BEST</h1>
      <p className={styles.description}>Con's의 인기상품들입니다.</p>
      <div className={styles.list}>
        {Object.keys(items).map((key) => (
          <ItemPreview key={key} item={items[key]} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
