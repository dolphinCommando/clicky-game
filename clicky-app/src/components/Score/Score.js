import React from 'react';
import './Score.css';

const Score = (props) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4 text-center">Clicky Game</h1>
      <hr className="my-4" />
      <p>Squares Found: {props.score} / {props.total}</p>
      <p>Games Completed: {props.wins}</p>
    </div>
  );
}

export default Score;