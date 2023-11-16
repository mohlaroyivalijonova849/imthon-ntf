// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7CkzM13mE4Az9w2BHXyCggpFq0TwAFys",
  authDomain: "reactjswithfirebase-fd7cb.firebaseapp.com",
  projectId: "reactjswithfirebase-fd7cb",
  storageBucket: "reactjswithfirebase-fd7cb.appspot.com",
  messagingSenderId: "619567892794",
  appId: "1:619567892794:web:ffec2899bd4102801a6803",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
