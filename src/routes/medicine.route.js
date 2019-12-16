'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod }
}

Object.defineProperty(exports, '__esModule', { value: true })
var express1 = __importDefault(require('express'))
var router = express1.default.Router()

const boxController = require('../controller/box.controller')
const medicineJobController = require('../controller/medicine-job.controller')

//router.put('/attribute', boxController.updateAttributeLocalLogs)
router.post('/', boxController.setLocalLogs);
router.get('/', boxController.readLocalLogs);
router.put('/', boxController.updateLocalLogs);
router.delete('/', boxController.deleteLocalLogs);
router.post('/renew', medicineJobController.cancelJobKill);
module.exports = router
