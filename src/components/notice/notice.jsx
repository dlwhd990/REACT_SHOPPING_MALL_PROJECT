import React from "react";
import Header from "../header/header";
import styles from "./notice.module.css";

const Notice = (props) => {
  return (
    <div className={styles.notice}>
      <Header />
    </div>
  );
};

export default Notice;
