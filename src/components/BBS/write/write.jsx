import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./write.module.css";

const Write = ({ uploadArticle, userDataRepository }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const history = useHistory();

  const upload = () => {
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    month++;

    const newArticle = {
      id: Date.now(),
      title: titleRef.current.value || "",
      content: contentRef.current.value || "",
      uploadDate: `${month
        .toString()
        .padStart(2, "0")}/${date.toString().padStart(2, "0")}`,
      uploadTime: `${hour
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`,
      uploader: "Gooms",
    };

    uploadArticle(newArticle);
    history.push("/bbs");
  };

  return (
    <section className={styles.write}>
      <form className={styles.writeform}>
        <p>
          <input
            ref={titleRef}
            name="text"
            className={styles.titleInput}
            placeholder="제목"
          />
        </p>
        <p>
          <textarea
            ref={contentRef}
            name="text"
            className={styles.contentInput}
            placeholder="내용"
          />
        </p>
      </form>
      <div className={styles.buttons}>
        <button className={styles.imageUpload}>이미지</button>
        <button className={styles.upload} onClick={upload}>
          글 작성
        </button>
      </div>
    </section>
  );
};

export default Write;
