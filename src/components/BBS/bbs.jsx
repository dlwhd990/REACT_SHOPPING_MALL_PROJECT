import React from "react";
import { useHistory } from "react-router-dom";
import Article from "./article";
import styles from "./bbs.module.css";

const Bbs = ({ articles, authService }) => {
  const history = useHistory();
  const write = () => {
    const user = authService.check();
    if (user) {
      window.scrollTo({ top: 0 });
      history.push("/writearticle");
    } else {
      window.alert("로그인 하셔야 글 작성이 가능합니다.");
    }
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
