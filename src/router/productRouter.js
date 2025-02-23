const express = require('express');

const productRouter = express.Router();

const { productServices } = require('../service');

productRouter.get('/', (req, res) => {
    res.send(productServices.getAllProducts());
});

productRouter.post('/', (req, res) => {
    const newProductData = req.body;

    res.status(201).json(productServices.createProduct(newProductData));
});

productRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const updatedProduct = productServices.updateProduct(id, payload);
    res.status(201).json(updatedProduct);
});

productRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    productServices.deleteProduct(id);
    res.status(201).json({ message: 'Product has been deleted' });
});

productRouter.post('')
module.exports = productRouter;