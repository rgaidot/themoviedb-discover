/* @flow */

import React, { Component } from 'react';
import { ListView, View, StyleSheet } from 'react-native';

import MovieListViewItem from './MovieListViewItem';

type Props = {
    movies: Object<any>,
    onEndReached: () => void
};

type State = {
    ds: Object<any>,
    width: string,
    height: string
};

class MovieList extends Component<void, Props, State> {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = { ds };
    }

    onLayout(event: Event) {
        const { width, height } = event.nativeEvent.layout;

        this.setState({
            width: width,
            height: height
        });
    }

    render() {
        const { movies, onEndReached } = this.props;
        const { ds, width, height } = this.state;

        return (
            <View style={styles.component}>
                <ListView
                    enableEmptySections={true}
                    onEndReachedThreshold={10}
                    onEndReached={() => onEndReached()}
                    removeClippedSubviews={true}
                    dataSource={ds.cloneWithRows(movies)}
                    onLayout={event => this.onLayout(event)}
                    renderRow={movie => (
                        <MovieListViewItem
                            movie={movie}
                            height={height}
                            width={width}
                        />
                    )}
                />
            </View>
        );
    }
}

export default MovieList;

const styles = StyleSheet.create({
    component: {
        flex: 1
    }
});
