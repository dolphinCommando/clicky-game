import React from 'react';
import './Board.css';
import Square from '../Square';

const Board = (props) => {
  const rows = props.indices.map(index => {
    return (<Square image={props.images[index]} onClick={() => props.handleClick(index)} />)
  });
  return (
    <div className="row">
      {rows}
    </div>
  );
}

export default Board;