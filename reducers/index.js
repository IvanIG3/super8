import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import createListReducer from './listReducer';

export default combineReducers({
    language: languageReducer,
    movies: createListReducer('movies'),
    tvShows: createListReducer('tvShows'),
});