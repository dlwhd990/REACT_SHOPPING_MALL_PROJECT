import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Article from "./article";
import styles from "./bbs.module.css";

const Bbs = ({ articles, authService }) => {
  const history = useHistory();
  const [numbering, setNumbering] = useState(1);

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
  console.log(articleList);

  let pagelength = 0;

  if (articleList.length % 10 === 0) {
    pagelength = parseInt(articleList.length / 10);
  } else if (articleList.length <= 10) {
    pagelength = 1;
  } else {
    pagelength = parseInt(articleList.length / 10) + 1;
  }

  const list = [];

  for (let i = 1; i <= pagelength; i++) {
    list.push(i);
  }

  let pages = [];
  for (let i = 0; i <= pagelength; i++) {
    pages[i] = new Array();
  }

  for (let i = 1; i <= pagelength; i++) {
    for (let j = 10 * (i - 1); j < 10 * i; j++) {
      if (articleList[j] === undefined) {
        break;
      }
      pages[i].push(articleList[j]);
    }
  }

  const pageNumberClick = (e) => {
    setNumbering(e.target.textContent);
  };

  return (
    <section className={styles.bbs}>
      <div className={styles.container}>
        <div className={styles.board_title}>
          <h2>게시판</h2>
        </div>
        <div className={styles.board}>
          {pages[numbering].map((key) => (
            <Article key={key} article={articles[key]} />
          ))}
        </div>
        <div className={styles.bottom}>
          <ul className={styles.pagenum}>
            {list.map((num) => (
              <li key={num} className={styles.number} onClick={pageNumberClick}>
                {num}
              </li>
            ))}
          </ul>
          <button className={styles.write} onClick={write}>
            글쓰기
          </button>
        </div>
      </div>
    </section>
  );
};
export default Bbs;
