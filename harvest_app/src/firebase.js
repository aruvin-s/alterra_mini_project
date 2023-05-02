import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKWl371-bm3D4hJ5nZ2cAz-PI_6vl0XWI",
  authDomain: "harvest-cf668.firebaseapp.com",
  projectId: "harvest-cf668",
  storageBucket: "harvest-cf668.appspot.com",
  messagingSenderId: "103222521432",
  appId: "1:103222521432:web:d501248feae046921f242d",
  measurementId: "G-B9H3V4DNY8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);