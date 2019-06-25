import React from 'react';
import ToggleWatch from './ToggleWatch'

const MovieListEntry = (props) => (
    <div>
        <div>
            {props.movie.title}
            <ToggleWatch handleClick={props.handleClick} toggleWatch={props.toggleWatch}/>
        </div> 
    </div>
);

export default MovieListEntry; 