import React from 'react';

const Search = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input type="search" onChange={props.handleSearch} placeholder="Search..."></input>
        <input type="submit"  value="Go!"></input>
    </form>
);

export default Search;