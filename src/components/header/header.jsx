import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  const goIntro = () => {
    history.push("/intro");
  };

  const goNotice = () => {
    history.push("/notice");
  };

  const goItemList = () => {
    history.push("/itemlist");
  };

  const goEvent = () => {
    history.push("/event");
  };

  const goBBS = () => {
    history.push("/bbs");
  };

  const goCustomerCenter = () => {
    history.push("/customer");
  };

  return (
    <section className={styles.header}>
      <div className={styles.logo} onClick={goHome}>
        <img
          src="./images/logo.png"
          alt="logo__image"
          className={styles.image}
        />
        <h1 className={styles.title}>Con's</h1>
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item} onClick={goIntro}>
            소개
          </li>
          <li className={styles.item} onClick={goNotice}>
            공지사항
          </li>
          <li className={styles.item} onClick={goItemList}>
            상품리스트
          </li>
          <li className={styles.item} onClick={goEvent}>
            이벤트
          </li>
          <li className={styles.item} onClick={goBBS}>
            게시판
          </li>
          <li className={styles.item} onClick={goCustomerCenter}>
            고객지원
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
