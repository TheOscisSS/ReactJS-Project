import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH620Qgfvhk7zX2DuCI3vdSggrJ3VUWFA",
  authDomain: "serveypenguin.firebaseapp.com",
  databaseURL: "https://serveypenguin.firebaseio.com",
  projectId: "serveypenguin",
  storageBucket: "serveypenguin.appspot.com",
  messagingSenderId: "866653688492",
  appId: "1:866653688492:web:391bff5efb26deed2ec509",
  measurementId: "G-EM8NPF6EKX"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
