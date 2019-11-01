'use strict'
//Librerias
const express = require('express')
const colors = require('colors')

//Aplicacion
const app = express()

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
//Correr app
app.listen(port, () => {
  console.log(colors.rainbow('Felicidades tu API esta corriendo en http://localhost:8000'))
})