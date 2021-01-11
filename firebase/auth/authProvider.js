import { useState, useEffect } from 'react';
import authContext from './authContext';
import firebase from '../firebase';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const authProvider = ({ children }) => {

    const { t } = useTranslation();

    // User state
    const [user, setUser] = useState(null);

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
            toast.error(t(error.code), { className: 'bg-danger' });
        }
    };

    // Logout
    const logout = () => firebase.auth().signOut().then(() => setUser(false));

    return (
        <authContext.Provider
            value={{
                user,
                loginWithEmail,
                logout
            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default authProvider;