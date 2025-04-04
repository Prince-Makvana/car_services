// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKdJ4jwca4w_6XLx03LoRFExor4RGB3Jc",
  authDomain: "car-services-d895e.firebaseapp.com",
  projectId: "car-services-d895e",
  storageBucket: "car-services-d895e.firebasestorage.app",
  messagingSenderId: "296047326876",
  appId: "1:296047326876:web:634b9fa8f88d806ecf5f59"

  // apiKey: "AIzaSyACXylGS_p8G-wp_VCWL4SCPD5PYMpGJA0",
  // authDomain: "battery-service-cec1f.firebaseapp.com",
  // projectId: "battery-service-cec1f",
  // storageBucket: "battery-service-cec1f.firebasestorage.app",
  // messagingSenderId: "127629786623",
  // appId: "1:127629786623:web:df590028e15a3e01d47bca"


};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



const db = getFirestore(app);

export default db;