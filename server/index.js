const express = require('express');
const pc = require('./controller');
const massive = require('massive')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env


const app = express()
app.use(express.json())

app.get(`/api/inventory`, pc.getAll)

app.post(`/api/inventory`, pc.createItem)

app.delete(`/api/inventory/:id`, pc.deleteItem)

app.put(`/api/inventory/:id`, pc.updateItem)


// const port = 4000;

massive(CONNECTION_STRING).then(connection => {
  app.set('db', connection)
  app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))