const express = require('express');

const { productController } = require('../controller');

const productRouter = express.Router();

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;
