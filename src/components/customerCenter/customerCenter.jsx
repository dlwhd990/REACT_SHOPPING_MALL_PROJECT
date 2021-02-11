import React from "react";
import Header from "../header/header";
import styles from "./customerCenter.module.css";

const CustomerCenter = (props) => {
  return (
    <div className={styles.customerCenter}>
      <Header />
    </div>
  );
};

export default CustomerCenter;
