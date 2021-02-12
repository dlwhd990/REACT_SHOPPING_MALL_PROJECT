import React from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import styles from "./itemView.module.css";

const ItemView = ({ items }) => {
  const { id } = useParams();
  return (
    <section className={styles.itemview}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.image_border}>
          <img src={items[id].imageURL} alt="" className={styles.image} />
        </div>
        <div className={styles.info}>
          <div className={styles.nameAndPrice}>
            <h1 className={styles.name}>{items[id].name}</h1>
            <h2 className={styles.price}>{items[id].price}</h2>
          </div>
          <div className={styles.options}>
            <select name="option1" id="" className="">
              <option value="콘!!">콘!!</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemView;
