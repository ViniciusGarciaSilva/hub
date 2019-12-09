const irModule = require('./ir-module.controller');

async function sendCommand (req, res, next) {
  const channel = req.body.channel;
  console.log(channel)
  const response = await irModule.sendCommand(channel)
  console.log(response)
}
exports.sendCommand = sendCommand
