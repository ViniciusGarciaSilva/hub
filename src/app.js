const userLogsController = require('./controller/user-logs.controller')
const tvRoutineController = require('./controller/tv-routine.controller')
const fs = require("fs")

async function dailyLogs() {
  let yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const logs = await userLogsController.getLog(yesterday)
  console.log(logs)
  const routine = await tvRoutineController.setLog(logs, yesterday)
  console.log(routine.status)
}

// setTimeout(dailyLogs, 300000)
dailyLogs()
