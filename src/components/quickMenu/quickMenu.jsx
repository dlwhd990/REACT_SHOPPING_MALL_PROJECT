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
          <li className={styles.item}>장바구니</li>
          <li className={styles.item}>찜 목록</li>
          <li className={styles.item}>쿠폰</li>
          <li className={styles.item}>포인트</li>
        </ul>
      </div>
    </section>
  );
};

export default QuickMenu;
