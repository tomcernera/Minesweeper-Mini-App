import React from 'react';
import Square from './Square.jsx'


var Board = props => (
  <table>
    <tbody>
      {props.valueBoard.map((row,i) => {
        return (
        <tr key={i}>
          {row.map((col, j) => {
          return <Square row={i} col={j} 
                          handleClick={props.handleClick} 
                          valueBoard={props.valueBoard} 
                          displayBoard={props.displayBoard}/>
          })}
        </tr>
        )
      })}
    </tbody>
  </table>
)


export default Board