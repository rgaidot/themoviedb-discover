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

import type { Movie } from '../../../flow/types/movie';

type Props = {
    movies: Array<Movie>,
    movie: Movie,
    getMovies: (page: number) => void,
    getMovie: (id: number) => void,
    moreResult: boolean,
    nextPage: number,
    moviesReducer: (
        movies: Array<Movie>,
        moreResult: boolean,
        nextPage: number
    ) => void,
    movieReducer: (movie: Movie) => void
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
