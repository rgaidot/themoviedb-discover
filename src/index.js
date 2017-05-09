/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RootContainer from './containers/RootContainer';
import rootStore from './store';
import rootReducer from './reducers';

const store = rootStore(rootReducer);

export default class ThemoviedbDiscover extends Component<void, void, void> {
    render() {
        return (
            <Provider {...{ store }}>
                <RootContainer />
            </Provider>
        );
    }
}
