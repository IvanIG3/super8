import {
    ACTOR_START_FETCHING_INFO,
    ACTOR_END_FETCHING_INFO,
    ACTOR_ERROR_FETCHING_INFO,
    ACTOR_CLEAR_STATE,
} from '../types';

const initialState = {
    actor: null,
    error: null,
};

const actorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTOR_START_FETCHING_INFO:
            return {
                ...state,
                actor: null
            }
        case ACTOR_END_FETCHING_INFO:
            return {
                ...state,
                error: null,
                actor: action.payload
            }
        case ACTOR_ERROR_FETCHING_INFO:
            return {
                ...state,
                error: action.payload
            }
        case ACTOR_CLEAR_STATE:
            return initialState;
        default:
            return state;
    }
};

export default actorReducer;