import { combineReducers } from 'redux';
import createListReducer from './listReducer';
import collectionReducer from './collectionReducer';

export default combineReducers({
    movies: createListReducer('movies'),
    tvshows: createListReducer('tvshows'),
    firestoreCollections: collectionReducer,
});