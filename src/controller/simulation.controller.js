const simulationData = require('../data/simulation.data')
const tvRoutineController = require('./tv-routine.controller')
const irModuleController = require('./ir-module.controller')

async function simulate(req, res, status) {
  const data = req.body
  const start = new Date(data.start)
  const finish = new Date(data.finish)
  const date = new Date(data.date)
  const fakeStart = new Date(date)
  const fakeFinish = new Date(finish.getTime() - (start.getTime() - date.getTime()))
  const logs = await irModuleController.getLog(date)
  try {
    const newLogs = await transform(start, finish, date, logs)
    const response = await tvRoutineController.setLog(newLogs, fakeStart, fakeFinish)
    console.log(response)
    res.status(200).send(
      response
    )
  }
  catch (error) {
    console.log(error)
    res.status(400).send({
      status: 'Erro na simulação',
      error: error.message
    })
  }
}
exports.simulate = simulate

async function transform(start, finish, date, logs) {
  const logsCSV = toCSV(logs)
  const data = start + ',' + finish + '\n' + date + '\n' + logsCSV
  const newData = await simulationData.transform(data)
  return newData
}
exports.transform = transform

function toCSV(log) {
  let cleanLog = log.replace(/ /g, ",")
  return cleanLog
}

