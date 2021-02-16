import React from "react";
import styles from "./articleView.module.css";
import { useParams } from "react-router-dom";

const ArticleView = ({ articles }) => {
  const { id } = useParams();

  return (
    <section className={styles.articleView}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>{articles[id].title}</h2>
          <span className={styles.uploader}>{articles[id].uploader}</span>
          <span className={styles.uploadDate}>{articles[id].uploadDate}</span>
        </div>

        <h3>{articles[id].content}</h3>
      </div>
    </section>
  );
};

export default ArticleView;
