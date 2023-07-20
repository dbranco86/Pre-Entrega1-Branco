import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5OT5dSfTEy1uRnLczAZMQwEND2y_vZXs",
  authDomain: "modaperucha-810a6.firebaseapp.com",
  projectId: "modaperucha-810a6",
  storageBucket: "modaperucha-810a6.appspot.com",
  messagingSenderId: "957603031382",
  appId: "1:957603031382:web:f5c73ba0a15e0783664ef7",
  measurementId: "G-2S4MFW54PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
