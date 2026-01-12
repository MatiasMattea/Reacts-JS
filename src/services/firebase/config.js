import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDKL2Ej29wL-6ACh9yjEU8kc409FIXrRDg",
  authDomain: "tienda-bomberos.firebaseapp.com",
  projectId: "tienda-bomberos",
  storageBucket: "tienda-bomberos.firebasestorage.app",
  messagingSenderId: "10447412640",
  appId: "1:10447412640:web:6a61201c718b35e38018c5"
};

console.log("✅ Firebase configurado con:", firebaseConfig.projectId);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);