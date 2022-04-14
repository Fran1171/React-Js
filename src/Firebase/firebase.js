import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0oid5wWiO0OAs46uV2NeFjXAR28J23Fs",
  authDomain: "coderhouse-ecommerce-489ce.firebaseapp.com",
  projectId: "coderhouse-ecommerce-489ce",
  storageBucket: "coderhouse-ecommerce-489ce.appspot.com",
  messagingSenderId: "43805418401",
  appId: "1:43805418401:web:2db191c63bf39bbf69a1e0",
  measurementId: "G-KN6MDWRPEZ",
};

const app = initializeApp(firebaseConfig);

// Obtiene la conexion a bd
export const db = getFirestore(app);
