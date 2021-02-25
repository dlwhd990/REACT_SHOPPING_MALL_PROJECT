import React from "react";
import styles from "./notice.module.css";

const Notice = (props) => {
  return (
    <div className={styles.notice}>
      <h1 className={styles.notyet}>준비중</h1>
    </div>
  );
};

export default Notice;
