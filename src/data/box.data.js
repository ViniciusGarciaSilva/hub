const axios = require('axios')

async function getSensor() {
  try {
    const response = await axios.get(`http://192.168.4.1/json?fields=sensor`)
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
    const response = await axios.get(`http://192.168.4.1/?r${signal}=${value}&fields=rele`)
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
