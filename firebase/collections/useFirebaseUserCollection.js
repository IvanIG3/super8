import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import useAuth from '../auth/useAuth';
import useUserCollection from './useUserCollection';
import {
    addCollection,
    addItemToCollection as addItem,
    removeItemFromCollection as removeItem
} from '../../actions/collectionActions';
import { collectionListSelector } from '../../selectors/collectionSelectors';

const PER_CHUNK = 1000;

const saveCollection = async (list, user, collection) => {
    const userRef = await useUserCollection(user);
    for (let i = 0; i <= list.length; i += PER_CHUNK) {
        await userRef.collection(collection).doc(i.toString()).set({
            json: JSON.stringify(list.slice(i, i + PER_CHUNK))
        });
    }
};

const useFirebaseUserCollection = (collection) => {
    // Hooks
    const dispatch = useDispatch();
    const { user } = useAuth();
    const collectionList = useSelector(collectionListSelector(collection));

    // Connect to firestore
    useEffect(() => {
        if (user && !collectionList) {
            (async function () {
                try {
                    const userRef = await useUserCollection(user);
                    const snapshot = await userRef.collection(collection).get();
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
    }, [user, collection]);

    // Collection functions
    const addItemToCollection = async item => {
        dispatch(addItem(collection, item));
        saveCollection(
            [...collectionList, item],
            user,
            collection
        );
    };

    const removeItemToCollection = async id => {
        dispatch(removeItem(collection, id));
        saveCollection(
            collectionList.filter(i => i.id !== id),
            user,
            collection
        );
    };

    return [
        collectionList,
        addItemToCollection,
        removeItemToCollection
    ];
};

useFirebaseUserCollection.propTypes = {
    collection: PropTypes.string.isRequired
};

export default useFirebaseUserCollection;