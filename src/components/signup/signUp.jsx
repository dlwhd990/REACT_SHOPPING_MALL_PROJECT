import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./signUp.module.css";

const SignUp = ({ onSignUp }) => {
  const history = useHistory();
  const nameRef = useRef();

  const signup = () => {
    const newUser = {
      id: Date.now(),
      nickname: nameRef.current.value,
    };
    onSignUp(newUser);
    history.push("/");
  };
  return (
    <section className={styles.signup}>
      <section className={styles.signupform}>
        <h1 className={styles.hello}>환영합니다!</h1>
        <div className={styles.namepart}>
          <span className={styles.name}>닉네임</span>
          <input ref={nameRef} type="text" className={styles.nameinput} />
        </div>
        <button className={styles.button} onClick={signup}>
          가입
        </button>
      </section>
    </section>
  );
};

export default SignUp;
