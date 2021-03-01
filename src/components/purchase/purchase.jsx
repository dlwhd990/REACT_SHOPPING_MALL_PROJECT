import React from "react";
import { useHistory, useLocation } from "react-router";
import styles from "./purchase.module.css";

const Purchase = (props) => {
  const location = useLocation();
  console.log(location.state);
  console.log(location.state.list);
  console.log(location.state.finalPrice);
  return (
    <section className={styles.purchase}>
      <h1>sds</h1>
    </section>
  );
};

export default Purchase;
