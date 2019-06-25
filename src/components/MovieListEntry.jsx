import React from 'react';
import ToggleWatch from './ToggleWatch'

const MovieListEntry = (props) => (
    <div>
        <div>
            {props.movie.title}
            <ToggleWatch />
        </div> 
    </div>
);

export default MovieListEntry; 