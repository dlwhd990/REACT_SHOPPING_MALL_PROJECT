import React, { useEffect, useState } from "react";
import styles from "./noticeView.module.css";
import { useHistory, useParams } from "react-router-dom";

const NoticeView = ({ userData, notices, noticeRepository }) => {
  const { id } = useParams();
  const history = useHistory();
  const [deleteOn, setDeleteOn] = useState(false);

  useEffect(() => {
    if (userData.id === notices[id].uploaderId) {
      setDeleteOn(true);
    } else {
      setDeleteOn(false);
    }
  });

  const deleteNotice = () => {
    const popup = window.confirm(
      "정말로 삭제하시겠습니까? 삭제된 글은 복구하실 수 없습니다."
    );
    if (popup) {
      noticeRepository.removeNotice(id);
      history.push("/notice");
    }
  };

  return (
    <section className={styles.noticeView}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.userdata}>
            <img
              src={notices[id].uploaderProfileImage}
              alt=""
              className={styles.userImage}
            />
            <div className={styles.textdata}>
              <h3 className={styles.uploader}>{notices[id].uploader}</h3>
              <span
                className={styles.uploadTime}
              >{`${notices[id].uploadDate}  ${notices[id].uploadTime}`}</span>
            </div>
          </div>

          <button
            className={`${styles.deleteButton} ${
              deleteOn ? styles.deleteOn : styles.deleteOff
            }`}
            onClick={deleteNotice}
          >
            삭제
          </button>
        </div>
        <h2 className={styles.title}>{notices[id].title}</h2>
        <p className={styles.content}>{notices[id].content}</p>
      </div>
    </section>
  );
};

export default NoticeView;
