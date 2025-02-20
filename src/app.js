const express = require('express')
const { v4: uuidv4 } = require('uuid');

const port = 8000

const app = express()

app.use(express.json())


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

app.get('/status', (req, res) => {
  res.send('OK')
})

app.get('/api/products', (req, res) => {
  res.send(products)
});

app.post('/api/products', (req, res) => {
  const newProductData = req.body;
  const newProduct = { _id: uuidv4(), ...newProductData }
  products.unshift(newProduct)

  res.status(201).json(newProduct)
});

app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const updatedProductIndex = products.findIndex((product) => product._id === id);
  const payload = req.body;

  if (updatedProductIndex === -1) {
    return res.status(400).json({ message: `No product available with id ${id}` })
  }

  products[updatedProductIndex] = { ...products[updatedProductIndex], ...payload }

  res.status(201).json({ message: `Product updated successfully!` })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});