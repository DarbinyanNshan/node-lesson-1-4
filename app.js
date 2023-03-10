const express = require('express');
const app = express();
require('dotenv').config()

const {
   getUsers,
   getUser 
  } = require('./controllers/UserController');

const { 
   PORT,
   HOST 
  } = require('./constants');



app.get('/users', getUsers)
app.get('/users/:id', getUser)

app.listen(PORT, () => {
  console.log(`App listening on port http://${HOST}:${PORT}`)
})