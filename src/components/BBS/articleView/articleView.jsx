import React from "react";
import styles from "./articleView.module.css";
import { useParams } from "react-router-dom";

const ArticleView = ({ articles }) => {
  const { id } = useParams();
  console.log(articles[id]);
  return (
    <section className={styles.articleView}>
      <h1>{articles[id].title}</h1>
    </section>
  );
};

export default ArticleView;
