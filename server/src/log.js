import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const guatemala = 'America/Guatemala'
const filename = fileURLToPath(import.meta.url)
const dirname1 = dirname(filename)

// Crear una función para obtener la fecha y hora actual en el formato deseado y zona horaria
const nowInGuatemala = () => {
  const now = new Date()
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: guatemala,
    hour12: false,
  }).format(now)
  return formattedDate
}

const logStream = fs.createWriteStream(join(dirname1, '../blog_sergio.txt'), { flags: 'a' })

const logError = (message) => {
  const now = nowInGuatemala()
  logStream.write(`[ERROR] ${now} - ${message}\n`)
}

const request = (method, path, body) => {
  const now = nowInGuatemala()
  logStream.write(`[REQUEST] ${now} - ${method} ${path} - Payload: ${JSON.stringify(body)}\n`)
}

const response = (method, path, body) => {
  const now = nowInGuatemala()
  logStream.write(`[RESPONSE] ${now} - ${method} ${path} - Payload: ${JSON.stringify(body)}\n`)
}

export { logError, request, response }
