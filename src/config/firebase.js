import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
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
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEg6oKOF3aRKWQCvaWecr8ZKJUJHZ6vik",
  authDomain: "englishclub-91821.firebaseapp.com",
  projectId: "englishclub-91821",
  storageBucket: "englishclub-91821.firebasestorage.app",
  messagingSenderId: "746765230247",
  appId: "1:746765230247:web:31a47a657bccd641b6bb82",
  measurementId: "G-YJG7T1G59T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app; 