const { Router } = require("express");


module.exports = Router().all('/')
  .get('/user', require('./controllers/UserController').getAllUsers)
  .post('/user', require('./controllers/UserController').createUser)
  .get('/user/:id', require('./controllers/UserController').getUserById)
  .put('/user/:id', require('./controllers/UserController').updateUser)
  .delete('/user/:id', require('./controllers/UserController').deleteUser)