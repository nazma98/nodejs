const express = require('express')
const { v4: uuidv4 } = require('uuid');

const port = 8000

const app = express()

app.use(express.json())


const products = [
  {
    _id: uuidv4(),
    "name": "baked beans",
    "price": 0.4,
    "image": "beans.jpg",
    "type": "vegetables"
  },
  {
    _id: uuidv4(),
    "name": "hot dogs",
    "price": 1.99,
    "image": "hotdogs.jpg",
    "type": "meat"
  },
];

app.get('/status', (req, res) => {
  res.send('OK')
})

app.get('/api/products', (req, res) => {
  res.send(products)
});

app.post('/api/products', (req, res) => {
  const newProductData = req.body;
  const newProduct = { _id:uuidv4(), ...newProductData}
  products.unshift(newProduct)

  res.status(201).json(newProduct)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})