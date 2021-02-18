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
    ref.once("value", (snapshot) => {
      snapshot.val() && console.log(snapshot.val());
    });
  }
}

export default UserDataRepository;
