/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default function configureStore(
    rootReducer: ?() => void,
    initialState: ?() => void
) {
    const loggerMiddleware = createLogger();
    const middlewares = applyMiddleware(loggerMiddleware, thunkMiddleware);

    return createStore(rootReducer, initialState, compose(middlewares));
}
