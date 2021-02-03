const express = require('express');
const routes = express.Router();

const userController = require('./controllers/UserController');

routes.get('/users', userController.index);
routes.post('/users', userController.create);
routes.put('/users/:id', userController.update);

module.exports = routes;