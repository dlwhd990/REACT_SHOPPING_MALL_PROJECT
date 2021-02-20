import AuthService from "./auth_service";
import firebaseApp from "./firebase";

const authService = new AuthService();

const signUp = (userId, userName) => {
  const newUser = {
    id: userId,
    nickname: userName,
  };
  firebaseApp.database().ref(`userdata/${userId}`).set(newUser);
};

function setCheck(userId, value) {
  console.log(userId, value);
  if (!value) {
    const user = authService.check();

    if (user) {
      signUp(userId, user.displayName);
    }
  }
}

class UserDataRepository {
  saveUserData(id, userdata) {
    firebaseApp.database().ref(`userdata/${id}`).set(userdata);
  }

  removeUserData(id) {
    firebaseApp.database().ref(`userdata/${id}`).remove();
  }

  checkUserData(id) {
    const ref = firebaseApp.database().ref(`userdata/${id}`);
    ref.once("value").then(function (snapshot) {
      setCheck(id, snapshot.val());
    });
  }
}
export default UserDataRepository;
