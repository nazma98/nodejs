const express = require('express')
const  { configureRouter } = require('./router');

const port = 8000

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${Date()} - ${req.method} - ${req.url}`);
  next();
});

configureRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});