import React from "react";
import styles from "./itemPreview.module.css";

const ItemPreview = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.item}>
      <div className={styles.image_border}>
        <img className={styles.image} src={item.imageURL} alt="item_image" />
      </div>
      <h2 className={styles.name}>{item.name}</h2>
      <h3 className={styles.price}>{item.price}</h3>
    </div>
  );
};

export default ItemPreview;
