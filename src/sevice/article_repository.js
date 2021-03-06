import firebaseApp from "./firebase";

class ArticleRepository {
  saveArticle(id, article) {
    firebaseApp.database().ref(`bbs/${id}`).set(article);
  }
  removeArticle(id) {
    firebaseApp.database().ref(`bbs/${id}`).remove();
  }

  settingArticles(onUpdate) {
    const ref = firebaseApp.database().ref(`bbs`);
    ref.on("value", (item) => {
      const value = item.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
}

export default ArticleRepository;
