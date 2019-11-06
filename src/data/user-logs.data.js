const axios = require('axios')

async function get(date) {
  try {
    const response = await axios.get(`http://192.168.1.70/log/${date}.txt`)
    return response.data
  }
  catch {
    return []
  }
}
exports.get = get
