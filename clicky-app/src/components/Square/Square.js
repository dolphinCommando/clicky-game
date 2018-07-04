import React from 'react';
import './Square.css';

class Square extends React.Component {
  state = {
    click: 0
  }

  handleClick = () => {
    this.setState({click: this.state.click + 1});
  }

  render() {
    return (
      <div className="square col-4" onClick={this.handleClick}>
        <img src={this.props.imageSrc} alt={this.props.imageAlt}></img>
      </div>
    );
  }

}

export default Square;