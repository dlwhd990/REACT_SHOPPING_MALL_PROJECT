import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ pressLoginButton, authService, userDataRepository }) => {
  const history = useHistory();

  const afterLogin = (userId) => {
    pressLoginButton();
    userDataRepository.checkUserData(userId);
    history.push("/");
    window.location.reload();
  };

  const onLogin = () => {
    authService //
      .login()
      .then((data) => data && afterLogin(data.user.uid));
  };

  return (
    <section className={styles.login}>
      <section className={styles.loginform}>
        <img src="../../images/logo.png" alt="" className={styles.image} />
        <h1 className={styles.title}>로그인</h1>
        <button className={styles.button} onClick={onLogin}>
          Google계정으로 로그인
        </button>
      </section>
    </section>
  );
};

export default Login;
