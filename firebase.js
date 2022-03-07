import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqbYKSKgKh4_ej0DH98y_BM3RrqDkSWMw",
  authDomain: "facebook-clone-9c937.firebaseapp.com",
  projectId: "facebook-clone-9c937",
  storageBucket: "facebook-clone-9c937.appspot.com",
  messagingSenderId: "537986067111",
  appId: "1:537986067111:web:c5870c4dec58550f600982",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
