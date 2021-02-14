import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./article.module.css";

const Article = ({ article }) => {
  const history = useHistory();

  const viewArticle = () => {
    window.scrollTo({ top: 0 });
    history.push(`/articleview/${article.id}`);
  };

  return (
    <section className={styles.article} onClick={viewArticle}>
      <span className={styles.title}>{article.title}</span>
      <div className={styles.data}>
        <div className={styles.time}>
          <span>{article.uploadDate}</span>
        </div>
        <div className={styles.name}>
          <span>{article.uploader}</span>
        </div>
      </div>
    </section>
  );
};

export default Article;
