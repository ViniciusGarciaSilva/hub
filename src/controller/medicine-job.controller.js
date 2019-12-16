const cron = require("node-cron")
const localLogsData = require('../data/local-logs.data')
const moment = require('moment')
const speaker = require('../data/speaker.data')
const boxController = require('./box.controller')

const RESTOCK_TIMEOUT = 1

const sensorLog = [2, 2, 2, 2, 2, 2, 2, 2]
const alerts = []

const alertDelay = [[0,0,0],[1,1,1],[15,15,5]]

const jobs = []
const jobKiller = []

async function createAlert(event) {
    const time = moment(event.timeOfDay, 'H:m:s')
    console.log('setting cron job: ', time.hour(), time.minute())
    jobs[event.id] = []
    jobs[event.id][0] = cron.schedule(`${time.minute()} ${time.hour()} * * ${event.weekday}`, async () => {
        rele = await boxController.setSignal(event.box, 2, 0)
        alerts.push({ box: event.box, level: 0 })
        console.log(event, rele)
    }, { timezone: "America/Sao_Paulo" })
    if(event.alertLevel > 0){
        time.add(alertDelay[event.alertLevel][0],'m')
        jobs[event.id][1] = cron.schedule(`${time.minute()} ${time.hour()} * * ${event.weekday}`, async () => {
            rele = await boxController.setSignal(event.box, 2, 1)
            alerts.push({ box: event.box, level: 1 })
            console.log(event, rele)
        }, { timezone: "America/Sao_Paulo" })
        time.add(alertDelay[event.alertLevel][1],'m')
        jobs[event.id][2] = cron.schedule(`${time.minute()} ${time.hour()} * * ${event.weekday}`, async () => {
            speaker.messageToSpeaker('Está na hora de tomar seu remédio')
            alerts.push({ box: event.box, level: 2 })
            time.add(alertDelay[event.alertLevel][2],'m')
            jobs[event.id][3] = cron.schedule(`${time.minute()} ${time.hour()} * * ${event.weekday}`, async () => {
                alerts.forEach(async alert => {
                    if (alert.box == event.box) {
                        console.log('achou alerta')
                        if(alert.level < 2 ){
                            await boxController.setSignal(event.box, '1', alert.level)
                        }
                        console.log(event.box, '1',alert.level)
                        alerts.splice(event.box,1)
                    }
                })
            })
            console.log('speaker alarm')
        }, { timezone: "America/Sao_Paulo" })
    }
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
            alerts.forEach(async alert => {
                if (alert.box == index) {
                    console.log('achou alerta')
                    if(alert.level < 2 ){
                        await boxController.setSignal(index, '1', alert.level)
                    }
                    console.log(index, '1',alert.level)
                    alerts.splice(index,1)
                }
            })
            if (!log) {
                //Ativar daiarogufurou
                activateStockDialog(index)
                // await boxData.nluCreateRemedy();
            } else {
                const intendedTime = moment(log.timeOfDay,'H:m:s')
                console.log(intendedTime.format('H:m:s-d'))
                if(intendedTime.isAfter(moment().add(10,'m')) || intendedTime.day() != log.weekday){
                    console.log('Ainda não está na hora do seu medicamento')
                    speaker.messageToSpeaker('Ainda não está na hora do seu medicamento')
                    // TODO: do something to ask if this is correct
                } else {
                    console.log('Deseja inserir novo medicamento?')
                    // TODO ver se eh isso mesmo
                    speaker.conversationToSpeaker('Desejo renovar medicamento?')
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
    // TODO ver se eh isso mesmo
    speaker.conversationeToSpeaker('Desejo inserir um novo remédio')
    console.log('Inicio conversa')
}

function setJobKill(log) {
    const now = moment().add(RESTOCK_TIMEOUT, 'm')
    if(jobs[log.id][3]){
        jobs[log.id].pop().destroy()
    }
    jobs[log.id].forEach(stoppedJob=> stoppedJob.stop())
    console.log(now.minute(), now.hour())
    const job = cron.schedule(`${now.minute()} ${now.hour()} * * *`, async () => {
        // TODO: checar se o remedio ja foi tomado 
        console.log('jobs ' + log.id + ': ' + jobs[log.id])
        await localLogsData.erase(log)
        if (jobs[log.id] && jobs.length > 0) {
            jobs.splice(log.id,1)[0].forEach(destroyedJob=> destroyedJob.destroy())
        }
        jobKiller.shift().job.destroy()
        console.log(jobKiller)
        console.log('jobs ' + log.id + ': ' + jobs[log.id])
    }, { timezone: "America/Sao_Paulo" })
    jobKiller.push({job, id:log.id})
}

function cancelJobKill(req, res, next) {
    const killer = jobKiller.shift()
    killer.job.destroy()
    jobs[killer.id].forEach(stoppedJob=> stoppedJob.start())
    res.status(200).send('Success!');
}
exports.cancelJobKill = cancelJobKill