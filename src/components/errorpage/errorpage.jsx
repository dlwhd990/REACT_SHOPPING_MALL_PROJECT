import React from "react";
import styles from "./errorPage.module.css";

const ErrorPage = (props) => {
  return (
    <section className={styles.errorPage}>
      <img
        src="../../images/surprise_con.png"
        alt=""
        className={styles.image}
      />
      <h1 className={styles.message}>페이지를 찾을 수 없습니다.</h1>
      <h2 className={styles.message}>다시 시도해주세요.</h2>
    </section>
  );
};
export default ErrorPage;
