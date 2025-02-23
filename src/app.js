const express = require('express')
const  { configureRouter } = require('./router');
const { logRequestMiddleware } = require('./middleware');

const port = 8000

const app = express()

app.use(express.json())

app.use(logRequestMiddleware);

configureRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});