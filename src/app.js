'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })

var express = __importDefault(require('express'))
var bodyParser = __importDefault(require('body-parser'))

var app = express.default()
app.use(bodyParser.default.text())
app.use(bodyParser.default.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.default.json({limit: '50mb'}))
app.use('/', require('./routes/index.route'))
app.use('/medicine', require('./routes/medicine.route'))
app.use('/tv', require('./routes/tv.route'))

const tvModule = require('./modules/tv.module')
const medicineModule = require('./modules/medicine.module')

medicineModule.main()

// tvModule.dailyLogs()
// tvModule.checkRoutine()
// tvModule.teste()

// medicineModule.checkBox()
// medicineModule.setAlerts()

// medicineModule.create() // OK!
// medicineModule.readAll() // OK!
// medicineModule.read() // OK!
// medicineModule.update() // OK!
// medicineModule.remove() // OK!
module.exports = app