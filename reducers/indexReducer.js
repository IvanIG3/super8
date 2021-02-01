import {
    INDEX_START_TRENDING,
    INDEX_END_TRENDING,
    INDEX_ERROR_TRENDING,
} from '../types';

const initialState = {
    trending: null,
    latestMovies: null,
    latestTvshows: null,
    bestMovies: null,
    bestTvshwos: null,
    error: null,
};

const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case INDEX_START_TRENDING:
            return {
                ...state,
                trending: null
            };
        case INDEX_END_TRENDING:
            return {
                ...state,
                error: null,
                trending: action.payload
            };
        case INDEX_ERROR_TRENDING:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default indexReducer;