import AuthService from "./auth_service";
import firebaseApp from "./firebase";

const authService = new AuthService();

const signUp = (userId, userName) => {
  const newUser = {
    id: userId,
    nickname: userName,
    imageURL: "../../images/default.png",
  };
  firebaseApp.database().ref(`userdata/${userId}`).set(newUser);
};

function setCheck(userId, value) {
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

  getUserData(id, onUpdate) {
    const ref = firebaseApp.database().ref(`userdata/${id}`);
    ref.on("value", (item) => {
      const value = item.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
}
export default UserDataRepository;
