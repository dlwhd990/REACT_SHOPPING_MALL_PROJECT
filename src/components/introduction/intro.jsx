import React from "react";
import styles from "./intro.module.css";

const Intro = (props) => {
  return (
    <section className={styles.intro}>
      <img
        src="../../images/little_friends.png"
        alt=""
        className={styles.little_friends_image}
      />
      <h1 className={styles.title}>카카오 프렌즈를 소개합니다</h1>

      <h2 className={styles.info_title}>알고 싶은 프렌즈를 골라보세요</h2>
      <div className={styles.info_box}>
        <div className={styles.top}>
          <div className={styles.apeach}>
            <h2 className={styles.name}>APEACH</h2>
            <img
              src="../../images/apeach_bob.png"
              alt=""
              className={styles.char_img}
            />
            <p className={styles.name_kor}>어피치</p>
            <p className={styles.description}>미워할 수 없는 장난꾸러기</p>
          </div>

          <div className={styles.muzi}>
            <h2 className={styles.name}>MUZI</h2>
            <img
              src="../../images/muzi.png"
              alt=""
              className={styles.char_img}
            />
            <p className={styles.name_kor}>무지</p>
            <p className={styles.description}>무한긍정 눈치제로</p>
          </div>

          <div className={styles.con}>
            <h2 className={styles.name}>CON</h2>
            <img
              src="../../images/logo.png"
              alt=""
              className={`${styles.char_img} ${styles.con}`}
            />
            <p className={styles.name_kor}>콘</p>
            <p className={styles.description}>관찰이 취미인 꼬마 과학자</p>
          </div>

          <div className={styles.ryan}>
            <h2 className={styles.name}>RYAN</h2>
            <img
              src="../../images/ryan.png"
              alt=""
              className={styles.char_img}
            />
            <p className={styles.name_kor}>라이언</p>
            <p className={styles.description}>배려심 많은 듬직한 아기사자</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.tube}>
            <p className={styles.name}>TUBE</p>
            <img
              src="../../images/tube.png"
              alt=""
              className={styles.char_img}
            />
            <p className={styles.name_kor}>튜브</p>
            <p className={styles.description}>코감기를 달고사는 오리</p>
          </div>

          <div className={styles.jayg}>
            <h2 className={styles.name}>JAY-G</h2>
            <img
              src="../../images/jayg.png"
              alt=""
              className={styles.char_img}
            />
            <p className={styles.name_kor}>제이지</p>
            <p className={styles.description}>흥이 많은 아기두더지</p>
          </div>

          <div className={styles.neo}>
            <h2 className={styles.name}>NEO</h2>
            <img
              src="../../images/neo.png"
              alt=""
              className={styles.char_img}
            />
            <p className={styles.name_kor}>네오</p>
            <p className={styles.description}>아이돌을 꿈꾸는 새침떼기</p>
          </div>

          <div className={styles.frodo}>
            <h2 className={styles.name}>FRODO</h2>
            <img
              src="../../images/frodo.png"
              alt=""
              className={styles.char_img}
            />
            <p className={styles.name_kor}>프로도</p>
            <p className={styles.description}>활기찬 골목대장</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
