import React from "react";
import NewItems from "../newItems/newItems";
import Popular from "../popular/popular";
import SimpleSlider from "../slider/slider";
import styles from "./mainPage.module.css";

const MainPage = ({ items }) => {
  const itemList = Object.keys(items);
  return (
    <section className={styles.mainPage}>
      <SimpleSlider />
      <div className={styles.popular}>
        <Popular itemList={itemList} items={items} />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.newItems}>
        <NewItems itemList={itemList} items={items} />
      </div>
    </section>
  );
};

export default MainPage;
