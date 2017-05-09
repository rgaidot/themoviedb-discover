/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../actions/movies/moviesActions';
import { fetchMovie } from '../../actions/movies/movieActions';

import MovieListView from '../../components/MovieListView';

import type {
    StyleObj
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type movie = any;
type movies = Array<any>;
type moreResult = moreResult;
type nextPage = number;

type Props = {
    movies: movies,
    movie: movie,
    getMovies: (params: { page: number }) => void,
    getMovie: (id: number) => void,
    moreResult: boolean,
    nextPage: number,
    moviesReducer: (
        movies: movies,
        moreResult: moreResult,
        nextPage: nextPage
    ) => void,
    movieReducer: movie => void
};

class MoviesContainer extends Component<void, Props, void> {
    props: Props;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovies(1);
    }

    onEndReached() {
        const { props: { getMovies, nextPage, moreResult } } = this;

        if (moreResult) {
            getMovies(nextPage);
        }
    }

    showMovieDetails(id) {
        this.props.getMovie(id);
    }

    render() {
        const { props: { movies } } = this;

        return (
            <View style={styles.container}>
                <MovieListView
                    movies={movies}
                    onEndReached={() => this.onEndReached()}
                    showMovieDetails={id => this.showMovieDetails(id)}
                />
            </View>
        );
    }
}

const mapStateToProps = ({
    moviesReducer: { movies, moreResult, nextPage },
    movieReducer: { movie }
}: {
    moviesReducer: {
        movies: Array<any>,
        moreResult: boolean,
        nextPage: number
    },
    movieReducer: { movie: any }
}) => ({
    movie,
    movies,
    moreResult,
    nextPage
});

const mapDispatchToProps = (dispatch: *) => ({
    getMovies: bindActionCreators(fetchMovies, dispatch),
    getMovie: bindActionCreators(fetchMovie, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

const styles: StyleObj = StyleSheet.create({
    container: {
        flex: 1
    }
});
