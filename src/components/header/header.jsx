import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <section className={styles.header}>
    <div className={styles.logo}>
      <img src="./images/logo.png" alt="logo__image" className={styles.image} />
      <h1 className={styles.title}>Con's</h1>
    </div>
    <div className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>소개</li>
        <li className={styles.item}>공지사항</li>
        <li className={styles.item}>상품리스트</li>
        <li className={styles.item}>이벤트</li>
        <li className={styles.item}>게시판</li>
        <li className={styles.item}>고객지원</li>
      </ul>
    </div>
  </section>
);

export default Header;
