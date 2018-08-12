import React from 'react';
import './Game.css';
import Square from '../Square';
import Score from '../Score';
const ip = "./images/";

class Game extends React.Component {
  constructor() {
    super();
    this.images = [
      ip + "mario.png",
      ip + "peach.png",
      ip + "toad.png",
      ip + "luigi.png",
      ip + "bowser.png",
      ip + "yoshi.png",
      ip + "plant.png",
      ip + "goomba.png",
      ip + "hammerbro.png"
    ];
    
    this.state = {
      squares: new Array(this.images.length).fill(0),
      indices: [...this.images.keys()],
      score: 0,
      wins: window.localStorage.getItem('marioMemoryWins') || 0
    };
  }

  handleClick(i) {
    const squaresCopy = Object.assign({}, this.state.squares);
    squaresCopy[i] += 1;
    //console.log(this.state.wins);
    let loss = false;
    for (let property in squaresCopy) {
      if (squaresCopy[property] === 2) {
        loss = true;
      }
    };
    let every = true;
    for (let property in squaresCopy) {
      if (squaresCopy[property] !== 1) {
        every = false;
      }
    }
    let ones = 0;
    for (let property in squaresCopy) {
      if(squaresCopy[property] === 1) {
        ones += 1;
      }
    }
    if (loss) {
      this.setState({
        squares: new Array(this.images.length).fill(0),
        indices: [...this.images.keys()],
        score: 0
      });
    }
    else if (every) {
      window.localStorage.setItem('marioMemoryWins', +this.state.wins + 1);
      this.setState({
        squares: new Array(this.images.length).fill(0),
        indices: [...this.images.keys()],
        score: 0,
        wins: +this.state.wins + 1
      });      
    }
    else {
      const randomIdx = this.randomizeArray();
      this.setState({
        indices: randomIdx,
        squares: squaresCopy,
        score: ones
      });  
    }  
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
    return idxRandom;    
  };

  render() {
    const rows = this.state.indices.map(index => {
      return (<Square image={this.images[index]} onClick={() => this.handleClick(index)} />)
    });
    return (
      <div>
        <Score score={this.state.score} total={this.images.length} wins={this.state.wins}/>
        <div className="container">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Super Memory</h1>
          <p className="lead">Don't click on the same character twice!</p>
        </div>       
        <div className="row justify-content-center">
          {rows}
        </div>
        </div>
      </div>
    );
  }
}

export default Game;