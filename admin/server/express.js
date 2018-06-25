const express = require('express')
const path = require('path')
const project = require('../project.config')
const compress = require('compression')
const app = express()
app.use(compress())
// server in production.
app.use(express.static(path.resolve(project.basePath, project.outDir)))
app.use('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

app.listen(4000, () => {
  console.log('admin Server is running at http://localhost:4000')
})
