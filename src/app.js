require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { logRequestMiddleware, errorHandler } = require('./middleware');
const { configureRouter } = require('./router');

const port = 8000;

const app = express();

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB;

const connectDB = () => {
  console.log('Connecting mongodb...');
  mongoose
    .connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,
    })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => console.err(`MongoDB connection failed!! ${err}`));
};

connectDB();

app.use(express.json());

app.use(logRequestMiddleware);

configureRouter(app);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
