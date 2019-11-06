const tvRoutineData = require('../data/tv-routine.data')
const fs = require("fs")

async function setLog(log, date) {
  const logParsed = logParse(log, date)
  try {
    const routine = await tvRoutineData.set(logParsed)
    return routine
  }
  catch {
    return []  
  }
}
exports.setLog = setLog

function logParse(log, date) {
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
  let cleanLog = log.replace(/ /g, ",")
  fs.writeFileSync('output.txt', period + cleanLog)
  return period + cleanLog
}
