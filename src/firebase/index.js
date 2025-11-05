// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web uygulamanızın Firebase yapılandırması
const firebaseConfig = { 
  apiKey : "AIzaSyCuKTCvnuUahBaOxlIQZqfkazKSNbgn0sU" , 
  authDomain : "chat-app-649bf.firebaseapp.com" , 
  projectId: "chat-app-649bf" , 
  storageBucket : "chat-app-649bf.firebasestorage.app" , 
  messagingSenderId: "551058497099" , 
  appId: "1:551058497099:web:89d4bf1f21b8c8fc0b37ce" 
};

// Firebase'ı Başlat
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();


// firestore servisinin referansını al
export const db = getFirestore(app);