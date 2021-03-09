import React, { useEffect, useState } from "react";
import styles from "./modal.module.css";

const Modal = ({ friend, closeModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.image_box}>
          <img src={friend.image} alt="modal_image" className={styles.image} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{friend.name}</h2>
          <p className={styles.description}>{friend.description}</p>
        </div>
        <button className={styles.close} onClick={closeModal}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
