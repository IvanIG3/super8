import { combineReducers } from 'redux';
import createListReducer from './listReducer';
import collectionReducer from './collectionReducer';
import movieReducer from './movieReducer';
import tvshowReducer from './tvshowReducer';
import actorReducer from './actorReducer';

export default combineReducers({
    movies: createListReducer('movies'),
    tvshows: createListReducer('tvshows'),
    movie: movieReducer,
    tvshow: tvshowReducer,
    actor: actorReducer,
    mylist: createListReducer('mylist'),
    seen: createListReducer('seen'),
    favorites: createListReducer('favorites'),
    firestoreCollections: collectionReducer,
});