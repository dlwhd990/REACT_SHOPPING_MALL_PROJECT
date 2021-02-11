import React from "react";
import Header from "../header/header";
import styles from "./eventPage.module.css";

const EventPage = (props) => {
  return (
    <div className={styles.eventPage}>
      <Header />
    </div>
  );
};

export default EventPage;
