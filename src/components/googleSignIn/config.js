import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcre-Q8HekQun0os1_6-MKhVstfkWPX84",
  authDomain: "career-path-ai.firebaseapp.com",
  projectId: "career-path-ai",
  storageBucket: "career-path-ai.appspot.com",
  messagingSenderId: "935446450178",
  appId: "1:935446450178:web:6f2f13b188c777b20a571b",
  measurementId: "G-XJF2WMRS4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
