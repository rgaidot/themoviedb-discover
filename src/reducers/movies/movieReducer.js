/* @flow */

import {
    MOVIE_GET_FETCH_SUCCESS,
    MOVIE_GET_FETCH_FAILURE
} from '../../actions/movies/movieActions';

import type { Action } from '../../flow/types/Action';

const initialState = {
    movie: {}
};

export default (state: any = initialState, action: Action) => {
    switch (action.type) {
        case MOVIE_GET_FETCH_SUCCESS:
            const { payload: { movie } }: { payload: { movie: any } } = action;

            return {
                ...state,
                movie
            };
        case MOVIE_GET_FETCH_FAILURE:
            const { payload: { error } }: { payload: { error: ?any } } = action;

            return {
                ...state,
                ...error
            };
        default:
            return state;
    }
};
