import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';
import { createContext } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, []);

    const userInfo = {
        createUser,
        loading,
        setLoading,
        logInUser,
        user,
        setUser,
        updateUser,
        logoutUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;