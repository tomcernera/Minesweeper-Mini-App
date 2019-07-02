import React from 'react';

const squareStyle = {
  margin: '100px',
  border: '5px solid gray'
};


var Square = props => (
  <td onClick={()=>(props.handleClick(props.row,props.col))} style={squareStyle}>
  </td>
)


export default Square;