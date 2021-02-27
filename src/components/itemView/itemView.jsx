import React from "react";
import { useParams } from "react-router-dom";
import styles from "./itemView.module.css";

const ItemView = ({ items }) => {
  const { id } = useParams();

  const option1 = items[id].option1;
  const option2 = items[id].option2;
  console.log(items[id].option1);
  console.log(items[id].option2);
  const option1_idlist = Object.keys(option1);
  const option2_idlist = Object.keys(option2);
  console.log(option1);
  console.log(option2);

  return (
    <section className={styles.itemview}>
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
            {option1_idlist.map((key) => (
              <option key={key}>{option1[key].name}</option>
            ))}
          </select>
          <h3>옵션2</h3>
          <select name="option2" id="" className={styles.option}>
            {option2_idlist.map((key) => (
              <option key={key}>{option2[key].name}</option>
            ))}
          </select>
          <h2 className={styles.cost}>합계</h2>
          <h1>{`${items[id].price}원`}</h1>
        </div>
      </div>
    </section>
  );
};

export default ItemView;
