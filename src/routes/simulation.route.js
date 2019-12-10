'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod }
}

Object.defineProperty(exports, '__esModule', { value: true })
var express1 = __importDefault(require('express'))
var router = express1.default.Router()

var simulationController = require('../controller/simulation.controller.js')

router.post('/read', simulationController.read);
router.post('/erase', simulationController.erase);
router.post('/start', simulationController.start);
router.post('/finish', simulationController.finish);

module.exports = router
