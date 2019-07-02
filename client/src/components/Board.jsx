import React from 'react';
import Square from './Square.jsx'


var Board = props => (
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
)


export default Board