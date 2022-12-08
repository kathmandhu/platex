import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnzYjLYJGN-sIY4ULGFnRywlMLsMSXH4I",
  authDomain: "platex-webseries.firebaseapp.com",
  projectId: "platex-webseries",
  storageBucket: "platex-webseries.appspot.com",
  messagingSenderId: "1040708366179",
  appId: "1:1040708366179:web:2a22dc7a46945d464bad56",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
