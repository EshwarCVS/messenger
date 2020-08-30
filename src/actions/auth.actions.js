import { auth, firestore } from "firebase";
import { authConstant } from "./constants";
export const signup = (user) => {
  return async (dispatch) => {
    const db = firestore();

    dispatch({ type: `${authConstant.USER_LOGIN_REQUEST}` });
    auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        console.log(data);
        const currentUser = auth().currentUser;
        const name = `${user.firstName} ${user.lastName}`;
        currentUser.updateProfile({
          displayName: name,
        })
          .then(() => {
            db.collection("users").add({
              firstName: user.firstName,
              lastName: user.lastName,
              uid: data.user.uid,
              createdAt: new Date(),
            })
              .then(() => {
                const loggedInUser = {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  uid: data.user.uid,
                  email: user.email,
                };
                localStorage.setItem(
                  "user",
                  JSON.stringify({ loggedInUser }),
                );
                console.log("User log in successful");
                dispatch({
                  type: `${authConstant.USER_LOGIN_SUCCESS}`,
                  payload: { user: loggedInUser },
                });
              })
              .catch((error) => {
                console.log(error);
                dispatch({
                  type: `${authConstant.USER_LOGIN_FAILURE}`,
                  payload: { error },
                });
              });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
