const boxController = require('../controller/box.controller')
const boxData = require('../data/box.data')
const cron = require("node-cron")
const box = require('../model/mock') // TODO: criar log local e sincronizar com o banco

let sensorLog = [1, 1, 1, 1, 1, 1, 1, 1]
let alerts = []
let unfinishedRemedies = []
exports.unfinishedRemedies = unfinishedRemedies

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
exports.setAlerts = setAlerts

async function checkBox() {
  cron.schedule("*/1 * * * * *", async () => {
    // const sensors = await boxController.checkSensor() // todo
    console.log('here')
    const sensors = [1,2,1,1,1,1,1]
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
          } else if (!log){
            //Ativar daiarogufurou
            console.log('adicionando ao unfinished remedies')
            unfinishedRemedies.push({
              id:"100",name:"",weekday:"",box: `${index}`,timeOfDay:"",alertLevel:"",criticality:""
            })
            console.log('Inicio conversa')
            // await boxData.nluCreateRemedy();
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
  // const logs = await boxController.readLocalLogs()
  checkBox();
} 
exports.main = main

async function teste() {
  await boxData.nluCreateRemedy();
}
exports.teste = teste