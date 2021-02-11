import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <section className={styles.footer}>
      <p className={styles.copyright}>2021 Con All Rights Reserved</p>
      <span className={styles.contact}>연락처: 010-1234-5678</span>
      <span className={styles.contact}>이메일: Con@con.com</span>
      <span className={styles.contact}>
        주소: 서울시 강남구 삼성로1길 5983-1번지
      </span>
      <span className={styles.contact}>대표: 콘</span>
    </section>
  );
};

export default Footer;
