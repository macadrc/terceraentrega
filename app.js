
const express = require('express');
const ProductManager = require('./productManager');
const app = express();


const productManager = new ProductManager('productos.json');


app.get('/products', (req, res) => {
  const limit = req.query.limit; 


  const products = productManager.getProducts(limit);

  res.json({ products });
});


app.listen(3000, () => {
  console.log('Servidor Express en funcionamiento en el puerto 3000');
});
