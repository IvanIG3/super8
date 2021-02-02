import {
    INDEX_START_TRENDING,
    INDEX_END_TRENDING,
    INDEX_ERROR_TRENDING,
    INDEX_START_NEW_MOVIES,
    INDEX_END_NEW_MOVIES,
    INDEX_ERROR_NEW_MOVIES,
    INDEX_START_NEW_TVSHOWS,
    INDEX_END_NEW_TVSHOWS,
    INDEX_ERROR_NEW_TVSHOWS,
} from '../types';

const initialState = {
    trending: null,
    newMovies: null,
    newTvshows: null,
    bestMovies: null,
    bestTvshwos: null,
    error: {
        trending: null,
        newMovies: null,
        newTvshows: null,
        bestMovies: null,
        bestTvshwos: null,
    },
};

const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case INDEX_START_TRENDING:
            return {
                ...state,
                trending: null
            };
        case INDEX_START_NEW_MOVIES:
            return {
                ...state,
                newMovies: null
            };
        case INDEX_START_NEW_TVSHOWS:
            return {
                ...state,
                newTvshows: null
            };
        case INDEX_END_TRENDING:
            return {
                ...state,
                error: {
                    ...state.error,
                    trending: null
                },
                trending: action.payload
            };
        case INDEX_END_NEW_MOVIES:
            return {
                ...state,
                error: {
                    ...state.error,
                    newMovies: null
                },
                newMovies: action.payload
            };
        case INDEX_END_NEW_TVSHOWS:
            return {
                ...state,
                error: {
                    ...state.error,
                    newTvshows: null
                },
                newTvshows: action.payload
            };
        case INDEX_ERROR_TRENDING:
            return {
                ...state,
                error: {
                    ...state.error,
                    trending: action.payload
                }
            };
        case INDEX_ERROR_NEW_MOVIES:
            return {
                ...state,
                error: {
                    ...state.error,
                    newMovies: action.payload
                }
            };
        case INDEX_ERROR_NEW_TVSHOWS:
            return {
                ...state,
                error: {
                    ...state.error,
                    newTvshows: action.payload
                }
            };
        default:
            return state;
    }
};

export default indexReducer;