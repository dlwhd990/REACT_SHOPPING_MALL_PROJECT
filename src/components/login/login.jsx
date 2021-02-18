import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const afterLogin = (userId) => {
    console.log(userId);
    history.push({
      pathname: "/",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
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
          Google
        </button>
      </section>
    </section>
  );
};

export default Login;
