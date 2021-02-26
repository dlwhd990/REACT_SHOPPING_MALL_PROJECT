import firebaseApp from "./firebase";

class NoticeRepository {
  saveNotice(id, notice) {
    firebaseApp.database().ref(`notice/${id}`).set(notice);
  }
  removeNotice(id) {
    firebaseApp.database().ref(`notice/${id}`).remove();
  }

  settingNotices(onUpdate) {
    const ref = firebaseApp.database().ref(`notice`);
    ref.on("value", (item) => {
      const value = item.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
}

export default NoticeRepository;
