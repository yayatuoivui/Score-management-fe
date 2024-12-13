// scoreReducer.js

import {
    FETCH_SCORE_SUCCESS,
    CREATE_SCORE_SUCCESS,
    FETCH_SCORE_ERROR,
    CREATE_SCORE_ERROR,
} from './scoreAction';

const initialState = {
    score: [],
    error: null,
    loading: false,
};

const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SCORE_SUCCESS:
            return {
                ...state,
                score: action.payload,
                error: null,
            };
        case CREATE_SCORE_SUCCESS:
            return {
                ...state,
                score: action.payload,
                error: null,
            };
        case FETCH_SCORE_ERROR:
        case CREATE_SCORE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default scoreReducer;