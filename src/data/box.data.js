const axios = require('axios')
const newAgent = require('../newagent-16dd6-2707dae8696b.json');
const dialogflow = require('dialogflow');
const uuid = require('uuid');

async function nluCreateRemedy() {
  try {
    await axios.post('https://d2496e03.ngrok.io/speaker/message', { // todo
      "stt": "google",
      "nlu": "dialog_flow",
      "tts": "google",
      "message": "Quero adicionar um remédio"
    })
  }
  catch {
    console.log('')
  }
}
exports.nluCreateRemedy = nluCreateRemedy;

async function getSensor() {
  try {
    const response = await axios.get(`http://192.168.43.184/json?fields=sensor`)
    return response.data.sensor
  }
  catch {
    console.log('erro no request')
    return []
  }
}
exports.getSensor = getSensor

async function setSignal(signal, value) {
  try {
    const response = await axios.get(`http://192.168.43.184/?r${signal}=${value}&fields=rele`)
    return response.data.rele
  }
  catch {
    console.log('erro no request')
    return []
  }
}
exports.setSignal = setSignal

// ativa speaker, app, etc
async function setAlert() {
  try {

  }
  catch{

  }
}
exports.setAlert = setAlert

async function create(medicines) {
  try {
    const response = await axios.post('https://medicine-api-db.herokuapp.com/medicine', { data: medicines })
    return response.data
  }
  catch {
    return response
  }
}
exports.create = create

async function readAll() {
  try {
    const response = await axios.get('https://medicine-api-db.herokuapp.com/medicine')
    return response.data
  }
  catch {
    return response
  }
}
exports.readAll = readAll

async function read(id) {
  try {
    const response = await axios.get(`https://medicine-api-db.herokuapp.com/medicine/${id}`)
    return response.data
  }
  catch {
    return response
  }
}
exports.read = read

async function update(medicine) {
  try {
    const response = await axios.put(`https://medicine-api-db.herokuapp.com/medicine/${medicine.id}`, { ...medicine })
    return response.data
  }
  catch {
    return response
  }
}
exports.update = update

async function remove(id) {
  try {
    const response = await axios.delete(`https://medicine-api-db.herokuapp.com/medicine/${id}`)
    return response.data
  }
  catch {
    return response
  }
}
exports.remove = remove