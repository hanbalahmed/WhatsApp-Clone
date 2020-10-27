import firebase from "firebase";
import provider from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmY0yY2hF4EqeRThseQUE2yXwdtHuyvNc",
  authDomain: "whatsapp-clone-hanbala.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-hanbala.firebaseio.com",
  projectId: "whatsapp-clone-hanbala",
  storageBucket: "whatsapp-clone-hanbala.appspot.com",
  messagingSenderId: "48553946549",
  appId: "1:48553946549:web:1ef4aee71bdeb44e59fdfc",
  measurementId: "G-P00S02WS32",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
