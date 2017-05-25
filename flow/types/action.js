/* @flow */

type MoviesActions = {
    type: string,
    payload: {
        moreResult: boolean,
        nextPage: number,
        results: Array<any>,
        error: ?any
    }
};

type MovieAction = {
    type: string,
    payload: {
        movie: any,
        error: ?any
    }
};

export type Action = MoviesActions | MovieAction;
