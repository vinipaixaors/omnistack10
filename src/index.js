const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:nrgnrg@cluster0-odlrz.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmtros:
// Query Params: request.query (Filtros, ordenação, paginação, ... )
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// app.post('/users', (request, response) => {
//   console.log(request.body)
//   return response.json({menssage : 'hello OmniStack vini'})
// })

app.listen(3333)