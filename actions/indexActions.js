import apiTmdb from '../api/tmdb';
import { toast } from 'react-toastify';
import {
    INDEX_START_TRENDING,
    INDEX_END_TRENDING,
    INDEX_ERROR_TRENDING,
    INDEX_START_NEW_MOVIES,
    INDEX_END_NEW_MOVIES,
    INDEX_ERROR_NEW_MOVIES,
} from '../types';

export const trendingList = (language) => {
    return async dispatch => {
        dispatch({ type: INDEX_START_TRENDING });
        try {
            const list = await apiTmdb('/trending/all/week', { language });
            dispatch({
                type: INDEX_END_TRENDING,
                payload: list.results
            });
        } catch (error) {
            dispatch({
                type: INDEX_ERROR_TRENDING,
                payload: error.message
            });
            toast.error(error.message);
        }
    };
};

export const newMoviesList = (language) => {
    return async dispatch => {
        dispatch({ type: INDEX_START_NEW_MOVIES });
        try {
            const list = await apiTmdb('/movie/now_playing', { language });
            dispatch({
                type: INDEX_END_NEW_MOVIES,
                payload: list.results
            });
        } catch (error) {
            dispatch({
                type: INDEX_ERROR_NEW_MOVIES,
                payload: error.message
            });
            toast.error(error.message);
        }
    };
};