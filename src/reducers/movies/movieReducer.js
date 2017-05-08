/* @flow */

import {
    MOVIE_GET_FETCH_SUCCESS,
    MOVIE_GET_FETCH_FAILURE
} from '../../actions/movies/movieActions';

const initialState = {
    movie: {}
};

export default (state: any = initialState, action) => {
    switch (action.type) {
        case MOVIE_GET_FETCH_SUCCESS:
            return {
                ...state,
                movie: action.payload.movie
            };
        case MOVIE_GET_FETCH_FAILURE:
            return {
                ...state,
                ...action.payload.error
            };
        default:
            return state;
    }
};
