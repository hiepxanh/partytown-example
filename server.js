const express = require('express')
const app = express()
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