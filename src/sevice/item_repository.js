import firebaseApp from "./firebase";

class ItemRepository {
  saveItem(id, item) {
    firebaseApp.database().ref(`items/${id}`).set(item);
  }
  removeItem(id) {
    firebaseApp.database().ref(`items/${id}`).remove();
  }

  settingItems(onUpdate) {
    const ref = firebaseApp.database().ref(`items`);
    ref.on("value", (item) => {
      const value = item.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
}

export default ItemRepository;
