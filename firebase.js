// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-jmOjgHRY33jP0gFqXdRwcJQnUDqZi2Y",
  authDomain: "paulaanaranjom-web-portfolio.firebaseapp.com",
  projectId: "paulaanaranjom-web-portfolio",
  storageBucket: "paulaanaranjom-web-portfolio.appspot.com",
  messagingSenderId: "1000134669761",
  appId: "1:1000134669761:web:494c278154e6ac1df32b40",
  measurementId: "G-XRWPT6M9YE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
