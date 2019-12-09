const simulationData = require('../data/simulation.data')
const tvModule = require('../modules/tv.module')

async function read(req, res, next) {
  const response = simulationData.read() 
  res.status(200).send(
    response
  );
}
exports.read = read;

async function set(req, res, next) {
  const response = [];
  const input = req.body;
  if (input.start) {
    response[response.length] = await simulationData.setStart(input.start)
  }
  if (input.finish) {
    response[response.length] = await simulationData.setFinish(input.finish)
  }
  if (input.date) {
    response[response.length] = await simulationData.setDate(input.date)
  }
  console.log(response)
  tvModule.dailyLogsSimulation()
  res.status(200).send({
    response
  });
}
exports.set = set;

async function erase(req, res, next) {
  const response = await simulationData.erase();
  res.status(200).send({
    response
  })
}
exports.erase = erase
