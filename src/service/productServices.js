const { v4: uuidv4 } = require('uuid');

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

const getAllProducts = () => products;

const createProduct = ( productPayload ) => {
        const newProduct = { _id: uuidv4(), ...productPayload }
        products.unshift(newProduct)

        return newProduct;
}

const updateProduct = (id, payload) => {
    const updatedProductIndex = products.findIndex((product) => product._id === id);

    if (updatedProductIndex === -1) {
        throw new Error (`No product available with id ${id}`);
    }

    products[updatedProductIndex] = { ...products[updatedProductIndex], ...payload }

    return products[updatedProductIndex];
}

const deleteProduct = (id) => {
    const productIndex = products.findIndex((product) => product._id === id);

    if (productIndex === -1) {
        throw new Error (`No product available with id ${id}`);
    }

    products.splice(productIndex, 1);
    return products;
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};