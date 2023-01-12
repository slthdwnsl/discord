import firebase from "./firebase";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC6X6GuObSpYzmn7pbML_Pug1Ro9fv-lP4",
    authDomain: "discord-35fec.firebaseapp.com",
    projectId: "discord-35fec",
    storageBucket: "discord-35fec.appspot.com",
    messagingSenderId: "477046909181",
    appId: "1:477046909181:web:6d30542ea552f8f702b694",
    measurementId: "G-VRFLRFG184"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;