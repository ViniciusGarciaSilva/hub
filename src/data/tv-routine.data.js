const axios = require('axios')

async function set(log) {
  try {
    const response = await axios({
      headers: {
        'Content-Length': 0,
        'Content-Type': 'text/plain'
      },
      method: 'post',
      // url: 'https://tv-routine.herokuapp.com/converter/IA',
      url: 'http://localhost:5000/converter/IA',
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
    const response = await axios.post(`http://localhost:5000/routine`, {period: period})
    return response.data
  }
  catch {
    return []
  }
  
}
exports.get = get