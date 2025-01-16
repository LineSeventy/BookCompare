
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDzrynXxxQQFEM0BA1QI6YOxS5G0fRAkZg",

  authDomain: "book-compare-b8d1f.firebaseapp.com",

  projectId: "book-compare-b8d1f",

  storageBucket: "book-compare-b8d1f.firebasestorage.app",

  messagingSenderId: "463188370719",

  appId: "1:463188370719:web:94557e421a8c9c034efc2a",

  measurementId: "G-HFWTBQW5FW"

};






const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };
console.log(firebaseConfig); 
