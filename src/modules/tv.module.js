const irModuleController = require('../controller/ir-module.controller')
const tvRoutineController = require('../controller/tv-routine.controller')
const simulationData = require('../data/simulation.data')
const simulationMock = require('../simulation.test');
const cron = require("node-cron")
const papa = require('papaparse')

let todayRoutine = []

async function dailyLogsSimulation() {
  const simulation = await simulationData.read()
  let start = new Date(simulation.start * 1000)
  let finish = new Date(simulation.finish * 1000)
  if (start.getTimezoneOffset() === 120) {
    start.setHours(start.getHours() - 1)
  }
  if (finish.getTimezoneOffset() === 120) {
    finish.setHours(finish.getHours() - 1)
  }
  console.log(start, finish)
  let logs = simulationMock.logs
  // const logs = simulation.date ? await irModuleController.getLog(simulation.date) : [] 
  const logsParsed = papa.parse(logs).data
  const newLogs = logsParsed.map(log => {
    let newLog = log
    oldTimestamp = new Date(log[0]*1000).getTime() / 1000; // timestamp(string) => date => timestramp (int)
    newTimestamp = new Date((simulation.date + oldTimestamp - simulation.start)*1000).getTime() / 1000
    newLog[0] = newTimestamp.toString()
    return newLog
  })

  const response = await tvRoutineController.setLog(newLogs, null, start, finish) // TODO: CHANGE
  console.log(response)
}
exports.dailyLogsSimulation = dailyLogsSimulation

function dailyLogs(time) {
  cron.schedule(`0 0 * * *`, async () => {
    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const logs = await irModuleController.getLog(yesterday)
    console.log('Yesterday logs: \n', logs)
    const response = await tvRoutineController.setLog(logs, new Date(1569628947000), null, null) // TODO: CHANGE
    console.log(response.status)
  })
}
exports.dailyLogs = dailyLogs

async function checkRoutine() {
  let today = new Date()
  const routine = await tvRoutineController.checkRoutine(new Date(1569628947000)) // TODO: CHANGE
  console.log('Routine: ', routine)
  todayRoutine = routine
  for (let i = 0; i < todayRoutine.length; i++) {
    setTodayRoutine(todayRoutine[i].date)
  }
  return routine
}
exports.checkRoutine = checkRoutine

async function setTodayRoutine(dateString) {
  const date = new Date(dateString)
  if (date.getTimezoneOffset() === 120) { // SUMMER TIME
    date.setHours(date.getHours() - 1)
  }
  const now = new Date()
  if (date.getTimezoneOffset() === 120) { // SUMMER TIME
    now.setHours(now.getHours() - 1)
  }
  const millisTill = date.getTime() - now.getTime()
  console.log(millisTill)
  if(millisTill>0) {
    setTimeout(() => {console.log('oi')}, millisTill)
  }
}
exports.setTodayRoutine = setTodayRoutine

async function teste() {
  const response = await irModuleController.sendCommand('globo')
  console.log(response)
}
exports.teste = teste

async function main() {

}