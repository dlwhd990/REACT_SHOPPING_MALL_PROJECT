import React from "react";
import { useHistory } from "react-router-dom";
import Article from "../../BBS/article";
import styles from "./noticeArticle.module.css";

const NoticeArticle = ({ noticeArticle }) => {
  const history = useHistory();

  const viewNoticeArticle = () => {
    window.scrollTo({ top: 0 });
    history.push(`/noticearticleview/${noticeArticle.id}`);
  };

  return (
    <section className={styles.noticeArticle} onClick={viewNoticeArticle}>
      <span className={styles.title}>{noticeArticle.title}</span>
      <div className={styles.data}>
        <div className={styles.time}>
          <span
            className={styles.time_info}
          >{`${noticeArticle.uploadDate} ${noticeArticle.uploadTime}`}</span>
        </div>
        <div className={styles.name}>
          <span>{noticeArticle.uploader}</span>
        </div>
      </div>
    </section>
  );
};

export default NoticeArticle;
