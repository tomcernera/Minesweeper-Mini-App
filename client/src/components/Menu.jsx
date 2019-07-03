import React from 'react';

const url = 'https://img9.androidappsapk.co/300/0/8/f/com.ssaurel.minesweeper.png'

const menuStyle = {
  marginLeft : '175px'
  
}

const backgroundStyle = {
  height: '500px',
  width: '500px',
  backgroundImage : `url(${url})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize : 'cover',
  marginTop: '0px'
}

var Menu = props => (
 <div style={backgroundStyle}>
 <div style={menuStyle}>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
<h1>New Game</h1>
<form>
  <label>
    Player:
    <input id="player" type="text" name="name" onChange={e=>{props.handleChange(e)}}/>
  </label>
</form>
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
 </div> 
)



export default Menu;