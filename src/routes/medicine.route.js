'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod }
}

Object.defineProperty(exports, '__esModule', { value: true })
var express1 = __importDefault(require('express'))
var router = express1.default.Router()

var boxController = require('../controller/box.controller')

router.post('/', boxController.setLocalLogs);
router.get('/', boxController.readLocalLogs);
router.put('/', boxController.updateLocalLogs);
router.delete('/', boxController.deleteLocalLogs);
module.exports = router
