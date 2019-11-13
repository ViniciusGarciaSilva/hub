const tvRoutineData = require('../data/tv-routine.data')
const fs = require("fs")

async function checkRoutine(date) {
  const period = parseDate(date)
  try {
    const routine = await tvRoutineData.get(period)
    routine.filter(element => element.channel !== 0)
    return routine
  }
  catch {
    console.log(routine)
    return []
  }
}
exports.checkRoutine = checkRoutine

async function setLog(log, date) {
  const period = parseDate(date)
  const cleanLog = clearLog(log)
  const data = period + cleanLog
  try {
    const response = await tvRoutineData.set(data)
    return response
  }
  catch {
    return []  
  }
}
exports.setLog = setLog

function parseDate(date) {
  let start = new Date(date)
  let end = new Date(date)
  date.getTimezoneOffset() === 120 ? start.setHours(1) : start.setHours(0) // SUMMER TIME
  start.setMinutes(0)
  start.setSeconds(0)
  start.setMilliseconds(0)
  date.getTimezoneOffset() === 120 ? end.setHours(24) : end.setHours(23) // SUMMER TIME
  end.setMinutes(59)
  end.setSeconds(59)
  end.setMilliseconds(59)
  let period = start.toString() + ',' + end.toString() + '\n'
  console.log('period: ', period)
  return period
}

function clearLog(log) {
  let cleanLog = log.replace(/ /g, ",")
  return cleanLog
}
