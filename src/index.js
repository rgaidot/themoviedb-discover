import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RootContainer from './containers/RootContainer';
import rootStore from './store';
import rootReducer from './reducers';

const store = rootStore(rootReducer);

type Props = {
    store: {}
};

export default class ThemoviedbDiscover extends Component<void, Props, void> {
    props: Props;

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Provider {...{ store }}>
                <RootContainer />
            </Provider>
        );
    }
}
