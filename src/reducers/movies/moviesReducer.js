/* @flow */

import {
    MOVIES_GET_FETCH_SUCCESS,
    MOVIES_GET_FETCH_FAILURE
} from '../../actions/movies/moviesActions';

const initialState = {
    moreResult: false,
    movies: [],
    nextPage: 0
};

export default (state: any = initialState, action) => {
    switch (action.type) {
        case MOVIES_GET_FETCH_SUCCESS:
            return {
                ...state,
                moreResult: action.payload.moreResult,
                nextPage: action.payload.nextPage,
                movies: [...state.movies, ...action.payload.results]
            };

        case MOVIES_GET_FETCH_FAILURE:
            return {
                ...state,
                ...action.payload.error
            };
        default:
            return state;
    }
};
