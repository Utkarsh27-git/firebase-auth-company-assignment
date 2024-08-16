// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBw9jTvhJav7nTaWlY3b0Vb28AoHRyGYA",
  authDomain: "fir-auth-27.firebaseapp.com",
  projectId: "fir-auth-27",
  storageBucket: "fir-auth-27.appspot.com",
  messagingSenderId: "524426809484",
  appId: "1:524426809484:web:bd44427b167032f7226ba9",
  measurementId: "G-DJJTV8DMQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
