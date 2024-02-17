import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtYDsGH1V_Fci85XkWV1yO17yZx5SCJaE",
  authDomain: "generator-f.firebaseapp.com",
  projectId: "generator-f",
  storageBucket: "generator-f.appspot.com",
  messagingSenderId: "288257228483",
  appId: "1:288257228483:web:ed1b7cb4eabbe5e7572c76",
  measurementId: "G-5WR69S39TY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);