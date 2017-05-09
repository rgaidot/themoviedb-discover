/* @flow */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import moviesReducer from './movies/moviesReducer';
import movieReducer from './movies/movieReducer';

const rootReducer = combineReducers({
    routerReducer,
    moviesReducer,
    movieReducer
});

export default rootReducer;
