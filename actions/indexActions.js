import apiTmdb from '../api/tmdb';
import { toast } from 'react-toastify';
import {
    INDEX_START_TRENDING,
    INDEX_END_TRENDING,
    INDEX_ERROR_TRENDING,
} from '../types';

export const trendingList = (language) => {
    return async dispatch => {
        dispatch({ type: INDEX_START_TRENDING });
        try {
            const list = await apiTmdb('/trending/all/week', { language });
            dispatch({
                type: INDEX_END_TRENDING,
                payload: list
            });
        } catch (error) {
            dispatch({
                type: INDEX_ERROR_TRENDING,
                reducer,
                payload: error.message
            });
            toast.error(error.message);
        }
    };
};