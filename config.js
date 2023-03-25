import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBqMRHuPAUq59PGFdyYYhLgyOYtdmzBSME",
  authDomain: "eride-4494a.firebaseapp.com",
  projectId: "eride-4494a",
  storageBucket: "eride-4494a.appspot.com",
  messagingSenderId: "660637168757",
  appId: "1:660637168757:web:4656e2f258ea093716343c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
