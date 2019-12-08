const axios = require('axios')

async function sendToSpeaker(message) {
    try {
      await axios.post('https://b7cbbc40.ngrok.io/speaker/message', { // todo
        "stt": "google",
        "nlu": "dialog_flow",
        "tts": "polly",
        "message": message
      })
    }
    catch {
      console.log('')
    }
  }
  exports.sendToSpeaker = sendToSpeaker;