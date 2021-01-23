import { combineReducers } from 'redux';
import createListReducer from './listReducer';
import collectionReducer from './collectionReducer';
import movieReducer from './movieReducer';
import tvshowReducer from './tvshowReducer';

export default combineReducers({
    movies: createListReducer('movies'),
    tvshows: createListReducer('tvshows'),
    movie: movieReducer,
    tvshow: tvshowReducer,
    mylist: createListReducer('mylist'),
    seen: createListReducer('seen'),
    favorites: createListReducer('favorites'),
    firestoreCollections: collectionReducer,
});