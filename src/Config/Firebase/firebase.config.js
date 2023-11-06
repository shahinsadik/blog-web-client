// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoRtNhVOODqOpe-mQ_SzLzmZlnzd2xBpo",
  authDomain: "web-blog-96ed9.firebaseapp.com",
  projectId: "web-blog-96ed9",
  storageBucket: "web-blog-96ed9.appspot.com",
  messagingSenderId: "947744727874",
  appId: "1:947744727874:web:bde5df7a17ef52c7c75edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);