const jsonfile = require('jsonfile')
const localLogs = './src/local-logs.json'

async function read() {
  let logs
  await jsonfile.readFile(localLogs, function(err, obj) {
    if (err) console.log(err)
    console.log(obj)
    logs = obj
  })
  return logs
}
exports.read = read
