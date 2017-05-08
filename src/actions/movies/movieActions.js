/* @flow */

import config from '../../config';

export const MOVIE_GET_FETCH = 'MOVIE_SHOW_FETCH';
export const MOVIE_GET_FETCH_SUCCESS = `${MOVIE_GET_FETCH}_SUCCESS`;
export const MOVIE_GET_FETCH_FAILURE = `${MOVIE_GET_FETCH}_FAILURE`;

export function fetchMovie(id: number) {
    return async dispatch => {
        try {
            const path = `${config.api.url}/3/movie/${id}?api_key=${config.api.key}&language=${config.api.lang}`;
            const response = await fetch(path);
            const json = await response.json();

            const payload = {
                movie: json
            };

            dispatch({ payload, type: MOVIE_GET_FETCH_SUCCESS });
        } catch (error) {
            dispatch({ error, type: MOVIE_GET_FETCH_FAILURE });
        }
    };
}
