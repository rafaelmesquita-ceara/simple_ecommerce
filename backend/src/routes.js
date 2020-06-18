const express = require('express');
const routes = express.Router();
const verifyJWT = require('./Services/verifyjwt');
const ProductsController = require('./Controllers/ProductsController');
const SessionController = require('./Controllers/SessionController');
const ClientsController = require('./Controllers/ClientsController');
const AdressController = require('./Controllers/AdressController');
const SalesController = require('./Controllers/SalesController');
const integraCorreios = require('./Services/integra-correios');

//Test
routes.get('/', (req, res) => res.json({
  "name" : process.env.APP_NAME, 
  "status" : process.env.APP_STATUS
}))

//SESSION
routes.post('/session', SessionController.Create);

//PRODUCTS
routes.post('/produtos', verifyJWT, ProductsController.Create);
routes.get('/produtos/', ProductsController.Read);
routes.put('/produtos/:CD_Produtos', verifyJWT, ProductsController.Update);
routes.delete('/produtos/:CD_Produtos', verifyJWT, ProductsController.Delete);

//CLIENTS
routes.post('/clientes', ClientsController.Create);
routes.get('/clientes/', verifyJWT, ClientsController.Read);
routes.put('/clientes/:id', verifyJWT, ClientsController.Update);
routes.delete('/clientes/:id', verifyJWT, ClientsController.Delete);

//ADRESS
routes.post('/enderecos', AdressController.Create);
routes.get('/enderecos/', verifyJWT, AdressController.Read);
routes.put('/enderecos/:id', verifyJWT, AdressController.Update);
routes.delete('/enderecos/:id', verifyJWT, AdressController.Delete);

//SALES
routes.post('/pedidos', SalesController.Create);
routes.get('/pedidos/', verifyJWT, SalesController.Read);
routes.put('/pedidos/:id', verifyJWT, SalesController.Update);
routes.delete('/pedidos/:id', verifyJWT, SalesController.Delete);

//SERVICES
routes.post('/calculafrete', integraCorreios.CalculaFrete);
routes.post('/buscacep', integraCorreios.BuscaPorCEP);

module.exports = routes;