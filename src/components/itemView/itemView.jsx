import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";
import styles from "./itemView.module.css";

const ItemView = (props) => {
  const location = useLocation();
  const item = location.state.item;

  return (
    <section className={styles.itemview}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <img src={item.imageURL} alt="" className={styles.image} />
        <div className={styles.info}>
          <h1 className={styles.name}>{item.name}</h1>
          <h2 className={styles.price}>{item.price}</h2>
        </div>
      </div>
    </section>
  );
};

export default ItemView;
