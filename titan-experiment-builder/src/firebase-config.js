import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyC4sc4UQuCCtHwCjLdpijeEXgiUo0HBQd8',
  authDomain: 'titan-space-co.firebaseapp.com',
  projectId: 'titan-space-co',
  storageBucket: 'titan-space-co.appspot.com',
  messagingSenderId: '241802363569',
  appId: '1:241802363569:web:1b14c922eff036d3f0d890',
  measurementId: 'G-YLE0TZVFEG'
}

initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

export { provider }
