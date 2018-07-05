import React from 'react';
import './Game.css';
import Board from '../Board';

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
}

export default Game;