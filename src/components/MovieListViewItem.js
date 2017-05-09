/* @flow */

import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import type {
    StyleObj
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type movie = {
    id: number,
    overview: string,
    title: string,
    poster_path: string
};

type Props = {
    movie: movie,
    handleClick: (id: number) => void
};

type State = {
    width: number,
    height: number
};

class MovieListViewItem extends Component<void, Props, State> {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);

        const {
            width,
            height
        }: { width: number, height: number } = Dimensions.get('window');

        this.state = { width, height };
    }

    render() {
        const {
            props: { handleClick, movie: { id, overview, title, poster_path } },
            state: { width, height }
        }: {
            props: {
                handleClick: (id: number) => void,
                movie: movie
            },
            state: { width: number, height: number }
        } = this;

        const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`;

        return (
            <TouchableOpacity
                key={id}
                activeOpacity={0.7}
                onPress={() => handleClick(id)}>
                <Image
                    resizeMode="cover"
                    style={{ width, height }}
                    source={{ uri }}
                />
                <View style={styles.viewText}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <View style={styles.separator} />
                    <Text style={styles.overview}>{overview}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default MovieListViewItem;

const styles: StyleObj = StyleSheet.create({
    component: {
        flex: 1
    },
    viewText: {
        position: 'absolute',
        left: 0,
        bottom: 40,
        right: 0,
        opacity: 0.7,
        backgroundColor: 'transparent',
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000000'
    },
    overview: {
        fontSize: 12,
        color: 'white',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000000',
        paddingLeft: 15,
        paddingRight: 15
    },
    separator: {
        backgroundColor: 'white',
        height: 1,
        marginTop: 8,
        marginBottom: 8
    }
});
