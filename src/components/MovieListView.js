/* @flow */

import React, { Component } from 'react';
import { ListView, View, StyleSheet } from 'react-native';

import MovieListViewItem from './MovieListViewItem';

import type {
    StyleObj
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import type { Movie } from '../../flow/types/movie';

type Props = {
    movies: Array<Movie>,
    showMovieDetails: (id: number) => void,
    onEndReached: () => void
};

type State = {
    ds: Array<any>
};

class MovieListView extends Component<void, Props, State> {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);

        const ds: Array<any> = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = { ds };
    }

    render() {
        const {
            props: { showMovieDetails, movies, onEndReached },
            state: { ds }
        } = this;

        return (
            <View style={styles.component}>
                <ListView
                    enableEmptySections={true}
                    onEndReachedThreshold={10}
                    onEndReached={() => onEndReached()}
                    removeClippedSubviews={true}
                    dataSource={ds.cloneWithRows(movies)}
                    renderRow={(movie: ?any) => (
                        <MovieListViewItem
                            movie={movie}
                            handleClick={id => showMovieDetails(id)}
                        />
                    )}
                />
            </View>
        );
    }
}

export default MovieListView;

const styles: StyleObj = StyleSheet.create({
    component: {
        flex: 1
    }
});
