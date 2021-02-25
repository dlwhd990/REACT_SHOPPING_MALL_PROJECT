import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./sevice/auth_service";
import UserDataRepository from "./sevice/user_data_repository";
import ArticleRepository from "./sevice/article_repository";
import ImageUploader from "./sevice/imageUploader";
import ImageUpload from "./components/imageupload/imageUpload";
import ImageUploadRound from "./components/imageupload/imageUploadRound";
import ItemRepository from "./sevice/item_repository";

const authService = new AuthService();
const userDataRepository = new UserDataRepository();
const articleRepository = new ArticleRepository();
const itemRepository = new ItemRepository();
const imageUploader = new ImageUploader();
const ImageInputRound = (props) => (
  <ImageUploadRound {...props} imageUploader={imageUploader} />
);
const ImageInput = (props) => (
  <ImageUpload {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      userDataRepository={userDataRepository}
      articleRepository={articleRepository}
      ImageInput={ImageInput}
      ImageInputRound={ImageInputRound}
      itemRepository={itemRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
