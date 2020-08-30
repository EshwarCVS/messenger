import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./store/index";

const firebaseConfig = {
  apiKey: "AIzaSyC-5AiGELf0OwZ5you7ro17Im6YOwhzKtw",
  authDomain: "messenger-2fd13.firebaseapp.com",
  databaseURL: "https://messenger-2fd13.firebaseio.com",
  projectId: "messenger-2fd13",
  storageBucket: "messenger-2fd13.appspot.com",
  messagingSenderId: "815285692255",
  appId: "1:815285692255:web:0de9b66269789bceb138ea",
  measurementId: "G-Y8RY4RNPV6",
};
firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
