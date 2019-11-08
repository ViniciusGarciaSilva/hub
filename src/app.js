const userLogsController = require('./controller/user-logs.controller')
const tvRoutineController = require('./controller/tv-routine.controller')
const boxController = require('./controller/box.controller')
const fs = require("fs")
const cron = require("node-cron")
const box = require('./model/mock') // TODO: criar log local e sincronizar com o banco

let sensorLog = [1, 1, 1, 1, 1, 1, 1, 1]
let alerts = []

async function dailyLogs() {
  let yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const logs = await userLogsController.getLog(yesterday)
  console.log(logs)
  const response = await tvRoutineController.setLog(logs, new Date(1569628947000)) // CHANGE THISSSSSSSSSSSSSS
  console.log(response.status)
}

async function checkRoutine() {
  let today = new Date()
  const response = await tvRoutineController.checkRoutine(new Date(1569628947000)) // CHANGE THISSSSSSSSSSSSSS
  todayLog = response
  console.log(response)
  return response
}

async function setAlerts() {
  box.box.forEach((event) => {
    const time = event.timeOfDay.split(":")
    cron.schedule(`${time[1]} ${time[0]} * * ${event.weekday}`, async () =>{
      // TODO: checar se o remedio ja foi tomado 
      if(1) {
        rele = await boxController.setSignal(event.box, 2, event.alertLevel)
        alerts.push({box: event.box, level: event.alertLevel})
      }      
      console.log(event, rele)
    }, {timezone: "America/Sao_Paulo"})
  })
}

async function checkBox() {
  cron.schedule("*/1 * * * * *", async () => {
    const sensor = await boxController.checkSensor()
    sensor.forEach( async(sensor, index) => {
      if (sensor !== sensorLog[index]) {
        console.log('identificou mudanca no sensor: ', index)
        if (sensor == '2') {
          console.log('abertura')
          let alert = alerts.find( alert => alert.box == index) 
          console.log(alert)
          if (alert) {
            console.log('achou alerta')
            rele = await boxController.setSignal(index, '1', alert.level)
          }
          // TODO: seta remedio como tomado
        } 
      }
    })
  })
}

// setTimeout(dailyLogs, 300000)
// dailyLogs()
checkBox()
setAlerts()

