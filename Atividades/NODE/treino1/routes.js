const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginaInicial);

// Rotas de contato
route.post(`/home/senha`, homeController.tratarSenha);


module.exports = route;
