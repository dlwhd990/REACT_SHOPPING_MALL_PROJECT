import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ authService, isLogin, userDataRepository }) => {
  const history = useHistory();

  const afterLogin = (userId) => {
    history.push("/");
    isLogin(userId);
    const check = userDataRepository.checkUserData(userId);
    if (!check) {
      history.push("/signup");
    }
  };

  const onLogin = () => {
    authService //
      .login()
      .then((data) => afterLogin(data.user.uid));
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
