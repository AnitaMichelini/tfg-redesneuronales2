// src/models/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASnFWsmzcM-sG1v76SazfL3mQRdylpUiU",
    authDomain: "auth-app-d9bf3.firebaseapp.com",
    databaseURL: "https://auth-app-d9bf3.firebaseio.com",
    projectId: "auth-app-d9bf3",
    storageBucket: "auth-app-d9bf3.appspot.com",
    messagingSenderId: "590851912293",
    appId: "1:590851912293:web:624b275a6c134970ce0c8c"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

