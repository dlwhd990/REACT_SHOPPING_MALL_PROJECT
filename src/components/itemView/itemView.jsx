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
            <h2 className={styles.price}>{`${items[id].price}원`}</h2>
          </div>
          <div className={styles.options}>
            <h3>옵션1</h3>
            <select name="option1" id="" className={styles.option}>
              {items[id].option.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <h3>옵션2</h3>
            <select name="option2" id="" className={styles.option}>
              <option value="굼스!!">굼스!!</option>
              <option value="굼스!!">짱스!!</option>
              <option value="굼스!!">밥스!!</option>
              <option value="굼스!!">옹스!!</option>
            </select>
            <h2 className={styles.cost}>합계</h2>
            <h1>{`${items[id].price}원`}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemView;
