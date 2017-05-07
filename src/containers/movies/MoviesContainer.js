import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../actions/movies/moviesActions';

import MovieListView from '../../components/MovieListView';

type Props = {
    movies: Object<any>,
    getMovies: (params: { page: number }) => void,
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

    render() {
        const { movies } = this.props;

        return (
            <View style={styles.container}>
                <MovieListView
                    movies={movies}
                    onEndReached={() => this.onEndReached()}
                />
            </View>
        );
    }
}

const mapStateToProps = ({
    moviesReducer: { movies, moreResult, nextPage }
}) => ({
    movies,
    moreResult,
    nextPage
});

const mapDispatchToProps = dispatch => ({
    getMovies: bindActionCreators(fetchMovies, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
