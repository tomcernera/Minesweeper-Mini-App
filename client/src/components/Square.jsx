import React from 'react';

const displayFalse = {
  margin: '100px',
  background: 'gray'
};

const displayTrue = {
  margin: '100px',
  background: 'blue'
};


var Square = props => (
  <td onClick={()=>(props.handleClick(props.row,props.col))} style={props.display ? displayTrue : displayFalse}>
  </td>
)


export default Square;