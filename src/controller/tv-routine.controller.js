const tvRoutineData = require('../data/tv-routine.data')
const fs = require("fs")

async function checkRoutine(start, finish) {
  const period = start.toString() + ',' + finish.toString()
  try {
    const routine = await tvRoutineData.get(period)
    routine.filter(element => element.channel !== 0)
    return routine
  }
  catch (error) {
    throw new Error(error.message)
  }
}
exports.checkRoutine = checkRoutine

async function setLog(log, start, finish) {
  const period = start.toString() + ',' + finish.toString()
  const cleanLog = toCSV(log)
  const data = period + cleanLog
  try {
    const response = await tvRoutineData.set(data)
    return response
  }
  catch (error) {
    console.log(error)
    return []  
  }
}
exports.setLog = setLog

function toCSV(log) {
  let cleanLog = log.replace(/ /g, ",")
  return cleanLog
}
