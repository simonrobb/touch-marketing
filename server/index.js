const path = require('path')
const chalk = require('chalk')
const express = require('express')
const webpackConfig = require('../webpack/webpack.config');

const port = process.env.PORT || 9000;
const isDev = process.env.NODE_ENV !== 'production';

const app = express()
app.set('port', port)

app.use(express.static(webpackConfig.output.path))

// Catch all, send index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(webpackConfig.output.path, 'index.html'))
})

const server = app.listen(app.get('port'), err => {
  if (err) {
    return console.log(err);
  }
  const url = `http://localhost:${server.address().port}`
  const mode = isDev ? 'DEV' : 'PROD'
  console.log(
    '\n🌎 ',
    chalk.cyan(`App started in ${mode} mode on`),
    chalk.yellow(url)
  )
})
