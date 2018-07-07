import React from 'react';
import './Square.css';

class Square extends React.Component {
  render() {
    let img = this.props.img;
    return (
      <div className="col-3 square" onClick={() => this.props.onClick()}>
        <img src={img} alt={img.substr(img.lastIndexOf('/'), img.lastIndexOf('.'))}></img>
      </div>
    );
  }

}

export default Square;