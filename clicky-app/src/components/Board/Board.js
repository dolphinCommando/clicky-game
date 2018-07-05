import React from 'react';
import './Board.css';
const fs = require('fs');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.images = getImageFiles();
    this.state = {
      complete: false
    }
  }
  getImageFiles = () => {
    fs.readdir('~/clicky-app/public/images', (err, files) => {
      if (err) throw err;
      console.log(files);
      return files;
    });
  }
  randomizeImages = () => {
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
    console.log(idxRandom);
    return idxRandom.map(index => img[index]);  
  }
  render() {
    const randomImages = randomizeImages();
    const rows = randomImages.map(image => <Square img={image} />);
    return (
      <div className="row">
        {rows}
      </div>
    );
  }
}

export default Board;