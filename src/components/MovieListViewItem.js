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

import config from '../config';

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

        this.state = { width, height: height / 2 };
    }

    render() {
        const {
            props: {
                handleClick,
                movie: { id, overview, title, poster_path, backdrop_path }
            },
            state: { width, height }
        }: {
            props: {
                handleClick: (id: number) => void,
                movie: movie
            },
            state: { width: number, height: number }
        } = this;

        const uri = `${config.api.url_images}/w780/${backdrop_path || poster_path}`;

        return (
            <TouchableOpacity
                key={id}
                activeOpacity={0.7}
                onPress={() => handleClick(id)}>
                <Image
                    resizeMode="cover"
                    style={{ width, height, opacity: 0.9 }}
                    source={{ uri }}
                />
                <View style={styles.viewItem}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <View style={styles.details}>
                        <Image
                            source={{
                                uri: `${config.api.url_images}/w185/${poster_path}`
                            }}
                            style={styles.poster}
                        />
                        <Text numberOfLines={11} style={styles.description}>
                            {overview}
                        </Text>
                    </View>

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
    viewItem: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        paddingLeft: 10,
        paddingRight: 10
    },
    details: {
        flexDirection: 'row'
    },
    poster: {
        height: 184,
        width: 135,
        borderWidth: 2,
        borderColor: '#000000'
    },
    title: {
        fontSize: 18,
        paddingBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000000',
        backgroundColor: 'transparent'
    },
    description: {
        fontSize: 14,
        color: 'white',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowColor: '#000000',
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        backgroundColor: 'transparent'
    }
});
