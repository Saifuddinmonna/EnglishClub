import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAcO_4fwLMlXw6RCgwsKSv5MnUjHm_O_C0",
//   authDomain: "rd-firebase-f866e.firebaseapp.com",
//   projectId: "rd-firebase-f866e",
//   storageBucket: "rd-firebase-f866e.firebasestorage.app",
//   messagingSenderId: "279886864994",
//   appId: "1:279886864994:web:e3111193ba20d23c54673b"
// };
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuEgqkEGAhbiLgkVswvJhqsGL57Qhvq9A",
  authDomain: "rd-firebase-f866e.firebaseapp.com",
  projectId: "rd-firebase-f866e",
  storageBucket: "rd-firebase-f866e.firebasestorage.app",
  messagingSenderId: "279886864994",
  appId: "1:279886864994:web:2ec978a6424a887f54673b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app; 