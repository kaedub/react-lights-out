import React, { Component } from 'react';
import Board from './Board'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lights Out!</h1>
          <p>Good luck!</p>
        </header>
        <Board className="Board" />
      </div>
    );
  }
}

export default App;
