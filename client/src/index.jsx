import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'active',
      board: Array(100).fill(0)
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(idx) {

  }



  render() {
    <Board board={this.state.board} game={this.state.game} handleClick={this.handleClick}/>
  }
}

ReactDOM.render(<Game/>, document.getElementById('app'));