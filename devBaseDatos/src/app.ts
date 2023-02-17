import express from 'express'
import config from './config'
import { ReqRes } from './types'
import fs from 'fs'
import cors from 'cors'

const app = express()

// ? Middleware
app.use(cors())
app.use(express.json())

// ? Puerto
app.set('port', config.port)

// ? Ruta principal
app.get<ReqRes>('/', (_, res) => {
  res.status(200).json({
    status: true,
    message: 'Back Basico para Una extensiones de Chrome'
  })
})

// leer el archivo de texto

// ? Rutas
app.get<ReqRes>('/name', (_, res) => {
  fs.readFile('name.txt', 'utf-8', (err, data) => {
    if (err != null) {
      return res.status(500).json({
        status: false,
        message: 'Error al leer el archivo'
      })
    }
    res.status(200).json({
      status: true,
      data
    })
  })
})

// obtener el nombre y almacenarlo en archivo de texto
app.post<ReqRes>('/name', (req, res) => {
  const name: string = req.body.name
  // name tiene que ser un string
  if (typeof name !== 'string') {
    return res.status(400).json({
      status: false,
      message: 'El nombre debe ser un string'
    })
  }
  // si el nombre es un string
  // escribir el nombre en un archivo de texto
  // cda vez que se envie un nombre se sobreescribira el archivo
  fs.writeFile('name.txt', name, (err) => {
    if (err != null) {
      return res.status(500).json({
        status: false,
        message: 'Error al escribir el archivo'
      })
    }
  })

  return res.status(200).json({
    status: true,
    message: 'Nombre guardado'
  })
})
// ? middlewares
// app.use(handleError)
// app.use(notFound)

export default app
