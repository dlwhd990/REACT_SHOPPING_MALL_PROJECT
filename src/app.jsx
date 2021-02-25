import React, { useEffect, useState } from "react";
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
import ArticleView from "./components/BBS/articleView/articleView";
import Write from "./components/BBS/write/write";
import Login from "./components/login/login";
import Mypage from "./components/mypage/mypage";
import Errorpage from "./components/errorpage/errorpage";

const App = ({
  authService,
  userDataRepository,
  articleRepository,
  ImageInputRound,
}) => {
  const [items, setItems] = useState({
    1: {
      id: 1,
      type: "인형",
      name: "귀여운 콘 인형",
      price: 10000,
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageURL: "../../images/logo.png",
      option: ["대", "중", "소"],
    },

    2: {
      id: 2,
      type: "생활용품",
      name: "귀여운 라이언 인형",
      price: 8000,
      description: "라이언도 귀여워요",
      imageURL: "../../images/ryan.png",
      option: ["대", "중", "소"],
    },

    3: {
      id: 3,
      type: "의류",
      name: "귀여운 튜브 인형",
      price: 10000,
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageURL: "../../images/tube.png",
      option: ["대", "중", "소"],
    },

    4: {
      id: 4,
      type: "인형",
      name: "귀여운 콘 인형",
      price: 10000,
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageURL: "../../images/logo.png",
      option: ["대", "중", "소"],
    },

    5: {
      id: 5,
      type: "생활용품",
      name: "귀여운 라이언 인형",
      price: 8000,
      description: "라이언도 귀여워요",
      imageURL: "../../images/ryan.png",
      option: ["대", "중", "소"],
    },

    6: {
      id: 6,
      type: "의류",
      name: "귀여운 튜브 인형",
      price: 10000,
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageURL: "../../images/tube.png",
      option: ["대", "중", "소"],
    },

    7: {
      id: 7,
      type: "인형",
      name: "귀여운 콘 인형",
      price: 10000,
      description: "세상에서 제일 귀여운 콘 인형이에요!",
      imageURL: "../../images/logo.png",
      option: ["대", "중", "소"],
    },

    8: {
      id: 8,
      type: "생활용품",
      name: "귀여운 라이언 인형",
      price: 8000,
      description: "라이언도 귀여워요",
      imageURL: "../../images/ryan.png",
      option: ["대", "중", "소"],
    },

    9: {
      id: 9,
      type: "의류",
      name: "귀여운 튜브 인형",
      price: 10000,
      description: "콧물을 닦아주는 라이언과 튜브에요!",
      imageURL: "../../images/tube.png",
      option: ["대", "중", "소"],
    },

    10: {
      id: 10,
      type: "케이스",
      name: "마스크 라이언과 춘식이",
      price: 29000,
      description: "마스크를 착용한 라이언과 춘식이에요",
      imageURL: "../../images/pro.jpg",
      option: ["대", "중", "소"],
    },
  });

  const [articles, setArticles] = useState({});

  const [inherentId, setInherentId] = useState(null);

  const [userData, setUserData] = useState({
    id: null,
    nickname: null,
    imageURL: null,
  });

  const pressLoginButton = (id) => {
    setInherentId(id);
  };

  const uploadArticle = (newArticle) => {
    window.scrollTo({ top: 0 });
    setArticles((articles) => {
      const updated = { ...articles };
      updated[newArticle.id] = newArticle;
      return updated;
    });
    articleRepository.saveArticle(newArticle.id, newArticle);
  };

  const setUser = (value) => {
    console.log(value);
    setUserData(value);
    console.log(userData);
  };

  const logout = () => {
    authService.logout();
    setUserData({
      id: null,
      nickname: null,
      imageURL: null,
    });
  };

  useEffect(() => {
    const tmp = authService.check();
    tmp && setInherentId(tmp.uid);
    console.log(inherentId);
  });

  useEffect(() => {
    userDataRepository.getUserData(inherentId, setUser);
  }, [inherentId]);

  useEffect(() => {
    const stopSync = articleRepository.settingArticles((articles) => {
      setArticles(articles);
    });
    return () => stopSync();
  }, []);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header logout={logout} userData={userData} />
        <Switch>
          <Route exact path="/">
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
            <ItemListPage items={items} userData={userData} />
          </Route>
          <Route exact path="/event">
            <EventPage />
          </Route>
          <Route exact path="/bbs">
            {articles && <Bbs articles={articles} authService={authService} />}
          </Route>
          <Route exact path="/customer">
            <CustomerCenter />
          </Route>
          <Route exact path="/itemview/:id">
            <ItemView items={items} />
          </Route>
          <Route exact path="/articleview/:id">
            {articles && (
              <ArticleView
                articles={articles}
                userDataRepository={userDataRepository}
                inherentId={inherentId}
              />
            )}
          </Route>
          <Route exact path="/writearticle">
            {userData.id && (
              <Write
                uploadArticle={uploadArticle}
                authService={authService}
                userData={userData}
              />
            )}
          </Route>
          <Route exact path="/login">
            <Login
              authService={authService}
              userDataRepository={userDataRepository}
              pressLoginButton={pressLoginButton}
            />
          </Route>
          <Route exact path="/mypage/:id">
            {userData.id ? (
              <Mypage
                authService={authService}
                ImageInputRound={ImageInputRound}
                userDataRepository={userDataRepository}
                userData={userData}
              />
            ) : (
              <Errorpage />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
