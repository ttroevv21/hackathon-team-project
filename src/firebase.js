import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEjN5Od-O7InnLxepMoIzVkklKoZtjkvA",
  authDomain: "kinopoisk-32a71.firebaseapp.com",
  projectId: "kinopoisk-32a71",
  storageBucket: "kinopoisk-32a71.appspot.com",
  messagingSenderId: "603724588328",
  appId: "1:603724588328:web:6c6b3dc2fa949e8c125c1d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
