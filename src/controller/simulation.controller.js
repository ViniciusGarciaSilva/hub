const simulationData = require('../data/simulation.data')
const tvModule = require('../modules/tv.module')

async function read(req, res, next) {
  const response = simulationData.read() 
  res.status(200).send(
    response
  );
}
exports.read = read;

async function start(req, res, next) {
  const response = [];
  const input = req.body;
  if (input.start) {
    response[response.length] = await simulationData.setStart(input.start)
  }
  if (input.date) {
    response[response.length] = await simulationData.setDate(input.date)
  }
  console.log(response)
  res.status(200).send({
    response
  });
}
exports.start = start;

async function finish(req, res, next) {
  const input = req.body;
  if (input.finish) {
    const response = await simulationData.setFinish(input.finish)
    tvModule.dailyLogsSimulation()
    res.status(200).send({
      response
    });
  } else {
    res.status(400).send(
      'Missing finish !'
    );
  }
}
exports.finish = finish

async function erase(req, res, next) {
  const response = await simulationData.erase();
  res.status(200).send({
    response
  })
}
exports.erase = erase
