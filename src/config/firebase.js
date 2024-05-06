import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyCVf3kD2k5Tq2D3Yg29wbdIDKX9LKPgHcc",
	authDomain: "ilodera-shop.firebaseapp.com",
	projectId: "ilodera-shop",
	storageBucket: "ilodera-shop.appspot.com",
	messagingSenderId: "988079955041",
	appId: "1:988079955041:web:2b560024bab58e59b01e20",
	measurementId: "G-HQ7GD6ZDYH"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
