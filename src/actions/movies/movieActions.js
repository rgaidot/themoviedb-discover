/* @flow */

import config from '../../config';

export const MOVIE_GET_FETCH = 'MOVIE_SHOW_FETCH';
export const MOVIE_GET_FETCH_SUCCESS = `${MOVIE_GET_FETCH}_SUCCESS`;
export const MOVIE_GET_FETCH_FAILURE = `${MOVIE_GET_FETCH}_FAILURE`;

export function fetchMovie(id: number) {
    return async (dispatch: () => void) => {
        const {
            api: { url, key, lang }
        }: { api: { url: string, key: string, lang: string } } = config;

        try {
            const urlComplete: string = `${url}/3/movie/${id}?api_key=${key}&language=${lang}`;
            const response: any = await fetch(urlComplete);
            const movie: any = await response.json();

            const payload = {
                movie
            };

            dispatch({ payload, type: MOVIE_GET_FETCH_SUCCESS });
        } catch (error) {
            dispatch({ payload: error, type: MOVIE_GET_FETCH_FAILURE });
        }
    };
}
