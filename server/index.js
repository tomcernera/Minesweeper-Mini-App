const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser');
const { createScore } = require('../db/index.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../client/dist')));

app.post('/scores', (req, res) => {
  let score = req.body;
  console.log(score);
  // createScore(score).then(() => {
    res.sendStatus(201);
  // });
});

app.listen(3019, (err)=> {
  if(err) console.log(err)
  else console.log('Listening on port 3019')
})