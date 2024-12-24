import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJvdla7QUgIfdVx2eesAp15SMKBnkf5xw",
  authDomain: "my-bag-cc76f.firebaseapp.com",
  projectId: "my-bag-cc76f",
  storageBucket: "my-bag-cc76f.firebasestorage.app",
  messagingSenderId: "691861379404",
  appId: "1:691861379404:web:fce5e7bd0ab85ce7ccd7e9",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const dataBase = getFirestore(app);

export default app;