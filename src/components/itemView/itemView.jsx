import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./itemView.module.css";

const ItemView = ({ items }) => {
  const { id } = useParams();
  const [totalPrice, setTotalPrice] = useState(parseInt(items[id].price));
  const [option1Price, setOption1Price] = useState(0);
  const [option2Price, setOption2Price] = useState(0);
  const [option1Name, setOption1Name] = useState(null);
  const [option2Name, setOption2Name] = useState(null);
  const [finalItem, setFinalItem] = useState(null);

  const originalPrice = items[id].price;

  const option1 = items[id].option1;
  const option2 = items[id].option2;
  const option1_idlist = Object.keys(option1);
  const option2_idlist = Object.keys(option2);

  const TotalPriceChange1 = (e) => {
    setOption1Price(parseInt(e.target.value));
    console.log(e.target.itemType);
  };

  const TotalPriceChange2 = (e) => {
    setOption2Price(parseInt(e.target.value));
  };

  useEffect(() => {
    setTotalPrice(originalPrice + option1Price + option2Price);
  }, [option1Price, option2Price]);

  const addItem = () => {
    setFinalItem();
  };

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
          <select className={styles.option} onChange={TotalPriceChange1}>
            {option1_idlist.map((key) => (
              <option key={key} value={option1[key].add}>
                {option1[key].name}
              </option>
            ))}
          </select>
          <h3>옵션2</h3>
          <select
            name="option2"
            id=""
            className={styles.option}
            onChange={TotalPriceChange2}
          >
            {option2_idlist.map((key) => (
              <option key={key} value={option2[key].add}>
                {option2[key].name}
              </option>
            ))}
          </select>
          <div className={styles.bottom}>
            <div className={styles.totalPrice_border}>
              <h2 className={styles.totalPrice}>합계</h2>
              <h1>{`${totalPrice}원`}</h1>
            </div>

            <button className={styles.addItem}>담기</button>
          </div>
          <div className={styles.final}></div>
        </div>
      </div>
    </section>
  );
};

export default ItemView;
