import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
    window.scrollTo({ top: 0 });
  };

  const goIntro = () => {
    history.push("/intro");
    window.scrollTo({ top: 0 });
  };

  const goNotice = () => {
    history.push("/notice");
    window.scrollTo({ top: 0 });
  };

  const goItemList = () => {
    history.push("/itemlist");
    window.scrollTo({ top: 0 });
  };

  const goEvent = () => {
    history.push("/event");
    window.scrollTo({ top: 0 });
  };

  const goBBS = () => {
    history.push("/bbs");
    window.scrollTo({ top: 0 });
  };

  const goCustomerCenter = () => {
    history.push("/customer");
    window.scrollTo({ top: 0 });
  };

  return (
    <section className={styles.header}>
      <div className={styles.logo} onClick={goHome}>
        <img
          src="../../images/logo.png"
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
