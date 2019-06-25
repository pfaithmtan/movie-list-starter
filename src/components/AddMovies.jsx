import React from 'react';

const AddMovies = (props) => (
    <form onSubmit={props.handleAdd}>
        <input type="search" onChange={props.handleMovieAdding} placeholder="Add movie title here"></input>
        <input type="submit" value="Add"></input>
    </form>
);

export default AddMovies;