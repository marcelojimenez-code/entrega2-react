import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0RLrVvo0940Ye-TM2T7Ph8ZVeoPp1ryU",
  authDomain: "coder-ecommerce-de774.firebaseapp.com",
  projectId: "coder-ecommerce-de774",
  storageBucket: "coder-ecommerce-de774.appspot.com",
  messagingSenderId: "665790914578",
  appId: "1:665790914578:web:5c984522ab4fa7f74378cb",
  measurementId: "G-9PTX28RS1P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);