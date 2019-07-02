import React from 'react';

const squareStyle = {
  margin: '100px',
  background: 'gray'
};


var Square = props => (
  <td onClick={()=>(props.handleClick(props.row,props.col))} style={squareStyle}>
  </td>
)


export default Square;