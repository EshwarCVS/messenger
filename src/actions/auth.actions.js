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
            db.collection("users")
              .doc(data.user.uid)
              .set({
                firstName: user.firstName,
                lastName: user.lastName,
                uid: data.user.uid,
                isOnline: true,
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

export const signin = (user) => {
  return async (dispatch) => {
    dispatch({ type: `${authConstant.USER_LOGIN_REQUEST}` });
    auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        console.log(data);
        const name = data.user.displayName.split(" ");
        const firstName = name[0];
        const lastName = name[1];

        const loggedInUser = {
          firstName,
          lastName,
          uid: data.user.uid,
          isOnline: true,
          email: data.user.email,
        };
        localStorage.setItem("user", JSON.stringify(loggedInUser));

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
  };
};

export const isLoggedInUser = () => {
  return (dispatch) => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    if (user) {
      dispatch({
        type: `${authConstant.USER_LOGIN_SUCCESS}`,
        payload: { user: user },
      });
    } else {
      dispatch({
        type: `${authConstant.USER_LOGIN_FAILURE}`,
        payload: { error: "Login failed" },
      });
    }
  };
};

export const logout = (uid) => {
  return async (dispatch) => {
    dispatch({ type: `${authConstant.USER_LOGOUT}_REQUEST` });
    //User logs out
    const db = firestore();
    db.collection("users")
      .doc(uid)
      .update({
        isOnline: false,
      })
      .then(() => {
        auth()
          .signOut()
          .then(() => {
            localStorage.clear();
            dispatch({ type: `${authConstant.USER_LOGOUT}_SUCCESS` });
          })
          .catch((error) => {
            console.log(error);
            dispatch(
              { type: `${authConstant.USER_LOGOUT}_FAILURE`, payload: error },
            );
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
