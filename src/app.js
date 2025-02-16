const express = require('express');

const { productRouter, userRouter } = require('./router');

const port = 8000;

const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.send('OK');
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
