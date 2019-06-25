import React from 'react';

const MovieListEntry = (props) => (
    <div>
        <div>
            {props.movie.title}
            <button type="button">Watched</button>
        </div> 
    </div>
);

export default MovieListEntry; 