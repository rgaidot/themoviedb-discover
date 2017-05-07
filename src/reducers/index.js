import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import moviesReducer from './movies/moviesReducer';

const rootReducer = combineReducers({
    routerReducer,
    moviesReducer
});

export default rootReducer;
