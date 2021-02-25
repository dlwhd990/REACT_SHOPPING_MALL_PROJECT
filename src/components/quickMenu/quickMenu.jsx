import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./quickMenu.module.css";

const QuickMenu = ({ userData }) => {
  const history = useHistory();

  const goMyPage = () => {
    if (userData.id) {
      history.push(`/mypage/${userData.id}`);
      window.scrollTo({ top: 0 });
    } else {
      window.alert("로그인 후에 사용해주세요.");
    }
  };

  return (
    <section className={styles.quickMenu}>
      <div className={styles.member_info}>
        <div className={styles.image_border}>
          <img
            src={userData.imageURL || "../../images/default.png"}
            alt="member_profile_image"
            className={styles.profile_image}
          />
        </div>

        <p className={styles.profile_name}>{userData.nickname || ""}</p>
        <button className={styles.myPage_button} onClick={goMyPage}>
          마이페이지
        </button>
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
