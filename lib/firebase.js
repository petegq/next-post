import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAqMfBCFafgo3JEZR5caBJH9ucVuo4zKLQ",
  authDomain: "tableos.firebaseapp.com",
  projectId: "tableos",
  storageBucket: "tableos.appspot.com",
  messagingSenderId: "49621292",
  appId: "1:49621292:web:678dd554048774d5aa6489",
  measurementId: "G-Z5D2MCP6J0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();