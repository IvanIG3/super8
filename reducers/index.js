import { combineReducers } from 'redux';
import createListReducer from './listReducer';
import collectionReducer from './collectionReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    movies: createListReducer('movies'),
    tvshows: createListReducer('tvshows'),
    movie: movieReducer,
    firestoreCollections: collectionReducer,
});