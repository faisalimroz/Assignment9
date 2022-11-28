// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP5bJS0erkqXNuZ9rg183S3feXal8lOS4",
  authDomain: "assignment-9-f059a.firebaseapp.com",
  projectId: "assignment-9-f059a",
  storageBucket: "assignment-9-f059a.appspot.com",
  messagingSenderId: "330120800154",
  appId: "1:330120800154:web:e646cff1cd51b9849b7c23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;