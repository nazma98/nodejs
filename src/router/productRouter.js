const express = require('express');
const { v4: uuidv4 } = require('uuid');

const productRouter = express.Router();

const products = [
  {
    _id: '8f9a5e60-2b6d-4051-9ff4-1aca15bd8e01',
    name: 'baked beans',
    price: 0.4,
    image: 'beans.jpg',
    type: 'vegetables',
  },
  {
    _id: 'fda32bb2-c6be-4e6a-abeb-2dca8fca3e83',
    name: 'hot dogs',
    price: 1.99,
    image: 'hotdogs.jpg',
    type: 'meat',
  },
];

productRouter.get('/', (req, res) => {
  res.send(products);
});

productRouter.post('/', (req, res) => {
  const newProductData = req.body;
  const newProduct = { _id: uuidv4(), ...newProductData };
  products.unshift(newProduct);

  res.status(201).json(newProduct);
});

productRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  let updatedProductIndex = products.findIndex((product) => product._id === id);

  if (updatedProductIndex === -1) {
    return res.status(400).json({ message: `No product exists with id ${id}` });
  }

  products[updatedProductIndex] = {
    ...products[updatedProductIndex],
    ...payload,
  };

  res.status(201).json(products[updatedProductIndex]);
});

productRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  let productIndex = products.findIndex((product) => product._id === id);

  if (productIndex === -1) {
    return res.status(400).json({ message: `No product exists with id ${id}` });
  }

  products.splice(productIndex, 1);

  res.status(201).json({ message: 'Product has been deleted' });
});

module.exports = productRouter;
