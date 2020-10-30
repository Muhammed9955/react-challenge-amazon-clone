import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBA_sy2TP89wltmyTWSFMt0lveY7OLoWg",
  authDomain: "clone-7e36b.firebaseapp.com",
  databaseURL: "https://clone-7e36b.firebaseio.com",
  projectId: "clone-7e36b",
  storageBucket: "clone-7e36b.appspot.com",
  messagingSenderId: "625296207217",
  appId: "1:625296207217:web:58761d5d067d732fb71ad0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };