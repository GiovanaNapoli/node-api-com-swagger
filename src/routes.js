const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) =>  {
	response.send('Olá mundo');
});

module.exports = routes;