import firebase from "firebase/compat/app";

import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzepyqamywz5bM5ySCDrYz4DFsC_XKlvw",
  authDomain: "project-ytclone.firebaseapp.com",
  projectId: "project-ytclone",
  storageBucket: "project-ytclone.appspot.com",
  messagingSenderId: "898626378609",
  appId: "1:898626378609:web:bc8cdfb4f624e53429b4d0",
  measurementId: "G-PZYQPZ5BHZ",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
