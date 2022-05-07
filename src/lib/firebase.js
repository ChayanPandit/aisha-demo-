import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnlMrQhsgQHITTobZAWd-nwg_RDRdlnqg",
  authDomain: "aisha-community.firebaseapp.com",
  projectId: "aisha-community",
  storageBucket: "aisha-community.appspot.com",
  messagingSenderId: "954126646799",
  appId: "1:954126646799:web:ec09671946c124bec4ad7a",
  measurementId: "G-ZNYZT99V96"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;