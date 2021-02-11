import React, { useState } from "react";
import NewItems from "../newItems/newItems";
import Popular from "../popular/popular";
import QuickMenu from "../quickMenu/quickMenu";
import SimpleSlider from "../slider/slider";
import styles from "./mainPage.module.css";

const MainPage = ({ items }) => {
  return (
    <section className={styles.mainPage}>
      <div className={styles.slider}>
        <SimpleSlider />
      </div>
      <div className={styles.popular}>
        <Popular items={items} />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.newItems}>
        <NewItems items={items} />
      </div>
    </section>
  );
};

export default MainPage;
