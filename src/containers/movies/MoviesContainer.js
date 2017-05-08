import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../actions/movies/moviesActions';
import { fetchMovie } from '../../actions/movies/movieActions';

import MovieListView from '../../components/MovieListView';

type Props = {
    movies: Object<any>,
    movie: Object,
    getMovies: (params: { page: number }) => void,
    getMovie: (id: number) => void,
    moreResult: boolean,
    nextPage: string
};

type State = {
    movies: Object<any>
};

class MoviesContainer extends Component<void, Props, State> {
    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovies(1);
    }

    onEndReached() {
        const { getMovies, nextPage, moreResult } = this.props;

        if (moreResult) {
            getMovies(nextPage);
        }
    }

    showMovieDetails(id) {
        this.props.getMovie(id);
    }

    render() {
        const { movies } = this.props;

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
}) => ({
    movie,
    movies,
    moreResult,
    nextPage
});

const mapDispatchToProps = dispatch => ({
    getMovies: bindActionCreators(fetchMovies, dispatch),
    getMovie: bindActionCreators(fetchMovie, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
