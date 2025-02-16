const { v4: uuidv4 } = require('uuid');

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

const createProduct = (productPayload) => {
  const newProduct = { _id: uuidv4(), ...productPayload };
  products.unshift(newProduct);
  return newProduct;
};

const getAllProducts = () => products;

const updateProduct = (id, payload) => {
  let updatedProductIndex = products.findIndex((product) => product._id === id);

  if (updatedProductIndex === -1) {
    throw new Error(`Product not found`);
  }

  products[updatedProductIndex] = {
    ...products[updatedProductIndex],
    ...payload,
  };

  return products[updatedProductIndex];
};

const deleteProduct = (id) => {
  let productIndex = products.findIndex((product) => product._id === id);

  if (productIndex === -1) {
    throw new Error(`No product exists with id ${id}`);
  }

  products.splice(productIndex, 1);

  return true;
};

module.exports = {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
};
