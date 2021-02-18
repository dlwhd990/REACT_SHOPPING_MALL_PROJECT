import firebaseApp from "./firebase";

class UserDataRepository {
  saveUserData(id, userdata) {
    firebaseApp.database().ref(`userdata/${id}`).set(userdata);
  }
  removeUserData(id) {
    firebaseApp.database().ref(`userdata/${id}`).remove();
  }

  checkUserData(id) {
    const ref = firebaseApp.database().ref(`userdata/${id}`);
    let check;
    ref.on("value", (item) => {
      const value = item.val();
      check = value;
    });
    return check;
  }
}

export default UserDataRepository;
