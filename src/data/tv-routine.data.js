const axios = require('axios')

async function set(log) {
  try {
    const response = await axios({
      headers: {
        'Content-Length': 0,
        'Content-Type': 'text/plain'
      },
      method: 'post',
      // url: 'https://tv-routine.herokuapp.com/converter/convert',
      url: 'http://localhost:7000/converter/convert',
      responseType: 'text',
      data: log,
    })
    return response.data
  }
  catch {
    return []
  }
  
}
exports.set = set

async function get(period) {
  try {
    // const response = await axios('https://tv-routine.herokuapp.com/routine', {period: period})
    const response = await axios.post(`http://localhost:7000/routine`, {period: period}) // TODO: change to remote server
    return response.data.data
  }
  catch (error) {
    throw new Error(error.message)
  }
}
exports.get = get
