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
    INDEX_START_BEST_MOVIES,
    INDEX_END_BEST_MOVIES,
    INDEX_ERROR_BEST_MOVIES,
    INDEX_START_BEST_TVSHOWS,
    INDEX_END_BEST_TVSHOWS,
    INDEX_ERROR_BEST_TVSHOWS,
} from '../types';

const initialState = {
    trending: null,
    newMovies: null,
    newTvshows: null,
    bestMovies: null,
    bestTvshows: null,
    error: {
        trending: null,
        newMovies: null,
        newTvshows: null,
        bestMovies: null,
        bestTvshows: null,
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
        case INDEX_START_BEST_MOVIES:
            return {
                ...state,
                bestMovies: null
            };
        case INDEX_START_BEST_TVSHOWS:
            return {
                ...state,
                bestTvshows: null
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
        case INDEX_END_BEST_MOVIES:
            return {
                ...state,
                error: {
                    ...state.error,
                    bestMovies: null
                },
                bestMovies: action.payload
            };
        case INDEX_END_BEST_TVSHOWS:
            return {
                ...state,
                error: {
                    ...state.error,
                    bestTvshows: null
                },
                bestTvshows: action.payload
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
        case INDEX_ERROR_BEST_MOVIES:
            return {
                ...state,
                error: {
                    ...state.error,
                    bestMovies: action.payload
                }
            };
        case INDEX_ERROR_BEST_TVSHOWS:
            return {
                ...state,
                error: {
                    ...state.error,
                    bestTvshows: action.payload
                }
            };
        default:
            return state;
    }
};

export default indexReducer;