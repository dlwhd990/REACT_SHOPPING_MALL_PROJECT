import React from "react";
import Header from "../header/header";
import styles from "./notice.module.css";

const Notice = (props) => {
  return (
    <div className={styles.notice}>
      <div className={styles.header}>
        <Header />
      </div>
      <h1 className={styles.notyet}>준비중</h1>
    </div>
  );
};

export default Notice;
