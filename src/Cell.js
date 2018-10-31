import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {

    render() {
        return <div id={this.props.location} 
            className="Cell"
            onClick={this.props.handleClick}
            style={ {backgroundColor: (this.props.on ? "teal": "lightblue")} }>
        </div>
    }
}

export default Cell;