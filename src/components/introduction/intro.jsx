import React from "react";
import styles from "./intro.module.css";

const Intro = (props) => {
  return (
    <section className={styles.intro}>
      <section className={styles.container}>
        <div className={styles.top}>
          <img
            src="../../images/intro.png"
            alt="intro_image"
            className={styles.image_top}
          />
          <h1 className={styles.title}>Mysterious Crocodile</h1>
          <h2 className={styles.description}>
            Friends City 외곽의 비밀스러운 장소인 Con Lab에는 나이를 알 수 없는
            신비로운 표정의 꼬마 악어 콘이 홀로 연구에 몰두하고 있습니다.
            <br />
            혼자만의 외로운 연구에 지쳐가던 어느 날, 콘은 평생의 동반자로 지낼
            친구를 만들기로 결심하고 마침내 무지를 탄생시킵니다.
            <br /> 하지만 귀여워 보이는 토끼의 모습과는 다르게 무지의 정체는
            사실 단무지였습니다.
            <br /> 무지를 키우는 데 여념이 없는 콘과는 다르게 커가면서 점차
            자아가 강해지는 무지는 바깥 세상에 대한 호기심을 참지 못하고 늘
            탈출을 시도합니다.
            <br /> 이를 지켜보던 콘은 결국 다른 친구들과의 만남을 허락하지만,
            항상 무지 주변을 맴돌며 관찰합니다.
          </h2>
        </div>
      </section>
    </section>
  );
};

export default Intro;
