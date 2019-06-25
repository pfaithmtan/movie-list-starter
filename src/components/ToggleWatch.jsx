import React from 'react';

class ToggleWatch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleWatch: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            toggleWatch: !this.state.toggleWatch
        });
    }

    render() {
        return(
            <button type="button" onClick={this.handleClick}>{this.state.toggleWatch ? 'Watched' : 'Not Watched'}</button>
            // <div>{this.state.watched ? <button type="button">Watched</button> : <button type="button">Not Watched</button>}</div>
        );
    }
}

export default ToggleWatch;