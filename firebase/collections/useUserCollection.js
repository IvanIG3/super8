import firebase from '../firebase';

const useUserCollection = async user => {
    try {
        await import('firebase/firestore');
        return firebase.firestore().collection('users').doc(user.uid);
    } catch (error) {
        return null;
    }
};

export default useUserCollection;