import React from "react";
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

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <MainPage />
            <Footer />
          </Route>
          <Route exact path="/intro">
            <Intro />
          </Route>
          <Route exact path="/notice">
            <Notice />
          </Route>
          <Route exact path="/itemlist">
            <ItemListPage />
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
