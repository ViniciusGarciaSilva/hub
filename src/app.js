const userLogsController = require('./controller/user-logs.controller')
const tvRoutineController = require('./controller/tv-routine.controller')
const boxController = require('./controller/box.controller')
const fs = require("fs")
const cron = require("node-cron")
const box = require('./model/mock') // TODO: criar log local e sincronizar com o banco

let sensorLog = [1, 1, 1, 1, 1, 1, 1, 1]
let alerts = []

function dailyLogs(time) {
  cron.schedule(`0 0 * * *`, async () => {
    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const logs = await userLogsController.getLog(yesterday)
    console.log('Yesterday logs: \n', logs)
    const response = await tvRoutineController.setLog(logs, new Date(1569628947000)) // TODO: CHANGE
    console.log(response.status)
  })
}

async function checkRoutine() {
  let today = new Date()
  const routine = await tvRoutineController.checkRoutine(new Date(1569628947000)) // TODO: CHANGE
  console.log('Routine: ', routine)
  // TODO: enviar isso para o módulo IR.
  return response
}

async function setAlerts() {
  box.box.forEach((event) => {
    const time = event.timeOfDay.split(":")
    cron.schedule(`${time[1]} ${time[0]} * * ${event.weekday}`, async () => {
      // TODO: checar se o remedio ja foi tomado 
      if (1) {
        rele = await boxController.setSignal(event.box, 2, event.alertLevel)
        alerts.push({ box: event.box, level: event.alertLevel })
      }
      console.log(event, rele)
    }, { timezone: "America/Sao_Paulo" })
  })
}

async function checkBox() {
  cron.schedule("*/1 * * * * *", async () => {
    const sensor = await boxController.checkSensor()
    sensor.forEach(async (sensor, index) => {
      if (sensor !== sensorLog[index]) {
        console.log('identificou mudanca no sensor: ', index)
        if (sensor == '2') {
          console.log('abertura')
          let alert = alerts.find(alert => alert.box == index)
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

async function readAll() {
  const response = await boxController.readAllMedicine()
  console.log(response)
}

async function read() {
  const response = await boxController.readMedicine(4)
  console.log(response)
}

async function create() {
  const medicineTest = [{
    name: "Heroína",
    id: 4,
    weekday: 0,
    box: 6,
    timeOfDay: "00:00:00",
    alertLevel: 1,
    criticality: 2
  }]
  const response = await boxController.createMedicine(medicineTest)
  console.log(response)
}

async function update() {
  const medicineTest = {
    name: "DROGAS PESADAS",
    id: 4,
    weekday: 0,
    box: 0,
    timeOfDay: "10:12:23",
    alertLevel: 1,
    criticality: 2
}
  const response = await boxController.updateMedicine(medicineTest)
  console.log(response)
}

async function remove() {
  const response = await boxController.removeMedicine(4)
  console.log(response)
}

// setTimeout(dailyLogs, 300000)
// dailyLogs()
// checkBox()
// setAlerts()

// create() // OK!
// readAll() // OK!
// read() // OK!
// update() // OK!
// remove() // OK!