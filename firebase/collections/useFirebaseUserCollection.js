import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import useUpdate from '../../hooks/useUpdate';
import useAuth from '../auth/useAuth';
import firebase from '../firebase';
import {
    addCollection,
    addItemToCollection as addItem,
    removeItemFromCollection as removeItem
} from '../../actions/collectionActions';

const PER_CHUNK = 1000;

const useFirebaseUserCollection = (collection) => {
    // Hooks
    const dispatch = useDispatch();
    const { user } = useAuth();

    // Collection state
    const collectionState = useSelector(state => state.firestoreCollections[collection]);

    const getCollectionRef = async () => {
        await import('firebase/firestore');
        const userRef = await firebase.firestore().collection('users').doc(user.uid);
        const collectionRef = await userRef.collection(collection);
        return collectionRef;
    };

    const saveCollection = async () => {
        const collectionRef = await getCollectionRef();
        for (let i = 0; collectionState && i < collectionState.length; i += PER_CHUNK) {
            const docRef = await collectionRef.doc(i.toString());
            await docRef.set({
                json: JSON.stringify(collectionState.slice(i, i + PER_CHUNK))
            });
        }
    };

    // Connect to firestore
    useEffect(() => {
        if (user && !collectionState) {
            (async function () {
                try {
                    const collectionRef = await getCollectionRef();
                    const snapshot = await collectionRef.get();
                    const data = snapshot.docs.map(doc => {
                        const strData = Object.values(doc.data());
                        return JSON.parse(strData);
                    });
                    dispatch(addCollection(collection, data.flat()));
                } catch (error) {
                    toast.error(error.message, { className: 'bg-danger' });
                }
            })();
        }
    }, [user]);

    // Save changes made into the collection
    useUpdate(() => collectionState && saveCollection(), [collectionState]);

    // Collection functions
    const addItemToCollection = async (item) => dispatch(addItem(collection, item));
    const removeItemToCollection = async (id) => dispatch(removeItem(collection, id));

    return [
        collectionState,
        addItemToCollection,
        removeItemToCollection
    ];
};

useFirebaseUserCollection.propTypes = {
    collection: PropTypes.string.isRequired
};

export default useFirebaseUserCollection;