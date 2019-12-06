const boxData = require('../data/box.data')
const localLogsData = require('../data/local-logs.data')
const boxModule = require('../modules/medicine.module')
const moment = require('moment')
// TODO: criar uma camada para diferenciar http request de chamadas normais da aplicação

async function readLocalLogs() {
  try {
    const logs = await localLogsData.read()
    return logs
  }
  catch (err) {
    console.log(err)
    return []
  }
}
exports.readLocalLogs = readLocalLogs

async function setLocalLogs(req, res, next) {
  let dose = req.body
  console.log('dose: ', dose)
  const unfinishedRemedies = boxModule.unfinishedRemedies
  console.log('unfinished remedies: ', unfinishedRemedies)
  if (unfinishedRemedies.length > 0) {
    dose.id = unfinishedRemedies[unfinishedRemedies.length - 1] .id
    dose.box = unfinishedRemedies[unfinishedRemedies.length - 1].box
    unfinishedRemedies.splice(unfinishedRemedies.length - 1)
    console.log('new', unfinishedRemedies)
  }
  try {
    dose.timeOfDay = moment(dose.timeOfDay).format('H:m:s')
    await localLogsData.set(dose)
    boxModule.createAlert(dose)
    res.status(200).send('Success!');
  }
  catch (err) {
    res.status(200).send(err)
  }
}
exports.setLocalLogs = setLocalLogs

async function updateAttributeLocalLogs(req, res, next) {
  const attribute = req.body.attribute;
  const value = req.body.value;
  try {
    await localLogsData.updateAttribute(attribute, value);
    res.status(200).send('Success!')
  }
  catch (err) {
    console.log(err)
    res.status(200).send(err);
  }
}
exports.updateAttributeLocalLogs = updateAttributeLocalLogs;

async function updateLocalLogs(req, res, next) {
  const dose = req.body
  try {
    await localLogsData.update(dose)
    res.status(200).send('Success!');
  }
  catch (err) {
    res.status(200).send(err)
  }
}
exports.updateLocalLogs = updateLocalLogs

async function deleteLocalLogs(req, res, next) {
  const dose = req.body
  try {
    await localLogsData.erase(dose)
    res.status(200).send('Success!');
  }
  catch (err) {
    res.status(200).send(err)
  }
}
exports.deleteLocalLogs = deleteLocalLogs

async function checkSensor() {
  try {
    const sensor = await boxData.getSensor()
    return sensor
  }
  catch {
    console.log('error')
    return []
  }
}
exports.checkSensor = checkSensor

async function setSignal(signal, value, alert) {
  try {
    let buzzer, rele
    if (alert==='1') {
      buzzer = boxData.setSignal(7, value)
    }
    rele = boxData.setSignal(signal, value)
    await Promise.all([buzzer, rele])
    return rele  
  }
  catch {
    console.log('error')
    return []
  }
}
exports.setSignal = setSignal

async function createMedicine(medicines) {
  try {
    const response = await boxData.create(medicines)
    return response
  } 
  catch {
    console.log('Erro ao criar medicina')
    return response
  } 
}
exports.createMedicine = createMedicine

async function readAllMedicine() {
  try {
    const response = await boxData.readAll()
    return response
  } 
  catch {
    console.log('Erro ao ler medicinas')
    return response
  } 
}
exports.readAllMedicine = readAllMedicine

async function readMedicine(id) {
  try {
    const response = await boxData.read(id)
    return response
  } 
  catch {
    console.log('Erro ao ler medicina')
    return response
  } 
}
exports.readMedicine = readMedicine

async function updateMedicine(medicine) {
  try {
    const response = await boxData.update(medicine)
    return response
  } 
  catch {
    console.log('Erro ao atualizar medicina')
    return response
  } 
}
exports.updateMedicine = updateMedicine

async function removeMedicine(id) {
  try {
    const response = await boxData.remove(id)
    return response
  } 
  catch {
    console.log('Erro ao deletar medicina')
    return response
  } 
}
exports.removeMedicine = removeMedicine
