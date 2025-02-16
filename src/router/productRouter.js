const express = require('express');

const { productServices } = require('../service');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
  res.send(productServices.getAllProducts());
});

productRouter.post('/', (req, res) => {
  res.status(201).json(productServices.createProduct(req.body));
});

productRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedProduct = productServices.updateProduct(id, req.body);
  res.status(201).json(updatedProduct);
});

productRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  productServices.deleteProduct(id);
  res.status(201).json({ message: 'Product has been deleted' });
});

module.exports = productRouter;
