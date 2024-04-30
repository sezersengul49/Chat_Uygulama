// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD-PKUTa159cMEG19QUvvaDN2_w2KUNK8",
  authDomain: "chatuygulama-19c73.firebaseapp.com",
  projectId: "chatuygulama-19c73",
  storageBucket: "chatuygulama-19c73.appspot.com",
  messagingSenderId: "408793088365",
  appId: "1:408793088365:web:e8cddc606708c4fed81a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase auth yapısının refaransını react uygulamasına alma
export const auth =getAuth(app);


//google saglayıcı kullandıldıgı için google kurulumu
export const provider = new GoogleAuthProvider();

//firebasedeki firestore un refaransını al

export const db =getFirestore(app);