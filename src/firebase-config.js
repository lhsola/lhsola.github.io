// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDHaoVL3mi4_PFRxbr91cQOJ8SvRkqNbLg",
//   authDomain: "wedding-invitation-5e3c5.firebaseapp.com",
//   projectId: "wedding-invitation-5e3c5",
//   storageBucket: "wedding-invitation-5e3c5.appspot.com",
//   messagingSenderId: "288046083919",
//   appId: "1:288046083919:web:7621d047d94c49d8059f3a",
//   measurementId: "G-KP677M2TTQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlRx_891JBZT998dIWQJnub57DWlNfhbw",
  authDomain: "mhs260425.firebaseapp.com",
  projectId: "mhs260425",
  storageBucket: "mhs260425.firebasestorage.app",
  messagingSenderId: "8871578312",
  appId: "1:8871578312:web:94f5cdc4c3b9d94acd73fd",
  measurementId: "G-ML8EL3V8XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;