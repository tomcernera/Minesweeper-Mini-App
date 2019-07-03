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
    width: 400 / size,
    height: 400 / size
  }
}

const gameLoss = {
  background : 'red',
  textAlign : 'center'
}

const gameWin = {
  background : 'lightGreen',
  textAlign : 'center'
}

var Square = props => (
<<<<<<< HEAD
  <td onClick={()=>(props.handleClick(props.row,props.col))} style={props.display ? displayTrue : displayFalse}>
=======
  <td onClick={() => (props.handleClick(props.row,props.col))} 
    style={props.game === 'loss' ? 
      Object.assign(squareDimension(props.size), gameLoss) : props.display ? 
      Object.assign(squareDimension(props.size), displayTrue) : 
      Object.assign(squareDimension(props.size), displayFalse)}>
    {props.display ? props.value === 0 ? '' : props.value : ''}
>>>>>>> 939a073c7e346e8f3500ff8049ee46bf65f0684e
  </td>
)


export default Square;