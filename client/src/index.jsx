import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'active',
      board: Array(10).fill(Array(10).fill(0)),
      bombs: 10
    }
    this.handleClick = this.handleClick.bind(this);
  }

  initBoard() {
    let visited = new Set();
    let bombSites = [];
    for (let i = 0; i < this.state.bombs; i++) {
      let bombIdx = Math.floor(Math.random() * this.state.board.length);
      while (visited.has(bombIdx)) {
        bombIdx = Math.floor(Math.random() * this.state.board.length);
      }
      bombSites.push(bombIdx);
      visited.add(bombIdx);
    }
    let temp = JSON.parse(JSON.stringify(this.state.board));
    bombSites.forEach((site) => {
      temp[site] = 'bomb';
    })
  }

  handleClick(idx) {
    if (this.state.board[idx] === 'bomb') {

    }
  }



  render() {
    <Board board={this.state.board} game={this.state.game} handleClick={this.handleClick}/>
  }
}

ReactDOM.render(<Game/>, document.getElementById('app'));