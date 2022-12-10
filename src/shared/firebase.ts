import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO10PW9n1uQpnJK5ZVkOh3p68ebrj6GDU",
  authDomain: "platex-web.firebaseapp.com",
  projectId: "platex-web",
  storageBucket: "platex-web.appspot.com",
  messagingSenderId: "86430679528",
  appId: "1:86430679528:web:25976e21f3b178f758645d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
