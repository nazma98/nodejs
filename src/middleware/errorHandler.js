const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.message === 'Product not found') {
    return res.status(400).send(err.message);
  }
  res.status(500).send('Internal server error');
};

module.exports = {
  errorHandler,
};
