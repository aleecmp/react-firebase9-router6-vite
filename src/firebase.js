// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0ySAhUXrail2Q0gWdkTVx96ap-_1VFWQ",
  authDomain: "react-2022-8c72d.firebaseapp.com",
  projectId: "react-2022-8c72d",
  storageBucket: "react-2022-8c72d.appspot.com",
  messagingSenderId: "591502709731",
  appId: "1:591502709731:web:654682f297bbd4118786d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
