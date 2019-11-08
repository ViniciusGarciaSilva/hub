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


