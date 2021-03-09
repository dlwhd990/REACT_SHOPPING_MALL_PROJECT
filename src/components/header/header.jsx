import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ logout, userData }) => {
  const history = useHistory();

  const [toggle, setToggle] = useState(false);

  const goHome = () => {
    setToggle(false);
    history.push("/");
    window.scrollTo({ top: 0 });
  };

  const goIntro = () => {
    setToggle(false);
    history.push("/intro");
    window.scrollTo({ top: 0 });
  };

  const goNotice = () => {
    setToggle(false);
    history.push("/notice");
    window.scrollTo({ top: 0 });
  };

  const goItemList = () => {
    setToggle(false);
    history.push("/itemlist");
    window.scrollTo({ top: 0 });
  };

  const goBBS = () => {
    setToggle(false);
    history.push("/bbs");
    window.scrollTo({ top: 0 });
  };

  const goCustomerCenter = () => {
    setToggle(false);
    history.push("/customer");
    window.scrollTo({ top: 0 });
  };

  const goLogin = () => {
    setToggle(false);
    history.push("/login");
    window.scrollTo({ top: 0 });
  };

  const goLogout = () => {
    setToggle(false);
    logout();
  };

  const goMyPage = () => {
    if (userData.id) {
      setToggle(false);
      history.push(`/mypage/${userData.id}`);
      window.scrollTo({ top: 0 });
    } else {
      history.push("/");
      window.alert("로그인 후에 사용해주세요.");
    }
  };

  const clickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <section className={styles.header}>
      <div className={styles.logo} onClick={goHome}>
        <img
          src="../../images/logo_title.png"
          alt="logo__image"
          className={styles.image}
        />
      </div>
      <ul className={`${styles.list} ${toggle ? styles.on : styles.off}`}>
        <li className={styles.item} onClick={goHome}>
          홈
        </li>
        <li className={styles.item} onClick={goIntro}>
          소개
        </li>
        <li className={styles.item} onClick={goNotice}>
          공지사항
        </li>
        <li className={styles.item} onClick={goItemList}>
          상품리스트
        </li>

        <li className={styles.item} onClick={goBBS}>
          게시판
        </li>
        <li
          className={`${styles.item} ${styles.last}`}
          onClick={goCustomerCenter}
        >
          고객지원
        </li>
      </ul>
      <div className={`${styles.buttons} ${toggle ? styles.on : styles.off}`}>
        <button
          className={`${styles.loginButton} ${
            userData && (userData.id ? styles.onlogin : styles.onlogout)
          }`}
          onClick={goLogin}
        >
          로그인
        </button>
        <div
          className={`${styles.logedin} ${
            userData && (userData.id ? styles.onlogin : styles.onlogout)
          }`}
        >
          <button className={styles.mypage} onClick={goMyPage}>
            마이페이지
          </button>
          <button className={styles.logoutButton} onClick={goLogout}>
            로그아웃
          </button>
        </div>
      </div>
      <button className={styles.toggle} onClick={clickToggle}>
        <i className="fas fa-bars"></i>
      </button>
    </section>
  );
};

export default Header;
