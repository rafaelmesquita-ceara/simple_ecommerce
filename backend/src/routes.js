const express = require('express');
const routes = express.Router();

const ProductsController = require('./Controllers/ProductsController');
//Test
routes.get('/', (req, res) => res.json({
  "name" : process.env.APP_NAME, 
  "status" : process.env.APP_STATUS
}))

//PRODUCTS
routes.post('/produtos', ProductsController.Create);
routes.get('/produtos/', ProductsController.Read);
routes.put('/produtos/:CD_Produtos', ProductsController.Update);
routes.delete('/produtos/:CD_Produtos', ProductsController.Delete);

module.exports = routes;