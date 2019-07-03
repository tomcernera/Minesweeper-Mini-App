import React from 'react';

const displayFalse = {
  background: 'gray'
};

const displayTrue = {
  background: 'lightBlue',
  textAlign : 'center'
};

const squareDimension = (size) => {
  return {
    width: `"${(size / 4)}%"`,
  }
}

const gameLoss = {
  background : 'red',
  textAlign : 'center'
}

var Square = props => (
  <td onClick={() => (props.handleClick(props.row,props.col))} 
    style={props.game === 'loss' ? 
      Object.assign(squareDimension(props.size), gameLoss) : props.display ? 
      Object.assign(squareDimension(props.size), displayTrue) : 
      Object.assign(squareDimension(props.size), displayFalse)}>
    {props.display ? props.value === 0 ? '' : props.value : ''}
  </td>
)


export default Square;