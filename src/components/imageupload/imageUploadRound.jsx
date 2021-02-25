import React, { useEffect, useRef, useState } from "react";
import styles from "./imageUploadRound.module.css";

const ImageUploadRound = ({ image, imageUploader, onFileChange }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    uploaded && onFileChange(uploaded.url);
  };

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
      {!loading && (
        <img
          src={image}
          alt=""
          className={styles.image}
          onClick={onButtonClick}
        />
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageUploadRound;
