const express = require('express')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use('/api', apiRouter)

const server = app.listen(8000, () => {
  console.log(`Server listening http://localhost:${server.address().port}`)
})
