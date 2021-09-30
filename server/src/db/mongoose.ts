// const mongoose = require("mongoose");
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Starting MongoDB local server
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
  } catch (error) {
    console.error('ERROR! ', error);
  }
})();
