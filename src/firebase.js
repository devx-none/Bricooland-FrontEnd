// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBungE0olrbglftG7DCMzcHCaCubF8_bA",
  authDomain: "bricooland-65f6d.firebaseapp.com",
  projectId: "bricooland-65f6d",
  storageBucket: "bricooland-65f6d.appspot.com",
  messagingSenderId: "667581690752",
  appId: "1:667581690752:web:8d77dd406fdf7a40e94765",
  measurementId: "G-9MFPGBPXK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
