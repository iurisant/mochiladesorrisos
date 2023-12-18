import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0_xnq-4_4U_DNYbysknpf9A8pAL0gdso",
  authDomain: "mochiladesorrisos.firebaseapp.com",
  projectId: "mochiladesorrisos",
  storageBucket: "mochiladesorrisos.appspot.com",
  messagingSenderId: "179834414684",
  appId: "1:179834414684:web:230237f4af0d7ed9112899",
  measurementId: "G-BWK4PY9RGG"
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);