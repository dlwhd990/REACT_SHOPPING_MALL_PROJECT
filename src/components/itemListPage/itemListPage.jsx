import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ItemPreview from "../itemPreview/itemPreview";
import QuickMenu from "../quickMenu/quickMenu";
import styles from "./itemListPage.module.css";

const ItemListPage = ({ items }) => {
  const [filtered, setFiltered] = useState(Object.keys(items));
  const history = useHistory();

  const filterView = (event) => {
    if (event.target.textContent === "전체") {
      setFiltered(Object.keys(items));
    } else {
      const updated = Object.keys(items).filter(
        (key) => items[key].type === event.target.textContent
      );
      setFiltered(updated);
    }
  };

  const itemView = (item) => {
    history.push(`/itemview/${item.id}`);
  };

  return (
    <section className={styles.itemListPage}>
      <div className={styles.quickMenu}>
        <QuickMenu />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>상품 리스트</h1>
        <div className={styles.select_list}>
          <ul className={styles.ul}>
            <li>
              <button className={styles.select} onClick={filterView}>
                전체
              </button>
            </li>
            <li>
              <button className={styles.select} onClick={filterView}>
                인형
              </button>
            </li>
            <li>
              <button className={styles.select} onClick={filterView}>
                생활용품
              </button>
            </li>
            <li>
              <button className={styles.select} onClick={filterView}>
                케이스
              </button>
            </li>

            <li>
              <button className={styles.select} onClick={filterView}>
                의류
              </button>
            </li>
            <li>
              <button className={styles.select} onClick={filterView}>
                키링
              </button>
            </li>
            <li>
              <button className={styles.select} onClick={filterView}>
                파우치
              </button>
            </li>
            <li>
              <button
                className={`${styles.select} ${styles.last}`}
                onClick={filterView}
              >
                스티커
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.itemlist}>
          {filtered.map((key) => (
            <ItemPreview key={key} item={items[key]} itemView={itemView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemListPage;
