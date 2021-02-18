import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Article from "./article";
import styles from "./bbs.module.css";

const Bbs = ({ articles }) => {
  const history = useHistory();
  const write = () => {
    window.scrollTo({ top: 0 });
    history.push("/writearticle");
  };
  const articleList = Object.keys(articles).reverse();

  return (
    <section className={styles.bbs}>
      <div className={styles.container}>
        <div className={styles.board_title}>
          <h2>게시판</h2>
        </div>
        <div className={styles.board}>
          {articleList.map((key) => (
            <Article key={key} article={articles[key]} />
          ))}
        </div>
        <button className={styles.write} onClick={write}>
          글쓰기
        </button>
      </div>
    </section>
  );
};
export default Bbs;
