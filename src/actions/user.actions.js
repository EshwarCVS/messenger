import { userConstant } from "./constants";
import { firestore } from "firebase";

export const getRealTimeUsers = (uid) => {
  return async (dispatch) => {
    const db = firestore();
    dispatch({ type: `${userConstant.GET_REALTIMEUSERS}_REQUEST` });
    const unsubscribe = db.collection("users")
      //.where("uid", "!==", uid)
      .onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach(function (doc) {
          if (doc.data().uid !== uid) {
            users.push(doc.data());
          }
        });
        //console.log(users);
        dispatch({
          type: `${userConstant.GET_REALTIMEUSERS}_SUCCESS`,
          payload: { users },
        });
      });
    return unsubscribe;
  };
};
