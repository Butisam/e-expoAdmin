
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCJhxakH4T2MleiagweXrN9C2Tqdf_zjEQ",
  authDomain: "e-expo-fe70d.firebaseapp.com",
  projectId: "e-expo-fe70d",
  storageBucket: "e-expo-fe70d.appspot.com",
  messagingSenderId: "315963402710",
  appId: "1:315963402710:web:6330fdbe4b6f2fc3849c77",
  measurementId: "G-1JYXH2XJ8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const analytics = getAnalytics(app);

export {auth, db,storage};