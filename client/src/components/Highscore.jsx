import React from 'react'


var Highscore = props => (
<React.Fragment>
<div>
  <p>{`High scores for ${props.size} by ${props.size} board on ${props.difficulty}`}</p>
  <table>
    <tbody>
      <tr><td>Username</td><td>Time to solve (in ms)</td></tr>
      {props.results.map((result, idx) => {
        return <tr key={idx}><td>{result.player}</td><td>{result.time}</td></tr>
      })}
    </tbody>
  </table>
</div>
</React.Fragment>
)


export default Highscore;