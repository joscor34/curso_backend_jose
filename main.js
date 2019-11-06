'use strict'
//Librerias
const express = require('express')
const colors = require('colors')
const bodyParser = require('body-parser')

//Aplicacion
const app = express()

//Configuracion de la App
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token')

  res.header('Access-Control-Expose-Headers', 'x-auth-token')

  next()
}) 

app.use(bodyParser.urlencoded({
  extended: true
}))

var port = 8000

app.get('/', (req, res) => {
  res.send('Entraste a la ruta raiz')
})

app.get('/jose', (req, res) => {
  res.send('Hola mi nombre es Jose')
})

app.get('/info', (req, res) => {
  res.send('Algo increible esta por venir :D')
})

app.post('/saludo', (req, res) => {
  var name = req.body.name

  res.send(`Hola ${name} un gusto en conocerte`)
})

//Correr app
app.listen(port, () => {
  console.log(colors.rainbow('Felicidades tu API esta corriendo en http://localhost:8000'))
})