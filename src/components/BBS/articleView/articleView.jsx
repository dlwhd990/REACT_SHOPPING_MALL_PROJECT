import React, { useEffect, useState } from "react";
import styles from "./articleView.module.css";
import { useHistory, useParams } from "react-router-dom";

const ArticleView = ({ userData, articles, articleRepository }) => {
  const { id } = useParams();
  const history = useHistory();
  const [deleteOn, setDeleteOn] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(articles[id].likeCount));
  const [liked, setLiked] = useState(null);
  const [likedList, setLikedList] = useState(Object.keys(articles[id].liked));
  const [likedObject, setLikedObject] = useState(articles[id].liked);
  useEffect(() => {
    if (userData.id === articles[id].uploaderId) {
      setDeleteOn(true);
    } else {
      setDeleteOn(false);
    }
    for (let i = 0; i < likedList.length; i++) {
      if (likedList[i] === userData.id) {
        setLiked(true);
        break;
      } else {
        setLiked(false);
      }
    }
  }, []);

  useEffect(() => {
    articleRepository.saveArticle(id, {
      ...articles[id],
      liked: { ...likedObject },
      likeCount: likeCount,
    });
  }, [likedObject]);

  const deleteArticle = () => {
    const popup = window.confirm(
      "정말로 삭제하시겠습니까? 삭제된 글은 복구하실 수 없습니다."
    );
    if (popup) {
      articleRepository.removeArticle(id);
      history.push("/bbs");
    }
  };

  const changeLikeCount = () => {
    if (liked === null) {
      window.alert("잠시만 기다려주세요.");
    } else if (userData.id === null) {
      window.alert("로그인을 하신 후에 추천이 가능합니다.");
    } else {
      if (!liked) {
        setLikeCount(likeCount + 1);
        setLiked(true);
        const updated = { ...likedObject };
        updated[userData.id] = { name: userData.id };
        setLikedObject(updated);
      } else {
        setLikeCount(likeCount - 1);
        setLiked(false);
        const updated = { ...likedObject };
        delete updated[userData.id];
        setLikedObject(updated);
      }
    }
  };

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

          <button
            className={`${styles.deleteButton} ${
              deleteOn ? styles.deleteOn : styles.deleteOff
            }`}
            onClick={deleteArticle}
          >
            삭제
          </button>
        </div>
        <h2 className={styles.title}>{articles[id].title}</h2>
        <p className={styles.content}>{articles[id].content}</p>
        <div className={styles.evaluation}>
          <button
            className={`${styles.likeButton} ${liked ? styles.on : styles.off}`}
            onClick={changeLikeCount}
          >
            <p
              className={`${styles.likeCount} ${
                liked ? styles.on : styles.off
              }`}
            >{`좋아요 ${likeCount}`}</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleView;
