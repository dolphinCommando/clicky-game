import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <footer className="row">
          <span className="col-6 text-left ml-4">By Matthew Buchanan</span>
          <span className="col-5 text-right mr-3"><a href="https://github.com/dolphinCommando/clicky-game" target="_blank" rel="noopener noreferrer">Link to Github</a></span>
        </footer>
      </div>
    );
  }
}

export default App;
