// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArH0CfnPOStB69s7wof5H--MiBN-PoZPo",
  authDomain: "form-submission-2e84c.firebaseapp.com",
  projectId: "form-submission-2e84c",
  storageBucket: "form-submission-2e84c.appspot.com",
  messagingSenderId: "483128968487",
  appId: "1:483128968487:web:f4332fd67b8dd2653d5502",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
