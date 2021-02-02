import apiTmdb from '../api/tmdb';
import { toast } from 'react-toastify';
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

export const newTvshowsList = (language) => {
    return async dispatch => {
        dispatch({ type: INDEX_START_NEW_TVSHOWS });
        try {
            const list = await apiTmdb('/tv/on_the_air', { language });
            dispatch({
                type: INDEX_END_NEW_TVSHOWS,
                payload: list.results
            });
        } catch (error) {
            dispatch({
                type: INDEX_ERROR_NEW_TVSHOWS,
                payload: error.message
            });
            toast.error(error.message);
        }
    };
};