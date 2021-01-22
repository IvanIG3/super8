import { useState, useEffect } from 'react';
import authContext from './authContext';
import firebase from '../firebase';

const authProvider = ({ children }) => {

    // User state
    const [user, setUser] = useState(0);

    // Keep track of user state
    useEffect(async () => {
        await import('firebase/auth');
        const unsuscribe = firebase.auth().onAuthStateChanged(user => setUser(user));
        return () => unsuscribe();
    }, []);

    // Login
    const loginWithEmail = async (email, password) => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            setUser(response.user);
        } catch (error) {
            return error.code;
        }
    };

    // Logout
    const logout = () => firebase.auth().signOut().then(() => setUser(false));

    // Create user
    const createUser = async (name, email, password) => {
        try {
            const userInstance = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await userInstance.user.updateProfile({ displayName: name });
            setUser(userInstance.user);
        } catch (error) {
            return error.code;
        }
    };

    return (
        <authContext.Provider
            value={{
                user,
                loginWithEmail,
                logout,
                createUser
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default authProvider;