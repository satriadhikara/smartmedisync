// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLmWjJ_NdB9jYuO0KuskUeoKmNW6O1AQ0",
  authDomain: "smartmedisync.firebaseapp.com",
  projectId: "smartmedisync",
  storageBucket: "smartmedisync.appspot.com",
  messagingSenderId: "647497924715",
  appId: "1:647497924715:web:a9cbf98fabaa553079f12e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
