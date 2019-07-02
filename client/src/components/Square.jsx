import React from 'react';

const displayFalse = {
  background: 'gray'
};

const displayTrue = {
  background: 'lightBlue',
  textAlign : 'center'
};


var Square = props => (
  <td  width="40" height="40" onClick={()=>(props.handleClick(props.row,props.col))} style={props.display ? displayTrue : displayFalse}>
  {props.display ? props.value === 0 ? '' : props.value : ''}
  </td>
)


export default Square;