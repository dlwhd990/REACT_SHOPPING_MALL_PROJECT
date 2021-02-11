import React from "react";
import Header from "../header/header";
import styles from "./intro.module.css";

const Intro = (props) => {
  return (
    <section className={styles.intro}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <img src="" alt="" className="" />
      </div>
    </section>
  );
};

export default Intro;
