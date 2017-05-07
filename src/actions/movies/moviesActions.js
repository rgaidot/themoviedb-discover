/* @flow */

import config from '../../config';

export const MOVIES_GET_FETCH = 'MOVIES_SHOW_FETCH';
export const MOVIES_GET_FETCH_SUCCESS = `${MOVIES_GET_FETCH}_SUCCESS`;
export const MOVIES_GET_FETCH_FAILURE = `${MOVIES_GET_FETCH}_FAILURE`;

export function fetchMovies(page: number) {
    return async dispatch => {
        try {
            const path = `${config.api.url}/3/discover/movie?page=${page}&api_key=${config.api.key}&language=${config.api.lang}&sort_by=${config.api.initSortBy}&year=${config.api.initYear}`;
            const response = await fetch(path);
            const json = await response.json();

            const payload = {
                moreResult: page < json.total_pages,
                nextPage: page < json.total_pages ? page + 1 : page,
                results: json.results
            };

            dispatch({ payload, type: MOVIES_GET_FETCH_SUCCESS });
        } catch (error) {
            dispatch({ error, type: MOVIES_GET_FETCH_FAILURE });
        }
    };
}
