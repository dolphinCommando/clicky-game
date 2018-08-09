import React from 'react';
import './Score.css';

const Score = (props) => {
  let spanClass = "text-left ml-5";
  if (+props.score > 0) {
    spanClass += " flash";
  }
  return (
    <nav className="navbar sticky-top">
      <span className={spanClass}>Characters: {props.score} / {props.total}</span>
      <span className="text-right mr-5">Games Completed: {props.wins}</span>
    </nav>
  );
}

export default Score;