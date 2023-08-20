  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCJyQClIpVWunimkvVYu2SUw55MBucXCYE",
    authDomain: "signup-firebase-aa501.firebaseapp.com",
    projectId: "signup-firebase-aa501",
    storageBucket: "signup-firebase-aa501.appspot.com",
    messagingSenderId: "370265765011",
    appId: "1:370265765011:web:80603cd26854f5e05dc966"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export {app}