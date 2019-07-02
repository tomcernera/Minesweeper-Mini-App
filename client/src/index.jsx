import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'active',
      valueBoard: Array(10).fill(Array(10).fill(0)),
      displayBoard: Array(10).fill(Array(10).fill(false)),
      bombs: 10
    }
    this.handleClick = this.handleClick.bind(this);
  }

  initValueBoard() {
    let visited = {};
    let bombSites = [];
    for (let i = 0; i < this.state.bombs; i++) {
      let bombRow = Math.floor(Math.random() * this.state.valueBoard.length);
      let bombCol = Math.floor(Math.random() * this.state.valueBoard.length);
      let coord = `${bombRow},${bombCol}`;
      while (visited[coord] !== undefined) {
        bombRow = Math.floor(Math.random() * this.state.valueBoard.length);
        bombCol = Math.floor(Math.random() * this.state.valueBoard.length);
      }
      bombSites.push([bombRow, bombCol]);
      visited[coord] = true;
    }
    let temp = JSON.parse(JSON.stringify(this.state.valueBoard));
    const transformAdjacentSquares = (i, j) => {
      if (i > 0) {
        addSquareValues(i - 1, j);
        if (j > 0) {
          addSquareValues(i - 1, j - 1);
        }
        if (j < this.state.valueBoard.length - 1) {
          addSquareValues(i - 1, j + 1);
        }
      }
      if (i < this.state.valueBoard.length - 1) {
        addSquareValues(i + 1, j);
        if (j < this.state.valueBoard.length - 1) {
          addSquareValues(i + 1, j + 1);
        }
        if (j > 0) {
          addSquareValues(i + 1, j - 1);
        }
      }
      if (j > 0) {
        addSquareValues(i, j - 1);
      }
      if (j < this.state.valueBoard.length - 1) {
        addSquareValues(i, j + 1);
      }
    };
    const addSquareValues = (i, j) => {
      if (temp[i][j] !== 'bomb') {
        temp[i][j] += 1;
      }
    };
    bombSites.forEach((site) => {
      temp[site[0]][site[1]] = 'bomb';
      transformAdjacentSquares(site[0], site[1]);
    });
  }

  handleClick(i, j) {
    if (this.state.valueBoard[idx] === 'bomb') {

    }
  }



  render() {
    <Board board={this.state.board} game={this.state.game} handleClick={this.handleClick}/>
  }
}

ReactDOM.render(<Game/>, document.getElementById('app'));