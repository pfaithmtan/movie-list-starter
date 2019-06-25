import React from 'react';
import MovieListEntry from './MovieListEntry';

const MovieList = (props) => (
    <div>
        {props.movies.map(movie => <MovieListEntry movie={movie} />)}
    </div>
);

// { props.movies.length === 0 ? (<div>No Movies Found</div>) : (props.movies.map(movie => <MovieListEntry movie={movie} />)) }
// if (props.addedMovies.length !== 0) {
//     // console.log('first if')
//     return props.addedMovies.map(movie => <MovieListEntry movie={movie} />);
// } else if (props.movies.length === 0) {
//     // console.log('else if')
//     return <div>No Movies Found</div>
// } else {
//     // console.log('just else')
//     return props.movies.map(movie => <MovieListEntry movie={movie} />);
// }


export default MovieList;