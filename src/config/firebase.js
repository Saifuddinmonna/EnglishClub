import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';


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

// Set persistence to LOCAL for longer session (7 days)
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Firebase Auth persistence set to LOCAL');
  })
  .catch((error) => {
    console.error('Error setting Firebase Auth persistence:', error);
  });

// Custom token expiry configuration
auth.onAuthStateChanged((user) => {
  if (user) {
    // Force token refresh every 6 days (before 7-day expiry)
    setInterval(() => {
      user.getIdToken(true); // Force refresh
    }, 6 * 24 * 60 * 60 * 1000); // 6 days in milliseconds
  }
});

export default app; 