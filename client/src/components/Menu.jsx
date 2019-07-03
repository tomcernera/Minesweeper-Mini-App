import React from 'react';

const menuStyle = {
  marginLeft : '100px'
}


var Menu = props => (
 <div style={menuStyle}>
<h1>New Game</h1>
<form>
  <label>
    Size:
    <input type="text" name="name"/>
  </label>
</form>
<br/>
<div>Difficulty
<select>
  <option>Easy</option>
  <option>Medium</option>
  <option>Hard</option>
</select>
</div>
<br/>
<button onClick={props.handleSubmit}>START NEW GAME</button>
 </div>
)



export default Menu;