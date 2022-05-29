const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const port = 3000

const myLogger = function (req, res, next) {
  console.log('logger:', req.originalUrl)
  next()
}

app.use(myLogger)

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})