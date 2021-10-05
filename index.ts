const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express()
app.use(cors())

app.get('/', function(request, response) {
  response.send('Estou funcionando')
})

app.post('/login', express.json(), function(request, response) {
  console.log(request.body)
  response.json({ created: true }).status(201).send()
})

app.post('/quit', bodyParser.text(), function(request, response) {
  const data = JSON.parse(request.body)
  console.log(data)
  response.json({ created: true }).status(201).send()
})

app.post('/visibility-change', express.json(), function(request, response) {
  console.log(request.body)
  response.json({ created: true }).status(201).send()
})

app.listen(3000, function () {
  console.log('App escutando na porta 3000.')
})