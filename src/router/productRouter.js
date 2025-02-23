const express = require('express');

const productRouter = express.Router();

const { productServices } = require('../service');

const products = [
    {
        "_id": "7c08c0d2-5ac7-4cab-afbf-5b379a7f9e73",
        "name": "beef",
        "price": 1.4,
        "image": "beef.jpg",
        "type": "meat"
    },
    {
        "_id": "eb64c741-6859-4ff8-b3c0-ff6f55b66b13",
        "name": "baked beans",
        "price": 0.4,
        "image": "beans.jpg",
        "type": "vegetables"
    },
    {
        "_id": "b137eb7c-40ab-497f-836e-a69d4c709111",
        "name": "hot dogs",
        "price": 1.99,
        "image": "hotdogs.jpg",
        "type": "meat"
    }
];

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
    const productIndex = products.findIndex((product) => product._id === id);

    if (productIndex === -1) {
        return res.status(400).json({ message: `No product available with id ${id}` });
    }

    products.splice(productIndex, 1);
    res.status(201).json({ message: 'Product has been deleted' });
});

productRouter.post('')
module.exports = productRouter;