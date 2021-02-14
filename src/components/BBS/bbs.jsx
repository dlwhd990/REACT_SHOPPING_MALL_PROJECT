import React, { useState } from "react";
import Header from "../header/header";
import Article from "./article";
import styles from "./bbs.module.css";

const Bbs = ({ articles }) => {
  return (
    <section className={styles.bbs}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.board_title}>
          <h2>게시판</h2>
        </div>
        <div className={styles.board}>
          {Object.keys(articles).map((key) => (
            <Article key={key} article={articles[key]} />
          ))}
        </div>
        <button className={styles.write}>글쓰기</button>
      </div>
    </section>
  );
};
export default Bbs;
