/* @flow */

import config from '../../config';

export const MOVIES_GET_FETCH = 'MOVIES_SHOW_FETCH';
export const MOVIES_GET_FETCH_SUCCESS = `${MOVIES_GET_FETCH}_SUCCESS`;
export const MOVIES_GET_FETCH_FAILURE = `${MOVIES_GET_FETCH}_FAILURE`;

export function fetchMovies(page: number) {
    return async (dispatch: () => void) => {
        const {
            api: { url, key, lang, initSortBy, initYear }
        }: {
            api: {
                url: string,
                key: string,
                lang: string,
                initSortBy: string,
                initYear: number
            }
        } = config;

        try {
            const urlComplete: string = `${url}/3/discover/movie?page=${page}&api_key=${key}&language=${lang}&sort_by=${initSortBy}&year=${initYear}`;
            const response: any = await fetch(urlComplete);
            const json: any = await response.json();
            const {
                total_pages,
                results
            }: { total_pages: number, results: Array<any> } = json;

            const payload = {
                moreResult: page < total_pages,
                nextPage: page < total_pages ? page + 1 : page,
                results
            };

            dispatch({ payload, type: MOVIES_GET_FETCH_SUCCESS });
        } catch (error) {
            dispatch({ payload: error, type: MOVIES_GET_FETCH_FAILURE });
        }
    };
}
