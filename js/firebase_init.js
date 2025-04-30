// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy2qLHVfB6nXPhc8DdIyoj7UWNVrSgD-Y",
  authDomain: "fantasyfirst-9cc36.firebaseapp.com",
  projectId: "fantasyfirst-9cc36",
  storageBucket: "fantasyfirst-9cc36.firebasestorage.app",
  messagingSenderId: "591603968720",
  appId: "1:591603968720:web:93286e1a7d53fcea9d8cd5",
  measurementId: "G-HTVHX3EL9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);