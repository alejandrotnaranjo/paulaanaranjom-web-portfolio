// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsQqJjtyiSDi0EY5u1ZMCJX-nDd5sI_bw",
  authDomain: "paulaanaranjom-portfolio.firebaseapp.com",
  projectId: "paulaanaranjom-portfolio",
  storageBucket: "paulaanaranjom-portfolio.appspot.com",
  messagingSenderId: "976562981714",
  appId: "1:976562981714:web:48e9b20c3d7344501c888b",
  measurementId: "G-V10X27EL23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
