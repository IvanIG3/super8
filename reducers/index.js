import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import createListReducer from './listReducer';
import collectionReducer from './collectionReducer';

export default combineReducers({
    language: languageReducer,
    movies: createListReducer('movies'),
    tvShows: createListReducer('tvShows'),
    firestoreCollections: collectionReducer,
});