import React from 'react';
import './Score.css';

const Score = (props) => {
  return (
    <nav className="navbar sticky-top">
      <span className="text-left ml-5">Characters: {props.score} / {props.total}</span>
      <span className="text-right mr-5">Games Completed: {props.wins}</span>
    </nav>
  );
}

export default Score;