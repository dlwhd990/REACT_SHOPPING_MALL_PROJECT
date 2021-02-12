import React, { useState } from "react";
import "./app.module.css";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./components/introduction/intro";
import ItemListPage from "./components/itemListPage/itemListPage";
import Notice from "./components/notice/notice";
import EventPage from "./components/eventPage/eventPage";
import CustomerCenter from "./components/customerCenter/customerCenter";
import Bbs from "./components/BBS/bbs";
import ItemView from "./components/itemView/itemView";

const App = (props) => {
  const [items, setItems] = useState({
    1: {
      id: 1,
      type: "doll",
      name: "귀여운 콘 인형",
      price: "10000원",
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageName: "logo",
      imageURL: "../../images/logo.png",
    },

    2: {
      id: 2,
      type: "doll",
      name: "귀여운 라이언 인형",
      price: "8000원",
      description: "라이언도 귀여워요",
      imageName: "logo",
      imageURL: "../../images/ryan.png",
    },

    3: {
      id: 3,
      type: "doll",
      name: "귀여운 튜브 인형",
      price: "10000원",
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageName: "logo",
      imageURL: "../../images/tube.png",
    },

    4: {
      id: 4,
      type: "doll",
      name: "귀여운 콘 인형",
      price: "10000원",
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageName: "logo",
      imageURL: "../../images/logo.png",
    },

    5: {
      id: 5,
      type: "doll",
      name: "귀여운 라이언 인형",
      price: "8000원",
      description: "라이언도 귀여워요",
      imageName: "logo",
      imageURL: "../../images/ryan.png",
    },

    6: {
      id: 6,
      type: "doll",
      name: "귀여운 튜브 인형",
      price: "10000원",
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageName: "logo",
      imageURL: "../../images/tube.png",
    },

    7: {
      id: 7,
      type: "doll",
      name: "귀여운 콘 인형",
      price: "10000원",
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageName: "logo",
      imageURL: "../../images/logo.png",
    },

    8: {
      id: 8,
      type: "doll",
      name: "귀여운 라이언 인형",
      price: "8000원",
      description: "라이언도 귀여워요",
      imageName: "logo",
      imageURL: "../../images/ryan.png",
    },

    9: {
      id: 9,
      type: "doll",
      name: "귀여운 튜브 인형",
      price: "10000원",
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageName: "logo",
      imageURL: "../../images/tube.png",
    },

    10: {
      id: 10,
      type: "doll",
      name: "마스크 라이언과 춘식이",
      price: "29000원",
      description: "마스크를 착용한 라이언과 춘식이에요",
      imageName: "1",
      imageURL: "../../images/pro.jpg",
    },
  });

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <MainPage items={items} />
            <Footer />
          </Route>
          <Route exact path="/intro">
            <Intro />
          </Route>
          <Route exact path="/notice">
            <Notice />
          </Route>
          <Route exact path="/itemlist">
            <ItemListPage items={items} />
          </Route>
          <Route exact path="/event">
            <EventPage />
          </Route>
          <Route exact path="/bbs">
            <Bbs />
          </Route>
          <Route exact path="/customer">
            <CustomerCenter />
          </Route>
          <Route exact path="/itemview/:id">
            <ItemView items={items} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
