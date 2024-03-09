import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWP-cBsJA_ciXK1M45YbSFjsxut2KIoGs",
  authDomain: "test-9d41c.firebaseapp.com",
  projectId: "test-9d41c",
  storageBucket: "test-9d41c.appspot.com",
  messagingSenderId: "903643458026",
  appId: "1:903643458026:web:6924f6a697096cfcb3aa93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export  {app,auth,firebaseConfig,db};