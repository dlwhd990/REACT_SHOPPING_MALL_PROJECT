import React from "react";
import styles from "./intro.module.css";

const Intro = (props) => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.date}>2021.03.02</h1>
      <h1 className={styles.title}>카카오 프렌즈샵이 드디어 OPEN!</h1>
      <img
        src="../../images/ryan_like.gif"
        alt=""
        className={styles.intro_image}
      />
    </section>
  );
};

export default Intro;
