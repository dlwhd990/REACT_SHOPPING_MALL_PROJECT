import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ authService, userDataRepository, loginCheck }) => {
  const history = useHistory();

  const afterLogin = (userId) => {
    loginCheck();
    userDataRepository.checkUserData(userId);
    history.push("/");
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
