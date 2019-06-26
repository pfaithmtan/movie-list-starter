import React from 'react';
import ToggleWatch from './ToggleWatch'

const MovieListEntry = (props) => (
    <div>
        <div>
            {props.movie.title}
            <button type="button" onClick={() => props.handleClick(props.movie.title)}>{props.movie.watched ? 'Watched' : 'Not Watched'}</button>
            {/* <ToggleWatch handleClick={props.handleClick} toggleWatch={props.toggleWatch}/> */}
        </div> 
    </div>
);

export default MovieListEntry; 