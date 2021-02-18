import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./sevice/auth_service";
import UserDataRepository from "./sevice/user_data_repository";

const authService = new AuthService();
const userDataRepository = new UserDataRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} userDataRepository={userDataRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);
