import React, { useState } from "react";
import Popular from "../popular/popular";
import QuickMenu from "../quickMenu/quickMenu";
import SimpleSlider from "../slider/slider";
import styles from "./mainPage.module.css";

const MainPage = (props) => {
  const [items, setItems] = useState({
    1: {
      id: 1,
      name: "귀여운 콘 인형",
      price: "10000원",
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageName: "logo",
      imageURL: "./images/logo.png",
    },

    2: {
      id: 2,
      name: "귀여운 라이언 인형",
      price: "8000원",
      description: "라이언도 귀여워요",
      imageName: "logo",
      imageURL: "./images/ryan.png",
    },

    3: {
      id: 3,
      name: "귀여운 튜브 인형",
      price: "10000원",
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageName: "logo",
      imageURL: "./images/tube.png",
    },

    4: {
      id: 4,
      name: "귀여운 콘 인형",
      price: "10000원",
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageName: "logo",
      imageURL: "./images/logo.png",
    },

    5: {
      id: 5,
      name: "귀여운 라이언 인형",
      price: "8000원",
      description: "라이언도 귀여워요",
      imageName: "logo",
      imageURL: "./images/ryan.png",
    },

    6: {
      id: 6,
      name: "귀여운 튜브 인형",
      price: "10000원",
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageName: "logo",
      imageURL: "./images/tube.png",
    },

    7: {
      id: 7,
      name: "귀여운 콘 인형",
      price: "10000원",
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageName: "logo",
      imageURL: "./images/logo.png",
    },

    8: {
      id: 8,
      name: "귀여운 라이언 인형",
      price: "8000원",
      description: "라이언도 귀여워요",
      imageName: "logo",
      imageURL: "./images/ryan.png",
    },

    9: {
      id: 9,
      name: "귀여운 튜브 인형",
      price: "10000원",
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageName: "logo",
      imageURL: "./images/tube.png",
    },
  });
  return (
    <section className={styles.mainPage}>
      <div className={styles.slider}>
        <SimpleSlider />
      </div>
      <div className={styles.popular}>
        <Popular items={items} />
      </div>
    </section>
  );
};

export default MainPage;
