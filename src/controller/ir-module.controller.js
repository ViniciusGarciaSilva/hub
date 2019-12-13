const irModuleData = require('../data/ir-module.data')
const commands = require('../model/commands.model')

async function sendCommand(command) {
  try {
    let newCommand = command.toLowerCase()
    if (commands.channels.hasOwnProperty(newCommand)) {
      newCommand = commands.channels[newCommand]
    }
    if (commands.links.hasOwnProperty(newCommand)) {
      await irModuleData.set(commands.links[newCommand])
      return 'Comando ' + newCommand + ' executado com sucesso'  
    } else {
      throw new Error('Comando inválido: ', command);
    }
  }
  catch (error) {
    return error.name + ': ' + error.message
  }
}
exports.sendCommand = sendCommand

async function getLog(date) {
  const parsedDate = dateParse(date)
  try {
    const response = await irModuleData.get(parsedDate)
    return response
  }
  catch (err) {
    console.log(err)
    return []
  }
}
exports.getLog = getLog

function dateParse(date) {
  const year = date.getFullYear().toString()
  const month = date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return year[2] + year[3] + month + day
}
