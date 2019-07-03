import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';
import Menu from './components/Menu.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'menu',
      size: 0,
      difficulty: null,
      valueBoard: [[]],
      displayBoard: [[]],
      bombs: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.initValueBoard = this.initValueBoard.bind(this);
    this.transformAdjacentSquares = this.transformAdjacentSquares.bind(this);
    this.addSquareValues = this.addSquareValues.bind(this);
    this.openSquares = this.openSquares.bind(this);
    this.isOutOfBounds = this.isOutOfBounds.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getBombCount = this.getBombCount.bind(this);
    this.initBoard = this.initBoard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  initBoard(type) {
    return Array(this.state.size).fill(Array(this.state.size).fill(type === 'value' ? 0 : false));
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
        coord = `${bombRow},${bombCol}`;
      }
      bombSites.push([bombRow, bombCol]);
      visited[coord] = true;
    }
    let temp = JSON.parse(JSON.stringify(this.state.valueBoard));
    bombSites.forEach((site) => {
      temp[site[0]][site[1]] = 'bomb';
      this.transformAdjacentSquares(site[0], site[1], temp, this.addSquareValues);
    });
    this.setState({valueBoard: temp});
  }

  addSquareValues(row, col, arr) {
    if (!this.isOutOfBounds(row, col) && arr[row][col] !== 'bomb') {
      arr[row][col] += 1;
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
    if (this.isOutOfBounds(row, col) || this.state.valueBoard[row][col] === 'bomb' 
    || arr[row][col] === true) {
      return;
    } else {
      arr[row][col] = true;
      let newHidden = this.state.hidden - 1;
      if (this.state.valueBoard[row][col] === 0) {
        this.transformAdjacentSquares(row, col, arr, this.openSquares);
      }
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
        this.openSquares(i, j, temp);
        this.setState({displayBoard: temp}, () => {
          this.checkWin();
        });
      }
    }
  }
  
  checkWin() {
    let hiddenSquares = this.state.displayBoard.reduce((acc, row) => {
      return acc + row.reduce((prev, ele) => {
        return ele === false ? prev + 1 : prev;
      }, 0);
    }, 0);
    if (hiddenSquares === this.state.bombs) {
      this.setState({game: 'win'});
    }
  }

  getBombCount() {
    if (this.state.difficulty === 'easy') {
      return Math.floor(Math.pow(this.state.size, 2) / 10);
    } else if (this.state.difficulty === 'medium') {
      return Math.floor(Math.pow(this.state.size, 2) / 4);
    } else if (this.state.difficulty === 'hard') {
      return Math.floor(4 * Math.pow(this.state.size, 2) / 10);
    }
  }

  handleSubmit() {
    let bombs = this.getBombCount();
    let valueBoard = this.initBoard('value');
    let displayBoard = this.initBoard('display');
    this.setState({game : 'active', 
      bombs: bombs, 
      valueBoard: valueBoard,
      displayBoard: displayBoard});
  }
  
  handleChange(e) {
    let obj = {};
    obj[e.target.id] = e.target.value;
    this.setState(obj);
  }

  render() {
    return(
      <React.Fragment>
        { this.state.game === 'menu' ?  <Menu handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> :  
        <Board valueBoard={this.state.valueBoard} 
              displayBoard={this.state.displayBoard} 
              game={this.state.game} 
              handleClick={this.handleClick}/>}
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Game/>, document.getElementById('app'));