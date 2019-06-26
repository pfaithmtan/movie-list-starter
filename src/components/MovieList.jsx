import React from 'react';
import MovieListEntry from './MovieListEntry';

const MovieList = (props) => (
    <div>
        { (props.movies.length === 0 && props.filter) ? <div>No Movies Found</div> : props.movies.map(movie => <MovieListEntry 
        movie={movie} 
        handleClick={props.handleClick}
        toggleWatch={movie.watched}/>) }
    </div>
);

export default MovieList;