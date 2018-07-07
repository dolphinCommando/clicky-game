import React from 'react';
import './Board.css';
import Square from '../Square';
//import * as fs from 'fs';
const ip = "./images/";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      ip + "mario.png",
      ip + "peach.png",
      ip + "toad.png",
      ip + "luigi.png",
      ip + "bowser.png",
      ip + "yoshi.png",
      ip + "pirahnaplant.png",
      ip + "goomba.png",
      ip + "hammerbro.png"
    ]
    this.state = {
      squares: new Array(this.images.length).fill(0),
      indices: [...this.images.keys()]
    };
  }
  /*
  getImageFiles() {
    fs.readdir('../../public/images', (err, files) => {
      if (err) throw err;
      console.log(files);
      return files;
    });
  }
  */

  handleClick(i) {
    const squaresCopy = Object.assign({}, this.state.squares);
    squaresCopy[i] += 1;
    const randomIdx = this.randomizeArray();
    this.setState({
      indices: randomIdx,
      squares: squaresCopy
    });  
  };

  randomizeArray() {
    let idxRandom = [];
    let idxTemp = [];
    let img = this.images;
    let count = 0;
    for (let i = 0; i < img.length; i++) {
      idxTemp.push(i);
    }
    while (idxRandom.length < img.length) {
      if (count > img.length) {
        console.log('Error: randomizeImages() failed: out of bounds');
        break;
      }
      let randomIdx = Math.floor(Math.random() * idxTemp.length);
      idxRandom.push(idxTemp[randomIdx]);
      idxTemp.splice(randomIdx, 1);
      count++;
    }
    //console.log(idxRandom);
    return idxRandom;    
  };

  render() {
    console.log(this.state.squares);
    const rows = this.state.indices.map(index => {
      return (<Square img={this.images[index]} onClick={() => this.handleClick(index)} />)
    });
    return (
      <div className="row">
        {rows}
      </div>
    );
  }
}

export default Board;