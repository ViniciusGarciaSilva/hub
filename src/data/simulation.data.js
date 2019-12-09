const jsonfile = require('jsonfile')
const simulationLog = 'src/simulation.json'

async function read() {
  let simulation
  try {
    simulation = await jsonfile.readFile(simulationLog)
    return simulation
  }
  catch (error) {
    return error
  }
}
exports.read = read

async function setDate(date) {
  let simulation = await read()
  simulation.date = date
  try {
    await jsonfile.writeFile(simulationLog, simulation, function(err) {
      if (err) console.log(err)
    })
    return 'Date set to: ' + date
  }
  catch (error) {
    return error
  }
}
exports.setDate = setDate

async function setStart(start) {
  let simulation = await read()
  simulation.start = start
  try {
    await jsonfile.writeFile(simulationLog, simulation, function(err) {
      if (err) console.log(err)
    })
    return 'Start set to: ' + start
  }
  catch (error) {
    return error
  }
}
exports.setStart = setStart

async function setFinish(finish) {
  let simulation = await read()
  simulation.finish = finish
  try {
    await jsonfile.writeFile(simulationLog, simulation, function(err) {
      if (err) console.log(err)
    })
    return 'Finish set to: ' + finish
  }
  catch (error) {
    return error
  }
}
exports.setFinish = setFinish

async function erase() {
  let simulation = {}
  try {
    await jsonfile.writeFile(simulationLog, simulation, function(err) {
      if (err) console.log(err)
    })
    return 'Simulation erased!' 
  }  
  catch (error) {
    console.log('erro ao apagar log.', error)
    return error
  }
}
exports.erase = erase
