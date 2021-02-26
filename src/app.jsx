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
import Loading from "./components/loading/loading";
import NoticeWrite from "./components/notice/write/noticeWrite";
import NoticeView from "./components/notice/noticeView/noticeView";

const App = ({
  authService,
  userDataRepository,
  articleRepository,
  ImageInputRound,
  itemRepository,
  noticeRepository,
}) => {
  const adminId = process.env.REACT_APP_ADMIN_ID;

  const [items, setItems] = useState(null);

  const [articles, setArticles] = useState(null);

  const [inherentId, setInherentId] = useState(null);

  const [userData, setUserData] = useState({
    id: null,
    nickname: null,
    imageURL: null,
  });

  const [notices, setNotices] = useState(null);

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

  const uploadNotice = (newNotice) => {
    window.scrollTo({ top: 0 });
    setArticles(() => {
      const updated = { ...notices };
      updated[newNotice.id] = newNotice;
      return updated;
    });
    noticeRepository.saveNotice(newNotice.id, newNotice);
  };

  const setUser = (value) => {
    setUserData(value);
  };

  const logout = () => {
    authService.logout();
    setUserData({
      id: null,
      nickname: null,
      imageURL: null,
    });
    setInherentId(null);
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

  useEffect(() => {
    const stopSync = itemRepository.settingItems((items) => {
      setItems(items);
    });
    return () => stopSync();
  }, []);

  useEffect(() => {
    const stopSync = noticeRepository.settingNotices((notices) => {
      setNotices(notices);
    });
    return () => stopSync();
  }, []);
  console.log(notices);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header logout={logout} userData={userData} />
        <Switch>
          <Route exact path="/">
            {items ? <MainPage items={items} /> : <Loading />}
            <Footer />
          </Route>
          <Route exact path="/intro">
            <Intro />
          </Route>
          <Route exact path="/notice">
            {notices && (
              <Notice
                noticeRepository={noticeRepository}
                notices={notices}
                authService={authService}
                adminId={adminId}
              />
            )}
          </Route>
          <Route exact path="/itemlist">
            {items && <ItemListPage items={items} userData={userData} />}
          </Route>
          <Route exact path="/event">
            <EventPage />
          </Route>
          <Route exact path="/bbs">
            {articles ? (
              <Bbs articles={articles} authService={authService} />
            ) : (
              <Loading />
            )}
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
                userData={userData}
                articleRepository={articleRepository}
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
              <Loading />
            )}
          </Route>
          <Route exact path="/writenotice">
            <NoticeWrite
              uploadNotice={uploadNotice}
              userData={userData}
              authService={authService}
              adminId={adminId}
            />
          </Route>
          <Route exact path="/noticearticleview/:id">
            {notices && (
              <NoticeView
                notices={notices}
                userData={userData}
                noticeRepository={noticeRepository}
              />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
