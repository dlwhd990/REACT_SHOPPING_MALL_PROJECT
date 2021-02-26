import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./noticeArticle.module.css";

const NoticeArticle = ({ noticeArticle }) => {
  const history = useHistory();

  const viewNoticeArticle = () => {
    window.scrollTo({ top: 0 });
    history.push(`/noticearticleview/${noticeArticle.id}`);
  };
  let convertedTitle;
  if (noticeArticle.title.length > 35) {
    convertedTitle = noticeArticle.title.slice(0, 35) + "...";
  } else {
    convertedTitle = noticeArticle.title;
  }

  return (
    <section className={styles.noticeArticle} onClick={viewNoticeArticle}>
      <span className={styles.title}>{convertedTitle}</span>
      <div className={styles.data}>
        <div className={styles.time}>
          <span>{`${noticeArticle.uploadDate} ${noticeArticle.uploadTime}`}</span>
        </div>
        <div className={styles.name}>
          <span>{noticeArticle.uploader}</span>
        </div>
      </div>
    </section>
  );
};

export default NoticeArticle;
