import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ItemPreview from "../itemPreview/itemPreview";
import QuickMenu from "../quickMenu/quickMenu";
import styles from "./itemListPage.module.css";

const ItemListPage = ({ items, userData }) => {
  const [filtered, setFiltered] = useState(Object.keys(items));
  const [all, setAll] = useState(true);
  const [doll, setDoll] = useState(false);
  const [life, setLife] = useState(false);
  const [cases, setCases] = useState(false);
  const [cloth, setCloth] = useState(false);
  const [keyring, setKeyring] = useState(false);
  const [pouch, setPouch] = useState(false);
  const [sticker, setSticker] = useState(false);

  const history = useHistory();

  const filterView = (event) => {
    if (all === true) {
      setAll(false);
    } else if (doll === true) {
      setDoll(false);
    } else if (life === true) {
      setLife(false);
    } else if (cases === true) {
      setCases(false);
    } else if (cloth === true) {
      setCloth(false);
    } else if (keyring === true) {
      setKeyring(false);
    } else if (pouch === true) {
      setPouch(false);
    } else if (sticker === true) {
      setSticker(false);
    }

    if (event.target.textContent === "인형") {
      setDoll(true);
    } else if (event.target.textContent === "생활용품") {
      setLife(true);
    } else if (event.target.textContent === "케이스") {
      setCases(true);
    } else if (event.target.textContent === "의류") {
      setCloth(true);
    } else if (event.target.textContent === "키링") {
      setKeyring(true);
    } else if (event.target.textContent === "파우치") {
      setPouch(true);
    } else if (event.target.textContent === "스티커") {
      setSticker(true);
    }

    if (event.target.textContent === "전체") {
      setAll(true);
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
        <QuickMenu userData={userData} />
      </div>
      <div className={styles.container}>
        <div className={styles.select_list}>
          <ul className={styles.ul}>
            <li>
              <h1
                className={`${styles.select} ${all ? styles.on : styles.off}`}
                onClick={filterView}
              >
                전체
              </h1>
            </li>
            <li>
              <h1
                className={`${styles.select} ${doll ? styles.on : styles.off}`}
                onClick={filterView}
              >
                인형
              </h1>
            </li>
            <li>
              <h1
                className={`${styles.select} ${life ? styles.on : styles.off}`}
                onClick={filterView}
              >
                생활용품
              </h1>
            </li>
            <li>
              <h1
                className={`${styles.select} ${cases ? styles.on : styles.off}`}
                onClick={filterView}
              >
                케이스
              </h1>
            </li>

            <li>
              <h1
                className={`${styles.select} ${cloth ? styles.on : styles.off}`}
                onClick={filterView}
              >
                의류
              </h1>
            </li>
            <li>
              <h1
                className={`${styles.select} ${
                  keyring ? styles.on : styles.off
                }`}
                onClick={filterView}
              >
                키링
              </h1>
            </li>
            <li>
              <h1
                className={`${styles.select} ${pouch ? styles.on : styles.off}`}
                onClick={filterView}
              >
                파우치
              </h1>
            </li>
            <li>
              <h1
                className={`${styles.select} ${
                  sticker ? styles.on : styles.off
                }`}
                onClick={filterView}
              >
                스티커
              </h1>
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
