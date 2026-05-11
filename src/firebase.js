// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9t4KYj1IIoETGxaYxRcCjbXPf07Z7Iyg",
  authDomain: "eduai-5d594.firebaseapp.com",
  projectId: "eduai-5d594",
  storageBucket: "eduai-5d594.firebasestorage.app",
  messagingSenderId: "239638054705",
  appId: "1:239638054705:web:f2808ab0c5c93d3e8c9210",
  measurementId: "G-4SW5ZKJGNE"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
