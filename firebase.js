// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbG_H2r3KoCC57TDH7NcCcoqfooSIB_SY",
  authDomain: "game-89b21.firebaseapp.com",
  projectId: "game-89b21",
  storageBucket: "game-89b21.appspot.com",
  messagingSenderId: "1077391492426",
  appId: "1:1077391492426:web:4ce87e36974124192fadb3",
  measurementId: "G-2FS40L2XFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
const analytics = getAnalytics(app);