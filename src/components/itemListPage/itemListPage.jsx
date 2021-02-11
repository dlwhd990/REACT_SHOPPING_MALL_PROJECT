import React from "react";
import Header from "../header/header";
import styles from "./itemListPage.module.css";

const ItemListPage = (props) => {
  return (
    <div className={styles.itemListPage}>
      <Header />
    </div>
  );
};

export default ItemListPage;
