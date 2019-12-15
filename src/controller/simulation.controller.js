const simulationData = require('../data/simulation.data')
const tvRoutineController = require('./tv-routine.controller')
const irModuleController = require('./ir-module.controller')

async function routineAutomation (date) {
  const now = new Date()
  console.log('Setting automation to: ', date)
  setTimeout( () => {
    console.log('\n\n ********LIGAR TV? ******** \n\n')
  }, date.getTime() - now.getTime())
  return null
}

async function routine(req, res, status) {
  const start = new Date(req.body.start)
  const finish = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes() + 2, start.getSeconds())
  try {
    const routine = await tvRoutineController.checkRoutine(start, finish)
    console.log(routine)
    for (let i = 0 ; i < routine.length ; i++) {
      const now = new Date()
      const routineDate = new Date(routine[i].date)
      const interval = routineDate.getTime() - start.getTime()
      const date = new Date(now.getTime() + interval)
      routineAutomation(date)
    }
    res.status(200).send(
      routine
    )
    return 
  }
  catch (error) {
    console.log({status: 'Erro na análise de rotina', error: error.message})
    res.status(400).send({
      status: 'Erro na análise de rotina',
      error: error.message
    })
    return 
  }
}
exports.routine = routine

async function simulate(req, res, status) {
  const data = req.body
  const start = new Date(data.start)
  const finish = new Date(data.finish)
  const date = new Date(data.date)
  const fakeStart = new Date(date)
  const fakeFinish = new Date(finish.getTime() - (start.getTime() - date.getTime()))
  const logs = await irModuleController.getLog(new Date())
  try {
    console.log('Log: \n',logs, '\n\n')
    const newLogs = await transform(start, finish, date, logs)
    console.log('New logs: \n',newLogs, '\n\n')
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
  cleanLog = cleanLog.replace(/\r/g, "")
  return cleanLog
}

