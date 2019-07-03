import React from 'react';
import Square from './Square.jsx'


var Board = props => (
<<<<<<< HEAD
  <table width="400" height="400">
    <tbody>
      {props.valueBoard.map((row,i) => {
        return (
        <tr key={i}>
          {row.map((col, j) => {
          return <Square  key={[i,j]}
                          row={i} col={j} 
                          handleClick={props.handleClick} 
                          value={props.valueBoard[i][j]} 
                          display={props.displayBoard[i][j]}/>
          })}
        </tr>
        )
      })}
    </tbody>
  </table>
=======
  <React.Fragment>
    <table width="400" height="400">
      <tbody>
        {props.valueBoard.map((row,i) => {
          return (
          <tr key={i}>
            {row.map((col, j) => {
            return <Square  key={[i,j]}
                            row={i} col={j} 
                            handleClick={props.handleClick}
                            size={props.size} 
                            value={props.valueBoard[i][j]} 
                            display={props.displayBoard[i][j]}
                            game = {props.game}/>
            })}
          </tr>
          )
        })}
      </tbody>
    </table>
    <div className="new-game" style={{margin: 30}}>
      <button onClick={props.handleHardReset}>Return to Menu</button>
      <span> OR </span>
      <button onClick={props.handleSameOptions}>Play Same Setup</button>
    </div>
  </React.Fragment>
>>>>>>> 939a073c7e346e8f3500ff8049ee46bf65f0684e
)


export default Board