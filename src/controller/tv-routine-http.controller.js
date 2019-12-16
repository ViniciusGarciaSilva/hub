const irModule = require('./ir-module.controller');

async function sendCommand (req, res, next) {
  const channel = req.body.channel;
  console.log('\nEnviando comando para a TV: ', channel)
  const response = await irModule.sendCommand(channel)
  console.log(response)
  res.status(200).send(
    response
  )
}
exports.sendCommand = sendCommand
