const express = require('express')
const path = require('path')
const compress = require('compression')
const app = express()
app.use(compress())
// server in production.
const dist = path.resolve('dist')
app.use(express.static(dist))
app.use('*', function (req, res, next) {
  res.send(path.join(dist, 'index.html'))
})
app.listen(4000, () => {
  console.log('client Server is running at http://localhost:4000')
})
