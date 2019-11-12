const userLogsData = require('../data/user-logs.data')

async function getLog(date) {
  const parsedDate = dateParse(date)
  try {
    const response = await userLogsData.get(parsedDate)
    return response
  }
  catch {
    console.log(response)
    return []
  }
}
exports.getLog = getLog

function dateParse(date) {
  const year = date.getFullYear().toString()
  const month = date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return year[2] + year[3] + month + day
}
