const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB;

const connectDB = async () => {
  console.log('Connecting mongodb...');
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.err(`MongoDB connection failed!! ${error}`);
  }
};

module.exports = connectDB;
