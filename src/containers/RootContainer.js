/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MoviesContainer from './movies/MoviesContainer';

import type {
    StyleObj
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export default class RootContainer extends Component<void, void, void> {
    render() {
        return (
            <View style={styles.container}>
                <MoviesContainer />
            </View>
        );
    }
}

const styles: StyleObj = StyleSheet.create({
    container: {
        flex: 1
    }
});
