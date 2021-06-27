import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB9CBcVRzIM5rfhTBV8eJjIjnwKbTXZ9H4",
  authDomain: "antim-pag-f79aa.firebaseapp.com",
  projectId: "antim-pag-f79aa",
  storageBucket: "antim-pag-f79aa.appspot.com",
  messagingSenderId: "319414412401",
  appId: "1:319414412401:web:b5d0486b4a38faac3fe7d0",
  measurementId: "G-89J5B733RM",
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
