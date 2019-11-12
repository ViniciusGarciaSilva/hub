const boxData = require('../data/box.data')

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