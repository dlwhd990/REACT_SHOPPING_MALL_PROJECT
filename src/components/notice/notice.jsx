import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./notice.module.css";
import NoticeArticle from "./noticeArticle/noticeArticle";

const Notice = ({ notices, noticeRepository, authService, adminId }) => {
  const history = useHistory();
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
  return (
    <div className={styles.notice}>
      <div className={styles.container}>
        <div className={styles.board_title}>
          <h2>공지사항</h2>
        </div>
        <div className={styles.board}>
          {noticeArticleList.map((key) => (
            <NoticeArticle key={key} noticeArticle={notices[key]} />
          ))}
        </div>
        <button className={styles.write} onClick={write}>
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Notice;
