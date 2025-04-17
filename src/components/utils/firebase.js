import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDstCJQaNrRzdmeeErcWLuVovBAVm79X0k",
    authDomain: "news-explorer-81449.firebaseapp.com",
    projectId: "news-explorer-81449",
    storageBucket: "news-explorer-81449.firebasestorage.app",
    messagingSenderId: "182355189399",
    appId: "1:182355189399:web:595013c7768ba62572d3d2"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
