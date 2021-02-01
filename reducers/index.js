import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import createListReducer from './listReducer';
import collectionReducer from './collectionReducer';
import movieReducer from './movieReducer';
import tvshowReducer from './tvshowReducer';
import actorReducer from './actorReducer';

export default combineReducers({
    index: indexReducer,
    movies: createListReducer('movies'),
    tvshows: createListReducer('tvshows'),
    actors: createListReducer('actors'),
    movie: movieReducer,
    tvshow: tvshowReducer,
    actor: actorReducer,
    mylist: createListReducer('mylist'),
    seen: createListReducer('seen'),
    favorites: createListReducer('favorites'),
    firestoreCollections: collectionReducer,
});