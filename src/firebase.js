import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG947QCnHilrhNwnGifOHaEdIPfM-tr5Y",
  authDomain: "slack-app-677c8.firebaseapp.com",
  projectId: "slack-app-677c8",
  storageBucket: "slack-app-677c8.appspot.com",
  messagingSenderId: "133443709947",
  appId: "1:133443709947:web:a583238b1eb0181322795e",
  measurementId: "G-QRR20TBDZF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
