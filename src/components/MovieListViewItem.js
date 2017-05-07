/* @flow */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    movie: Object<any>,
    width: string,
    height: string
};

class MovieListViewItem extends Component<void, Props, void> {
    props: Props;

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { movie, height, width } = this.props;
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

        return (
            <TouchableOpacity activeOpacity={0.7}>
                <Image
                    resizeMode="cover"
                    style={{ width, height }}
                    source={{ uri }}
                />
                <View style={styles.viewText}>
                    <Text style={styles.title}>
                        {movie.title}
                    </Text>
                    <View style={styles.separator} />
                    <Text style={styles.overview}>{movie.overview}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default MovieListViewItem;

const styles = StyleSheet.create({
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
