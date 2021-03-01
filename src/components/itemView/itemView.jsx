import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import FinalItem from "./finalItem/finalItem";
import styles from "./itemView.module.css";

const ItemView = ({ items }) => {
  const { id } = useParams();
  const history = useHistory();
  const [itemPrice, setItemPrice] = useState(parseInt(items[id].price));
  const [option1Price, setOption1Price] = useState(0);
  const [option2Price, setOption2Price] = useState(0);
  const [option1Name, setOption1Name] = useState(null);
  const [option2Name, setOption2Name] = useState(null);
  const [finalName, setFinalName] = useState(null);
  const [finalPrice, setFinalPrice] = useState(0);
  const [selectedList, setSelectedList] = useState(null);
  const [bookmark, setBookmark] = useState(false);

  const originalPrice = items[id].price;
  const option1 = items[id].option1;
  const option2 = items[id].option2;
  const option1_idlist = Object.keys(option1);
  const option2_idlist = Object.keys(option2);

  const ItemPriceChange1 = (e) => {
    setOption1Price(parseInt(option1[e.target.value].add));
    setOption1Name(option1[e.target.value].name);
  };

  const ItemPriceChange2 = (e) => {
    setOption2Price(parseInt(option2[e.target.value].add));
    setOption2Name(option2[e.target.value].name);
  };

  useEffect(() => {
    setItemPrice(originalPrice + option1Price + option2Price);
  }, [option1Price, option2Price]);

  const addItem = () => {
    if (
      option1Name === null ||
      option1Name === "선택해주세요" ||
      option2Name === null ||
      option2Name === "선택해주세요"
    ) {
      window.alert("모든 옵션을 선택하셔야 합니다.");
    } else {
      setFinalName(`${items[id].name} / ${option1Name} / ${option2Name}`);
    }
  };

  useEffect(() => {
    setSelectedList((selectedList) => {
      if (finalName !== null) {
        setFinalPrice(finalPrice + itemPrice);
        const id_newItem = Date.now();
        const updated = { ...selectedList };
        updated[id_newItem] = {
          id: id_newItem,
          name: finalName,
          price: itemPrice,
          imageURL: items[id].imageURL,
          amount: 1,
        };
        return updated;
      }
    });
  }, [finalName]);

  const priceChangedByButton = () => {
    let newPrice = 0;
    selectedKeyList.forEach((key) => (newPrice += selectedList[key].price));
    setFinalPrice(newPrice);
    console.log(selectedList);
  };

  let selectedKeyList = [];

  if (selectedList) {
    selectedKeyList = Object.keys(selectedList);
  }

  const bookmarking = () => {
    setBookmark(!bookmark);
  };

  const onPurchase = () => {
    if (!selectedList) {
      window.alert("상품 선택 후 구매 가능합니다.");
    } else {
      history.push("/purchase", { list: selectedList, finalPrice: finalPrice });
      console.log(selectedList);
    }
  };

  return (
    <section className={styles.itemview}>
      <div className={styles.image_border}>
        <img src={items[id].imageURL} alt="" className={styles.image} />
        <p className={styles.description}>{items[id].description}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.nameAndPrice}>
            <h1 className={styles.name}>{items[id].name}</h1>
            <h2 className={styles.price}>{`${items[id].price}원`}</h2>
          </div>
          <button
            className={`${styles.bookmark_button} ${
              bookmark ? styles.on : styles.off
            }`}
            onClick={bookmarking}
          >
            {bookmark ? <i className="fas fa-star"></i> : "찜하기"}
          </button>
        </div>

        <div className={styles.options}>
          <h3>옵션1</h3>
          <select className={styles.option} onChange={ItemPriceChange1}>
            {option1_idlist.map((key) => (
              <option key={key} value={key}>
                {option1[key].name}
              </option>
            ))}
          </select>
          <h3>옵션2</h3>
          <select
            name="option2"
            id=""
            className={styles.option}
            onChange={ItemPriceChange2}
          >
            {option2_idlist.map((key) => (
              <option key={key} value={key}>
                {option2[key].name}
              </option>
            ))}
          </select>
          <div className={styles.addItem_border}>
            <p className={styles.middlePrice}>{`선택 가격: ${itemPrice}`}</p>
            <button className={styles.addItem} onClick={addItem}>
              담기
            </button>
          </div>

          <div
            className={`${styles.final} ${
              finalPrice !== 0 ? styles.on : styles.off
            }`}
          >
            {selectedList &&
              selectedKeyList.map((key) => (
                <FinalItem
                  key={key}
                  item={selectedList[key]}
                  priceChangedByButton={priceChangedByButton}
                />
              ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.itemPrice_border}>
              <h2>합계</h2>
              <h1 className={styles.itemPrice}>{`${finalPrice}원`}</h1>
            </div>
            <button className={styles.purchase_button} onClick={onPurchase}>
              구매하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemView;
