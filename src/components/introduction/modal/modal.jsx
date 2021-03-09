import React, { useEffect, useState } from "react";
import styles from "./modal.module.css";

const Modal = ({ friend, closeModal }) => {
  console.log("MODAL ON");
  const [clickButton, setClickButton] = useState(false);

  const onClick = () => {
    setClickButton(true);
  };

  useEffect(() => {
    if (clickButton === true) {
      closeModal();
      setClickButton(false);
    }
  }, [clickButton]);
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
        <button className={styles.close} onClick={onClick}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
