import React from "react";
import styles from "./itemPreview.module.css";

const ItemPreview = ({ item, itemView }) => {
  const onClick = () => {
    window.scrollTo({ top: 0 });
    itemView(item);
  };

  return (
    <div className={styles.item} onClick={onClick}>
      <div className={styles.image_border}>
        <img className={styles.image} src={item.imageURL} alt="item_image" />
      </div>
      <h2 className={styles.name}>{item.name}</h2>
      <h3 className={styles.price}>{`${item.price}원`}</h3>
    </div>
  );
};

export default ItemPreview;
