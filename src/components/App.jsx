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
            filter: false,
            watched: true
        };
        
        this.handleMovieAdding = this.handleMovieAdding.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleWatched = this.handleWatched.bind(this);
    }

    handleWatched(bool) {
        const userMoviesCopy = [...this.state.userMovies];
        const watchedMovies = userMoviesCopy.filter(movie => (bool ? movie.watched : !movie.watched));
        this.setState({
            filteredMovies: watchedMovies,
            filter: true
        });
    }

    handleClick(movie) {
        movie.watched = !movie.watched
        this.setState({
            watched: !this.state.watched
        })
    }

    handleMovieAdding(event) {
        this.setState({
            newMovie: event.target.value
        })
    }

    handleAdd(event) {
        event.preventDefault();
        event.target.reset();
        const newMovies = [...this.state.userMovies];

        for (let i = 0; i < newMovies.length; i++) {
            if (newMovies[i].title.toLowerCase() === this.state.newMovie.toLowerCase()) {
                return;
            } 
        }
        
        newMovies.push({
            title: this.state.newMovie, 
            watched: false
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
        // event.target.reset();
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
                <div>
                    <button type="button" onClick={() => this.handleWatched(true)}>Watched</button>
                    <button type="button" onClick={() => this.handleWatched(false)}>Not Watched</button>
                </div>
                <Search handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} /> 
                <MovieList movies={ (this.state.filter ? this.state.filteredMovies : this.state.userMovies) } 
                    filter={this.state.filter} 
                    handleClick={this.handleClick} />
            </div>
        );
    }
}

export default App;