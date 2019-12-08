const cron = require("node-cron")
const localLogsData = require('../data/local-logs.data')
const moment = require('moment')
const speaker = require('../data/speaker.data')
const boxController = require('./box.controller')

const RESTOCK_TIMEOUT = 2

const sensorLog = [2, 2, 2, 2, 2, 2, 2, 2]
const alerts = []

const jobs = []
const jobKiller = []

async function createAlert(event) {
    const time = event.timeOfDay.split(":")
    console.log('setting cron job: ', time[0], time[1])
    const job = cron.schedule(`${time[1]} ${time[0]} * * ${event.weekday}`, async () => {
        rele = await boxController.setSignal(event.box, 2, event.alertLevel)
        alerts.push({ box: event.box, level: event.alertLevel })
        console.log(event, rele)
    }, { timezone: "America/Sao_Paulo" })
    jobs[event.id] = job
}
exports.createAlert = createAlert


async function checkBox() {
    cron.schedule("*/2 * * * * *", async () => {
        const sensors = await boxController.checkSensor() // todo
        const logs = await boxController.readLocalLogs()
        sensors.forEach(checkSensor(logs))
        //console.log('jobs: ',jobs,' killers: ',jobKiller,' alerts: ', alerts)
    })
}
exports.checkBox = checkBox

const checkSensor = (logs) => async (sensor, index) => {
    if (sensor !== sensorLog[index]) {
        console.log('identificou mudanca no sensor: ', index)
        sensorLog[index] = sensor
        if (sensor == '2') {
            console.log('abertura')
            let log = logs.find(log => log.box == index)
            let alert = alerts.find(alert => alert.box == index)
            if (alert) {
                console.log('achou alerta')
                //await boxController.setSignal(index, '1', alert.level)
                console.log(index, '1',alert.level)
                alerts.splice(index,1)
            }
            if (!log) {
                //Ativar daiarogufurou
                activateStockDialog(index)
                // await boxData.nluCreateRemedy();
            } else {
                const intendedTime = moment(log.timeOfDay,'H:m:s')
                console.log(intendedTime.format('H:m:s-d'))
                if(intendedTime.isAfter(moment().add(10,'m')) || intendedTime.day() != log.weekday){
                    console.log('Ainda não está na hora do seu medicamento')
                    // TODO: do something to ask if this is correct
                } else {
                    console.log('Deseja inserir novo medicamento?')
                    setJobKill(log)
                }
            }
            // TODO: seta remedio como tomado
        }
    }
}

function activateStockDialog(index) {
    console.log('adicionando ao unfinished remedies')
    
    const unfinishedRemedies = boxController.unfinishedRemedies
    unfinishedRemedies.push({
        id: null, name: null, weekday: null, box: `${index}`, timeOfDay: null, alertLevel: null, criticality: null
    })
    console.log('Inicio conversa')
}

function setJobKill(log) {
    const now = moment().add(RESTOCK_TIMEOUT, 'm')
    console.log(now.minute(), now.hour())
    const job = cron.schedule(`${now.minute()} ${now.hour()} * * *`, async () => {
        // TODO: checar se o remedio ja foi tomado 
        console.log('jobs ' + log.id + ': ' + jobs[log.id])
        await localLogsData.erase(log)
        if (jobs[log.id]) {
            jobs.splice(log.id,1)[0].stop()
        }
        jobKiller.shift().stop()
        console.log(jobKiller)
        console.log('jobs ' + log.id + ': ' + jobs[log.id])
    }, { timezone: "America/Sao_Paulo" })
    jobKiller.push(job)
}

function cancelJobKill(req, res, next) {
    jobKiller.shift().stop()
    res.status(200).send('Success!');
}
exports.cancelJobKill = cancelJobKill