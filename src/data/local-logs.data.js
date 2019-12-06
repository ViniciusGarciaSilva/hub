const jsonfile = require('jsonfile')
const localLogs = './src/local-logs.json'

async function read() {
  let logs
  try {
    logs = await jsonfile.readFile(localLogs)
    return logs
  }
  catch {
    console.log('erro de leitura no log local')
    return []
  }
}
exports.read = read

async function set(dose) {
  let logs = await read()
  if (dose.id === '') {
    dose.id = logs.length - 1;
  }
  logs.push(dose)
  await jsonfile.writeFile(localLogs, logs, function(err) {
    if (err) console.log(err)
  })
  return 
}
exports.set = set

async function update(dose) {
  let logs = await read()
  const logIndex = logs.findIndex(log => log.id === dose.id)
  if(logIndex !== undefined){
    logs[logIndex] = dose
    await jsonfile.writeFile(localLogs, logs, function(err) {
      if (err) console.log(err)
    })
  }
  return
}
exports.update = update

async function erase(dose) {
  let logs = await read()
  const logIndex = logs.findIndex(log => log.id === dose.id)
  if(logIndex !== undefined){
    logs.splice(logIndex, 1)
    await jsonfile.writeFile(localLogs, logs, function(err) {
      if (err) console.log(err)
    })
  }
  return
}
exports.erase = erase
