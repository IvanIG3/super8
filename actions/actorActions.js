import apiTmdb from '../api/tmdb';
import { toast } from 'react-toastify';
import {
    ACTOR_START_FETCHING_INFO,
    ACTOR_END_FETCHING_INFO,
    ACTOR_ERROR_FETCHING_INFO,
    ACTOR_CLEAR_STATE,
} from '../types';

export const getActor = (id, language) => {
    return async dispatch => {
        dispatch({ type: ACTOR_START_FETCHING_INFO });
        try {
            const person = await apiTmdb(`/person/${id}`, { language });
            dispatch({
                type: ACTOR_END_FETCHING_INFO,
                payload: person
            });
        } catch (error) {
            dispatch({
                type: ACTOR_ERROR_FETCHING_INFO,
                payload: error.response.data.msg
            });
            toast.error(error.response.data.msg);
        }
    };
};

export const clearState = () => {
    return dispatch => dispatch({ type: ACTOR_CLEAR_STATE });
};