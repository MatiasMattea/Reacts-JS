import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBunP4iueBiTrLLhSDukpMkjYPfqxhsQOE",
  authDomain: "ecommerce-matteamatias.firebaseapp.com",
  projectId: "ecommerce-matteamatias",
  storageBucket: "ecommerce-matteamatias.firebasestorage.app",
  messagingSenderId: "360441882612",
  appId: "1:360441882612:web:e1f0c0f277eaa4482b3ba1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };