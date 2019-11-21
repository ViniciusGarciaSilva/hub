const boxController = require('../controller/box.controller')
const boxData = require('../data/box.data')
const cron = require("node-cron")
const localLogsData = require('../data/local-logs.data')

let sensorLog = [2, 2, 2, 2, 2, 2, 2, 2]
let alerts = []
let unfinishedRemedies = []
exports.unfinishedRemedies = unfinishedRemedies
let jobs = []

async function createAlert(event) {
  const time = event.timeOfDay.split(":")
  console.log('setting cron job: ', time[0], time[1])
  const job = cron.schedule(`${time[1]} ${time[0]} * * ${event.weekday}`, async () => {
    // TODO: checar se o remedio ja foi tomado 
    if (1) {
      rele = await boxController.setSignal(event.box, 2, event.alertLevel)
      alerts.push({ box: event.box, level: event.alertLevel })
    }
    console.log(event, rele)
  }, { timezone: "America/Sao_Paulo" })
  jobs[event.id] = job
}
exports.createAlert = createAlert

async function initAlerts() {
  const logs = await boxController.readLocalLogs()
  logs.forEach((event) => {
    createAlert(event)
  })
}
exports.setAlerts = initAlerts

async function checkBox() {
  cron.schedule("*/1 * * * * *", async () => {
    const sensors = await boxController.checkSensor() // todo
    const logs = await boxController.readLocalLogs()
    sensors.forEach(async (sensor, index) => {
      if (sensor !== sensorLog[index]) {
        console.log('identificou mudanca no sensor: ', index)
        sensorLog[index] = sensor
        if (sensor == '2') {
          console.log('abertura')
          let log = logs.find(log => log.box == index)
          let alert = alerts.find(alert => alert.box == index)
          if (alert) {
            console.log('achou alerta')
            rele = await boxController.setSignal(index, '1', alert.level)
          }
          if (!log) {
            //Ativar daiarogufurou
            console.log('adicionando ao unfinished remedies')
            unfinishedRemedies.push({
              id: "100", name: "", weekday: "", box: `${index}`, timeOfDay: "", alertLevel: "", criticality: ""
            })
            console.log('Inicio conversa')
            // await boxData.nluCreateRemedy();
          } else {
            console.log('jobs ' + log.id + ': ' + jobs[log.id])
            await localLogsData.erase(log)
            if (jobs[log.id])
              jobs.splice(log.id)[0].stop()
            console.log('jobs ' + log.id + ': ' + jobs[log.id])
          }
          // TODO: seta remedio como tomado
        }
      }
    })
  })
}
exports.checkBox = checkBox

async function readAll() {
  const response = await boxController.readAllMedicine()
  console.log(response)
}
exports.readAll = readAll

async function read() {
  const response = await boxController.readMedicine(4)
  console.log(response)
}
exports.read = read

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
exports.create = create

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
exports.update = update

async function remove() {
  const response = await boxController.removeMedicine(4)
  console.log(response)
}
exports.remove = remove

async function main() {
  initAlerts();
  checkBox();
}
exports.main = main

async function teste() {
  await boxData.nluCreateRemedy();
}
exports.teste = teste