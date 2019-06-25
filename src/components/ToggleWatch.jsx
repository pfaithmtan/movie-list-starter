import React from 'react';

// class ToggleWatch extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             toggleWatch: true
//         }

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState({
//             toggleWatch: !this.state.toggleWatch
//         });
//     }

//     render() {
//         return(
//             <button type="button" onClick={this.handleClick}>{this.state.toggleWatch ? 'Watched' : 'Not Watched'}</button>
//             // <div>{this.state.watched ? <button type="button">Watched</button> : <button type="button">Not Watched</button>}</div>
//         );
//     }
// }

const ToggleWatch = (props) => (
    <button type="button" onClick={props.handleClick}>{props.toggleWatch ? 'Watched' : 'Not Watched'}</button>
);

export default ToggleWatch;