const express = require('express')
const path = require('path')
const compress = require('compression')
const app = express()
app.use(compress())
// server in production.
const dist = path.resolve('dist')
app.use(express.static(dist))
app.use('*', function (req, res, next) {
  const filename = path.join(dist, 'index.html')

  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

app.listen(3000, () => {
  console.log('client Server is running at http://localhost:3000')
})
