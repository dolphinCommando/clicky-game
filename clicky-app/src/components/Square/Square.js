import React from 'react';
import './Square.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0
    }
  }

  render() {
    let img = this.props.img;
    return (
      <div className="col-3 square" onClick={() => this.setState({click: this.state.click + 1})}>
        <img src={img} alt={img.substr(img.lastIndexOf('/'), img.lastIndexOf('.'))}></img>
      </div>
    );
  }

}

export default Square;