import firebase from "firebase/app";
import "firebase/auth";
// console.log(import.meta.env.VITE_API_KEY);

// const {
//   VITE_API_KEY: API_KEY,
//   VITE_SENDER_ID: SENDER_ID,
//  VITE_APP_ID: APP_ID,
//   VITE_MEASUREMENT_ID: MEASUREMENT_ID,
// } = import.meta.env;

// console.log(API_KEY, SENDER_ID, MEASUREMENT_ID);

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBr4sUTtUi5Th3l6HiKiUosP4Gt6u1RbLI",
    authDomain: "chat-ddc80.firebaseapp.com",
    projectId: "chat-ddc80",
    storageBucket: "chat-ddc80.appspot.com",
    messagingSenderId: "486150724952",
    appId: "1:486150724952:web:a1ef59197d74efdb5e992d",
    measurementId: "G-C545Q5FBW0",
  })
  .auth();
