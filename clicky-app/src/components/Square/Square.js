import React from 'react';
import './Square.css';

const Square = (props) => {
  return (
    <div className="col-3 square" onClick={() =>  props.onClick()}>
      <img src={props.image} alt={props.image.substr(props.image.lastIndexOf('/'), props.image.lastIndexOf('.'))}></img>
    </div>
  );
}

export default Square;