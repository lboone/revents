import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzMcgRKXxy9urm5shAEawOpo4vebyTXNs",
  authDomain: "revents-7ff6a.firebaseapp.com",
  databaseURL: "https://revents-7ff6a.firebaseio.com",
  projectId: "revents-7ff6a",
  storageBucket: "revents-7ff6a.appspot.com",
  messagingSenderId: "251080360232"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

//const firestore = firebase.firestore();
// const settings = {
//   timestampsInSnapshots: true
// };
// firestore.settings(settings);
export default firebase;
