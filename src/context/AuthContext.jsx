/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, googleProvider } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({});

	function signUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, 'users', email), {
			savedFavorites: [],
			savedCart: [],
		});
	}

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		const onsubscribe = onAuthStateChanged(auth, (currenrUser) => {
			setUser(currenrUser);
		});
		return () => {
			onsubscribe();
		};
	});
	return (
		<AuthContext.Provider value={{ signUp, logIn, logOut, signInWithGoogle, user }}>
			{children}
		</AuthContext.Provider>
	);
}

export function UserAuth() {
	return useContext(AuthContext);
}
