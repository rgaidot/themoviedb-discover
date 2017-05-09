/* @flow */

import {
    MOVIES_GET_FETCH_SUCCESS,
    MOVIES_GET_FETCH_FAILURE
} from '../../actions/movies/moviesActions';

import type { Action } from '../../flow/types/Action';

const initialState = {
    moreResult: false,
    movies: [],
    nextPage: 0
};

export default (state: any = initialState, action: Action) => {
    switch (action.type) {
        case MOVIES_GET_FETCH_SUCCESS:
            const {
                payload: { moreResult, nextPage, results }
            }: {
                payload: {
                    moreResult: boolean,
                    nextPage: number,
                    results: Array<any>
                }
            } = action;

            return {
                ...state,
                moreResult,
                nextPage,
                movies: [...state.movies, ...results]
            };
        case MOVIES_GET_FETCH_FAILURE:
            const { payload: { error } }: { payload: { error: any } } = action;

            return {
                ...state,
                ...error
            };
        default:
            return state;
    }
};
