const app = require('./app')

// Load HTTP module
const port = normalizaPort(process.env.PORT || '6000')

function normalizaPort (val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

app.listen(port, function () {
  console.log(`app listening on port ${port}`)
})

