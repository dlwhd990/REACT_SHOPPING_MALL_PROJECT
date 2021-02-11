import React from "react";
import "./app.module.css";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import SimpleSlider from "./components/slider/slider";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
