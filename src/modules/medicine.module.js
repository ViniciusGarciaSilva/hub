const boxController = require('../controller/box.controller')
const medicineJobController = require('../controller/medicine-job.controller')

async function main() {
  const logs = await boxController.readLocalLogs()
  logs.forEach((event) => {
    console.log(event)
    medicineJobController.createAlert(event)
  })
  medicineJobController.checkBox()
}
exports.main = main


//async function readAll() {
//  const response = await boxController.readAllMedicine()
//  console.log(response)
//}
//exports.readAll = readAll
//
//async function read() {
//  const response = await boxController.readMedicine(4)
//  console.log(response)
//}
//exports.read = read
//
//async function create() {
//  const medicineTest = [{
//    name: "Heroína",
//    id: 4,
//    weekday: 0,
//    box: 6,
//    timeOfDay: "00:00:00",
//    alertLevel: 1,
//    criticality: 2
//  }]
//  const response = await boxController.createMedicine(medicineTest)
//  console.log(response)
//}
//exports.create = create
//
//async function update() {
//  const medicineTest = {
//    name: "DROGAS PESADAS",
//    id: 4,
//    weekday: 0,
//    box: 0,
//    timeOfDay: "10:12:23",
//    alertLevel: 1,
//    criticality: 2
//  }
//  const response = await boxController.updateMedicine(medicineTest)
//  console.log(response)
//}
//exports.update = update
//
//async function remove() {
//  const response = await boxController.removeMedicine(4)
//  console.log(response)
//}
//exports.remove = remove
//
//async function main() {
//  initAlerts();
//  checkBox();
//}
//exports.main = main
//
//async function teste() {
//  await boxData.nluCreateRemedy();
//}
//exports.teste = teste