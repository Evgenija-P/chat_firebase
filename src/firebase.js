// import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr4sUTtUi5Th3l6HiKiUosP4Gt6u1RbLI",
  authDomain: "chat-ddc80.firebaseapp.com",
  projectId: "chat-ddc80",
  storageBucket: "chat-ddc80.appspot.com",
  messagingSenderId: "486150724952",
  appId: "1:486150724952:web:a1ef59197d74efdb5e992d",
  measurementId: "G-C545Q5FBW0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
