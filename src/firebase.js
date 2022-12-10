// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRPo1-CcGQGpzUiOeg9YtfoKV4OFGhtvs",
  authDomain: "todo-app-79721.firebaseapp.com",
  projectId: "todo-app-79721",
  storageBucket: "todo-app-79721.appspot.com",
  messagingSenderId: "549161080986",
  appId: "1:549161080986:web:6b5787a5d37ed025696723",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
