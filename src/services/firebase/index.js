import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  /*
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  */
 
  apiKey: "AIzaSyD0RLrVvo0940Ye-TM2T7Ph8ZVeoPp1ryU",
  authDomain: "coder-ecommerce-de774.firebaseapp.com",
  projectId: "coder-ecommerce-de774",
  storageBucket: "coder-ecommerce-de774.appspot.com",
  messagingSenderId: "665790914578",
  appId: "1:665790914578:web:5c984522ab4fa7f74378cb"
};

const app = initializeApp(firebaseConfig);
//firebase.firestore().settings({ experimentalForceLongPolling: true }); 
export const db = getFirestore(app);
