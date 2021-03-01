import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./article.module.css";

const Article = ({ article }) => {
  const history = useHistory();

  const viewArticle = () => {
    window.scrollTo({ top: 0 });
    history.push(`/articleview/${article.id}`);
  };
  let convertedTitle;
  if (article.title.length > 35) {
    convertedTitle = article.title.slice(0, 35) + "...";
  } else {
    convertedTitle = article.title;
  }

  return (
    <section className={styles.article} onClick={viewArticle}>
      <span className={styles.title}>{convertedTitle}</span>
      <div className={styles.data}>
        <div className={styles.time}>
          <span
            className={styles.time_info}
          >{`${article.uploadDate} ${article.uploadTime}`}</span>
        </div>
        <div className={styles.name}>
          <span className={styles.time_info}>{article.uploader}</span>
        </div>
      </div>
    </section>
  );
};

export default Article;
