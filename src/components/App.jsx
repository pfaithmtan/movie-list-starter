import React from 'react';
import movies from '../data/exampleMovies';
import MovieList from './MovieList'
import Search from './Search'
import AddMovies from './AddMovies'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newMovie: '',
            userText: '',
            userMovies: [],
            filteredMovies: [],
            filter: false
        };
        
        this.handleMovieAdding = this.handleMovieAdding.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMovieAdding(event) {
        this.setState({
            newMovie: event.target.value
        })
    }

    handleAdd(event) {
        event.preventDefault();
        const newMovies = [...this.state.userMovies];

        for (let i = 0; i < newMovies.length; i++) {
            if (newMovies[i].title.toLowerCase() === this.state.newMovie.toLowerCase()) {
                return;
            } 
        }
        
        newMovies.push({
            title: this.state.newMovie, 
            watched: true 
        });

        this.setState({
            userMovies: newMovies,
            filter: false
        });
    }

    handleSearch(event) {
        this.setState({
            userText: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const userMoviesCopy = [...this.state.userMovies];
        const filteredMovies = userMoviesCopy.filter(movie => movie.title.toLowerCase().includes(this.state.userText.toLowerCase()));
        this.setState({
            filteredMovies: filteredMovies,
            filter: true
        })
    }

    render() {
        return(
            <div>
                <h1>Movie List</h1>
                <AddMovies handleMovieAdding={this.handleMovieAdding} handleAdd={this.handleAdd} />
                <Search handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} /> 
                <MovieList movies={ (this.state.filter ? this.state.filteredMovies : this.state.userMovies) } filter={this.state.filter} />
            </div>
        );
    }
}

export default App;