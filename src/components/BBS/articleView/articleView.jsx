import React from "react";
import styles from "./articleView.module.css";
import { useParams } from "react-router-dom";

const ArticleView = ({ inherenceId, articles }) => {
  const { id } = useParams();
  console.log(articles);

  console.log(articles[id].uploaderProfileImage);

  return (
    <section className={styles.articleView}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.userdata}>
            <img
              src={articles[id].uploaderProfileImage}
              alt=""
              className={styles.userImage}
            />
            <div className={styles.textdata}>
              <h3 className={styles.uploader}>{articles[id].uploader}</h3>
              <span
                className={styles.uploadTime}
              >{`${articles[id].uploadDate}  ${articles[id].uploadTime}`}</span>
            </div>
          </div>

          <button className={styles.deleteButton}>삭제</button>
        </div>
        <h2 className={styles.title}>{articles[id].title}</h2>
        <p className={styles.content}>{articles[id].content}</p>
        <div className={styles.evaluation}>
          <button className={styles.likeButton}>
            <i className="far fa-thumbs-up"></i>
          </button>
          <span className={styles.likeCount}>0</span>
        </div>
      </div>
    </section>
  );
};

export default ArticleView;
