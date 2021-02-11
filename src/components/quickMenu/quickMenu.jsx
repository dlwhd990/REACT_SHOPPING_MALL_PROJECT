import React from "react";
import styles from "./quickMenu.module.css";

const QuickMenu = (props) => {
  return (
    <section className={styles.quickMenu}>
      <div className={styles.member_info}>
        <div className={styles.image_border}>
          <img
            src="./images/logo.png"
            alt="member_profile_image"
            className={styles.profile_image}
          />
        </div>

        <p className={styles.profile_name}>Con</p>
        <button className={styles.myPage_button}>마이페이지</button>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.list}>
        <ul>
          <li className={styles.item}>인형</li>
          <li className={styles.item}>생활용품</li>
          <li className={styles.item}>에어팟 케이스</li>
          <li className={styles.item}>스마트폰 케이스</li>
          <li className={styles.item}>의류</li>
          <li className={styles.item}>키링</li>
          <li className={styles.item}>노트북 파우치</li>
          <li className={styles.item}>스티커</li>
        </ul>
      </div>
    </section>
  );
};

export default QuickMenu;
