import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./notice.module.css";
import NoticeArticle from "./noticeArticle/noticeArticle";

const Notice = ({ notices, noticeRepository, authService, adminId }) => {
  const history = useHistory();
  const [numbering, setNumbering] = useState(1);
  const write = () => {
    const user = authService.check();
    if (user && user.uid === adminId) {
      window.scrollTo({ top: 0 });
      history.push("/writenotice");
    } else {
      window.alert("관리자만 글을 작성할 수 있습니다.");
    }
  };

  const noticeArticleList = Object.keys(notices).reverse();

  let pagelength = 0;

  if (noticeArticleList.length % 10 === 0) {
    pagelength = parseInt(noticeArticleList.length / 10);
  } else if (noticeArticleList.length <= 10) {
    pagelength = 1;
  } else {
    pagelength = parseInt(noticeArticleList.length / 10) + 1;
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
      if (noticeArticleList[j] === undefined) {
        break;
      }
      pages[i].push(noticeArticleList[j]);
    }
  }

  const pageNumberClick = (e) => {
    setNumbering(e.target.textContent);
  };

  return (
    <div className={styles.notice}>
      <div className={styles.container}>
        <div className={styles.board_title}>
          <h2>공지사항</h2>
        </div>
        <div className={styles.board}>
          {pages[numbering].map((key) => (
            <NoticeArticle key={key} noticeArticle={notices[key]} />
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
    </div>
  );
};

export default Notice;
