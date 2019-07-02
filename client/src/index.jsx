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
    this.transformAdjacentSquares = this.transformAdjacentSquares.bind(this);
    this.addSquareValues = this.addSquareValues.bind(this);
    this.openSquares = this.openSquares.bind(this);
    this.isOutOfBounds = this.isOutOfBounds.bind(this);
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
    bombSites.forEach((site) => {
      temp[site[0]][site[1]] = 'bomb';
      this.transformAdjacentSquares(site[0], site[1], temp, this.addSquareValues);
    });
  }

  addSquareValues(row, col, arr) {
    if (arr[i][j] !== 'bomb' && !this.isOutOfBounds(row, col)) {
      arr[i][j] += 1;
    }
  }

  transformAdjacentSquares(row, col, arr, transform) {
    transform(row, col - 1, arr);
    transform(row, col + 1, arr);
    transform(row - 1, col - 1, arr);
    transform(row - 1, col, arr);
    transform(row - 1, col + 1, arr);
    transform(row + 1, col - 1, arr);
    transform(row + 1, col, arr);
    transform(row + 1, col + 1, arr);
  }

  openSquares(row, col, arr) {
    if (this.state.valueBoard[row][col] === 'bomb' || this.isOutOfBounds(row, col)) {
      return;
    } else {
      arr[row][col] = true;
      this.transformAdjacentSquares(row, col, arr, this.openSquares);
    }
  }

  isOutOfBounds(row, col) {
    if (row < 0 || row >= this.state.valueBoard.length ||
      col < 0 || col >= this.state.valueBoard.length) {
      return true;
    }
    return false;
  };

  handleClick(i, j) {
    if (this.state.displayBoard[i][j] === false) {  
      if (this.state.valueBoard[i][j] === 'bomb') {
        this.setState({game: 'loss'});
      } else {
        let temp = JSON.parse(JSON.stringify(this.state.displayBoard));
        openSquares(i, j, temp);
      }
    }
  }



  render() {
    <Board board={this.state.board} game={this.state.game} handleClick={this.handleClick}/>
  }
}

ReactDOM.render(<Game/>, document.getElementById('app'));