import {
    FIRESTORE_ADD_COLLECTION,
    FIRESTORE_ADD_ITEM_TO_COLLECTION,
    FIRESTORE_REMOVE_ITEM_FROM_COLLECTION,
    FIRESTORE_REMOVE_COLLECTIONS,
} from '../types';

export default function actions(collection) {
    
    const addCollection = data => {
        return dispatch => dispatch({
            type: FIRESTORE_ADD_COLLECTION,
            payload: { collection, data }
        });
    };

    const addItem = item => {
        return dispatch => dispatch({
            type: FIRESTORE_ADD_ITEM_TO_COLLECTION,
            payload: { collection, item }
        });
    };

    const removeItem = id => {
        return dispatch => dispatch({
            type: FIRESTORE_REMOVE_ITEM_FROM_COLLECTION,
            payload: { collection, id }
        });
    };

    return {
        addCollection,
        addItem,
        removeItem,
    };
};

export function removeCollections() {
    return dispatch => dispatch({
        type: FIRESTORE_REMOVE_COLLECTIONS
    });
};