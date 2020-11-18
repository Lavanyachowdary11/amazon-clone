import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmcg674nO33ekVLWYhuxKJHZBwn3ETbAk",
  authDomain: "clone-ffdd7.firebaseapp.com",
  databaseURL: "https://clone-ffdd7.firebaseio.com",
  projectId: "clone-ffdd7",
  storageBucket: "clone-ffdd7.appspot.com",
  messagingSenderId: "405807222492",
  appId: "1:405807222492:web:e0caaaa8711aa58704ae19",
  measurementId: "G-HG3WLHGX5C"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};
