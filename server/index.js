const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,'../client/dist')))



app.listen(3019, (err)=> {
  if(err) console.log(err)
  else console.log('Listening on port3019')
})