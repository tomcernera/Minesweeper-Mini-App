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
    <input id="size" type="text" name="name" onChange={e=>{props.handleChange(e)}}/>
  </label>
</form>
<br/>
<div>Difficulty
<select id="difficulty" onChange={e=>{props.handleChange(e)}}>
  <option value="easy">Easy</option>
  <option value="medium">Medium</option>
  <option value="hard">Hard</option>
</select>
</div>
<br/>
<button onClick={props.handleSubmit}>START NEW GAME</button>
 </div>
)



export default Menu;